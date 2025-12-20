// scripts/withraw.js — FINAL, STABLE, BACKEND-ALIGNED

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const mainContent  = document.getElementById("mainContent");
  const balanceEl    = document.getElementById("profile-balance");
  const amountInput  = document.getElementById("withdrawal-amount");
  const notification = document.getElementById("withdraw-notification");
  const historyEl    = document.getElementById("withdrawal-history");
  const form         = document.getElementById("withdrawal-form");

  let userBalance = 0;

  // Hide page until data is ready
  mainContent.style.display = "none";

  // ===============================
  // UI NOTIFICATION
  // ===============================
  function showMessage(message, type = "blue") {
    notification.textContent = message;
    notification.className = "notification-slide show " + type;

    setTimeout(() => {
      notification.classList.remove("show");
    }, 5000);
  }

  // Disable native validation
  form.setAttribute("novalidate", true);

  // ===============================
  // LOAD USER STATUS (VERIFICATION)
  // ===============================
  const status = await getUserStatus();
  updatePageForUser(status);

  // ===============================
  // LOAD USER BALANCE (REAL SOURCE)
  // ===============================
  async function loadUserBalance() {
    const res = await fetch(
      "https://manual-back.onrender.com/api/auth/user",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    if (!res.ok) throw new Error("Failed to load user");

    const data = await res.json();
    userBalance = Number(data.user.walletBalance) || 0;
    balanceEl.textContent = `$${userBalance.toFixed(2)}`;
  }

  if (status.verified) {
    await loadUserBalance();
  } else {
    balanceEl.textContent = "$0.00";
  }

  // ===============================
  // LOAD WITHDRAWAL HISTORY
  // ===============================
  async function loadWithdrawalHistory() {
    if (!historyEl) return;

    historyEl.innerHTML =
      "<div style='font-style:italic;color:#64748b;'>Loading...</div>";

    try {
      const res = await fetch(
        "https://manual-back.onrender.com/api/withdrawals/history",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      const history = data.history || [];

      historyEl.innerHTML = "";

      if (!history.length) {
        historyEl.innerHTML =
          "<div style='font-style:italic;color:#64748b;'>No withdrawals yet</div>";
        return;
      }

      history.forEach(w => {
        const div = document.createElement("div");
        div.style.padding = "8px 0";
        div.innerHTML = `
          <strong>$${Number(w.amount).toFixed(2)}</strong> —
          <span style="text-transform:capitalize;">${w.status}</span><br>
          <small style="color:#64748b;">
            ${new Date(w.createdAt).toLocaleString()}
          </small>
        `;
        historyEl.appendChild(div);
      });

    } catch (err) {
      historyEl.innerHTML =
        "<div style='color:#ef4444;'>Unable to load withdrawal history</div>";
    }
  }

  await loadWithdrawalHistory();

  // ===============================
  // SUBMIT WITHDRAWAL
  // ===============================
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount  = Number(amountInput.value);
    const method  = document.getElementById("payment-method").value;
    const address = document.getElementById("mobile-number").value;

    notification.classList.remove("show", "red", "blue", "success");

    // Frontend validations (match backend)
    if (!amount || isNaN(amount)) {
      showMessage("Invalid amount", "red");
      return;
    }

    if (amount < 12) {
      showMessage("Minimum withdrawal is $12", "blue");
      return;
    }

    if (amount > userBalance) {
      showMessage("Insufficient balance", "red");
      return;
    }

    if (!method || !address) {
      showMessage("Payment details required", "red");
      return;
    }

    try {
      const res = await fetch(
        "https://manual-back.onrender.com/api/withdrawals/withdraw",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            amount,
            paymentMethod: method,
            paymentAddress: address
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        showMessage(data.message || "Withdrawal failed", "red");
        return;
      }

      showMessage(
        "Withdrawal request submitted. Pending admin approval.",
        "success"
      );

      amountInput.value = "";

      // Reload balance + history
      await loadUserBalance();
      await loadWithdrawalHistory();

    } catch (err) {
      showMessage("Network error. Try again.", "red");
    }
  });

  // Cleanup notification on typing
  amountInput.addEventListener("input", () => {
    notification.classList.remove("show");
  });

  // Show page when everything is ready
  mainContent.style.display = "block";
});
