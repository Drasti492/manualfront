// scripts/withraw.js — PROFESSIONAL & FAST (FIXED, STABLE)

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

  // Hide everything until status is known
  mainContent.style.display = "none";

  const status = await getUserStatus();

  // Update UI instantly
  updatePageForUser(status);

  if (status.verified) {
    balanceEl.textContent = `$${status.balance.toFixed(2)}`;
  } else {
    balanceEl.textContent = "$0.00";
  }

  // Show page
  mainContent.style.display = "block";

  // ===============================
  // CUSTOM NOTIFICATION
  // ===============================
  function showError(message, type = "blue") {
    notification.textContent = message;
    notification.className = "notification-slide";
    notification.classList.add("show", type);

    setTimeout(() => {
      notification.classList.remove("show");
    }, 5000);
  }

  // Disable native validation
  document
    .getElementById("withdrawal-form")
    .setAttribute("novalidate", true);

  // ===============================
  // LOAD WITHDRAWAL HISTORY (FIXED)
  // ===============================
  async function loadWithdrawalHistory() {
    const historyEl = document.getElementById("withdrawal-history");
    if (!historyEl) return;

    try {
      const res = await fetch(
        "https://remj82.onrender.com/api/withdrawals/history",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!res.ok) throw new Error("Failed");

      const history = await res.json();
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
          <strong>$${w.amount}</strong> —
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

  // ✅ IMPORTANT: CALL IT
  await loadWithdrawalHistory();

  // ===============================
  // FORM SUBMIT (REAL BACKEND)
  // ===============================
  document
    .getElementById("withdrawal-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const amount = parseFloat(amountInput.value);
      const method = document.getElementById("payment-method").value;
      const address = document.getElementById("mobile-number").value;

      notification.classList.remove("show", "red", "blue", "success");

      if (!amount || amount < 12) {
        showError("Minimum withdrawal amount is $12", "blue");
        return;
      }

      if (amount > status.balance) {
        showError("Insufficient balance", "red");
        return;
      }

      if (!method || !address) {
        showError("Payment details required", "red");
        return;
      }

      try {
        const res = await fetch(
          "https://remj82.onrender.com/api/withdrawals/request",
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
          showError(data.message || "Withdrawal failed", "red");
          return;
        }

        showError(
          "Withdrawal request submitted. Pending admin approval.",
          "success"
        );

        amountInput.value = "";

        // Reload history after submit
        await loadWithdrawalHistory();

      } catch (err) {
        showError("Network error. Try again.", "red");
      }
    });

  // Real-time cleanup
  amountInput.addEventListener("input", () => {
    notification.classList.remove("show");
  });
});
