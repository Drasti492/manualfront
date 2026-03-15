// scripts/withraw.js — FINAL, STABLE, FULLY SYNCED & POLISHED

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  // DOM Elements
  const mainContent     = document.getElementById("mainContent");
  const balanceEl       = document.getElementById("profile-balance");
  const tasksCountEl    = document.getElementById("tasks-count");
  const amountInput     = document.getElementById("withdrawal-amount");
  const notification    = document.getElementById("withdraw-notification");
  const historyEl       = document.getElementById("withdrawal-history");
  const form            = document.getElementById("withdrawal-form");
  const availableBalEl  = document.getElementById("available-balance");

  let userBalance = 0;

  // Hide until loaded
  mainContent.style.display = "none";

  // Notification helper
  function showMessage(message, type = "blue") {
    notification.textContent = message;
    notification.className = "notification-slide show " + type;
    setTimeout(() => notification.classList.remove("show"), 7000);
  }

  // Disable native validation
  form.setAttribute("novalidate", true);

  // Load verification status
  const status = await getUserStatus();
  updatePageForUser(status);

  // Load balance & tasks
  async function loadUserBalance() {
    try {
      const res = await fetch("https://manual-back.onrender.com/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Failed to load user");

      const data = await res.json();
      const user = data.user;

      userBalance = Number(user.walletBalance) || 0;
      balanceEl.textContent = `$${userBalance.toFixed(2)}`;
      if (availableBalEl) availableBalEl.textContent = `$${userBalance.toFixed(2)}`;

      tasksCountEl.textContent = user.completedTasks ?? 0;
    } catch (err) {
      console.error("Balance load error:", err);
      balanceEl.textContent = "$0.00";
      if (availableBalEl) availableBalEl.textContent = "$0.00";
      tasksCountEl.textContent = "0";
    }
  }

  if (status.verified) {
    await loadUserBalance();
  } else {
    balanceEl.textContent = "$0.00";
    if (availableBalEl) availableBalEl.textContent = "$0.00";
    tasksCountEl.textContent = "0";
  }

  // Load withdrawal history
  async function loadWithdrawalHistory() {
    if (!historyEl) return;
    historyEl.innerHTML = "<div style='font-style:italic;color:#64748b;'>Loading...</div>";

    try {
      const res = await fetch("https://manual-back.onrender.com/api/withdrawals/history", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      const history = data.history || [];

      historyEl.innerHTML = history.length
        ? ""
        : "<div style='font-style:italic;color:#64748b;'>No withdrawals yet</div>";

      history.forEach(w => {
        const div = document.createElement("div");
        div.style.padding = "8px 0";
        div.innerHTML = `
          <strong>$${Number(w.amount).toFixed(2)}</strong> —
          <span style="text-transform:capitalize;">${w.status}</span><br>
          <small style="color:#64748b;">${new Date(w.createdAt).toLocaleString()}</small>
        `;
        historyEl.appendChild(div);
      });
    } catch (err) {
      historyEl.innerHTML = "<div style='color:#ef4444;'>Unable to load history</div>";
    }
  }

  await loadWithdrawalHistory();

  // Dynamic payment method behavior
  const methodSelect   = document.getElementById("payment-method");
  const addressGroup   = document.getElementById("payment-address-group");
  const addressInput   = document.getElementById("payment-address");
  const addressLabel   = document.getElementById("payment-address-label");
  const addressHint    = document.getElementById("address-hint");

  if (methodSelect && addressGroup) {
    methodSelect.addEventListener("change", () => {
      const method = methodSelect.value;
      if (!method) {
        addressGroup.style.display = "none";
        return;
      }

      addressGroup.style.display = "block";
      addressInput.value = "";
      addressInput.focus();

      let label = "Payment Details";
      let placeholder = "Enter your details...";
      let hint = "";

      switch (method) {
        case "PayPal":
          label = "PayPal Email";
          placeholder = "example@gmail.com";
          hint = "Must be a valid PayPal email";
          break;
        case "Venmo":
          label = "Venmo Username or Phone";
          placeholder = "@yourvenmo or 555-123-4567";
          hint = "Include @ for username";
          break;
        case "Cash App":
          label = "Cash App $Cashtag";
          placeholder = "$YourCashtag";
          hint = "Include the $ sign";
          break;
        case "Phone Number":
          label = "Mobile Number";
          placeholder = "+1 (555) 123-4567";
          hint = "Include country code if needed";
          break;
      }

      addressLabel.innerHTML = `<i class="fas fa-id-card"></i> ${label}`;
      addressInput.placeholder = placeholder;
      addressHint.textContent = hint;
    });
  }

  // Live fee preview (0.38%)
  amountInput.addEventListener("input", () => {
    const amt = Number(amountInput.value);
    if (amt >= 38 && !isNaN(amt)) {
      const fee = amt * 0.0038;
      const net = amt - fee;
      showMessage(
        `You will receive ≈ $${net.toFixed(2)} after 0.38% fee ($${fee.toFixed(2)})`,
        "blue"
      );
    }
  });

  // Submit handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount  = Number(amountInput.value);
    const method  = methodSelect?.value;
    const address = addressInput?.value.trim();

    notification.classList.remove("show", "red", "blue", "success");

    if (!amount || isNaN(amount) || amount <= 0) {
      showMessage("Enter a valid amount", "red");
      return;
    }
    if (amount < 38) {
      showMessage("Minimum withdrawal is $38", "blue");
      return;
    }
    if (amount > userBalance) {
      showMessage(`Insufficient balance ($${userBalance.toFixed(2)} available)`, "red");
      return;
    }
    if (!method) {
      showMessage("Select a payment method", "red");
      return;
    }
    if (!address) {
      showMessage("Enter your payment details", "red");
      return;
    }

    try {
      const res = await fetch("https://manual-back.onrender.com/api/withdrawals/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ amount, paymentMethod: method, paymentAddress: address })
      });

      const data = await res.json();

      if (!res.ok) {
        showMessage(data.message || "Request failed — please try again", "red");
        return;
      }

      showMessage("Withdrawal request submitted. It will be reviewed within 1–3 business days.", "success");

      amountInput.value = "";
      if (addressInput) addressInput.value = "";

      await loadUserBalance();
      await loadWithdrawalHistory();
    } catch (err) {
      showMessage("Network error — please check connection and try again", "red");
    }
  });

  // Show page
  mainContent.style.display = "block";
});