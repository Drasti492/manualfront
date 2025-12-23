document.addEventListener("DOMContentLoaded", () => {
  const PRICE_IN_USD = 11.94;

  const priceEl = document.getElementById("priceAmount");
  const flagEl = document.getElementById("currencyFlag");
  const overlay = document.getElementById("currencyOverlay");
  const mainContent = document.getElementById("mainContent");
  const select = document.getElementById("currencySelect");
  const continueBtn = document.getElementById("continueBtn");
  const changeBtn = document.getElementById("changeCurrencyBtn");
  const contactBtn = document.getElementById("contactBtn");
  const phoneInput = document.getElementById("payheroPhone");
  const paymentMessage = document.getElementById("paymentMessage");

  const modal = document.getElementById("paymentModal");
  const loadingState = document.querySelector(".loading-state");
  const successState = document.querySelector(".success-state");
  const errorState = document.querySelector(".error-state");

  const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

  let amountKES = 0;

  overlay.style.display = "flex";
  mainContent.style.display = "none";

  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) select.value = savedCurrency;

  (async () => {
    document.querySelectorAll(".if-verified, .if-not-verified").forEach(el => el.style.display = "none");
    try {
      const status = await getUserStatus();
      document.querySelectorAll(status.verified ? ".if-verified" : ".if-not-verified")
        .forEach(el => el.style.display = "block");
    } catch {
      document.querySelectorAll(".if-not-verified").forEach(el => el.style.display = "block");
    }
  })();

  async function loadRates(currency) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const rate = data.usd[currency.toLowerCase()] || 1;
      const kesRate = data.usd.kes || 129;
      priceEl.textContent = formatCurrency(PRICE_IN_USD * rate, currency);
      flagEl.textContent = currency;
      amountKES = Math.ceil(PRICE_IN_USD * kesRate);
    } catch {
      priceEl.textContent = "$11.94";
      flagEl.textContent = "USD";
      amountKES = 1540;
    }
  }

  continueBtn.addEventListener("click", async () => {
    localStorage.setItem("userCurrency", select.value);
    overlay.style.display = "none";
    mainContent.style.display = "block";
    await loadRates(select.value);
  });

  changeBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    mainContent.style.display = "none";
  });

  function showModal(state) {
    modal.classList.remove("hidden");
    [loadingState, successState, errorState].forEach(s => s.classList.remove("active"));
    state.classList.add("active");
  }

  function closeModal(delay = 4000) {
    setTimeout(() => modal.classList.add("hidden"), delay);
  }

  function normalizePhone(input) {
    let phone = input.replace(/\D/g, "");
    if (phone.startsWith("0") && phone.length === 10) phone = "254" + phone.slice(1);
    if (phone.length === 9) phone = "254" + phone;
    if (!phone.startsWith("254") || phone.length !== 12) return null;
    return phone;
  }

  contactBtn.addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    const phone = normalizePhone(phoneInput.value);

    paymentMessage.textContent = "";

    if (!token) {
      paymentMessage.textContent = "Please log in to make a payment.";
      return;
    }

    if (!phone) {
      paymentMessage.textContent = "Enter a valid phone number.";
      return;
    }

    showModal(loadingState);

    try {
      const res = await fetch("https://manual-back.onrender.com/api/payhero/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ phone, amountKES })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        showModal(errorState);
        closeModal(5000);
        return;
      }

      const reference = data.reference;

      let attempts = 0;
      const maxAttempts = 45;

      const poll = setInterval(async () => {
        attempts++;

        try {
          const statusRes = await fetch(`https://manual-back.onrender.com/api/payhero/status/${reference}`, {
            headers: { Authorization: `Bearer ${token}` }
          });

          const statusData = await statusRes.json();

          if (statusData.status === "success") {
            clearInterval(poll);
            showModal(successState);
            closeModal(6000);
            location.reload();
          } else if (statusData.status === "failed") {
            clearInterval(poll);
            showModal(errorState);
            closeModal(5000);
          } else if (attempts >= maxAttempts) {
            clearInterval(poll);
            showModal(errorState);
            closeModal(5000);
          }
        } catch {
          if (attempts >= maxAttempts) {
            clearInterval(poll);
            showModal(errorState);
            closeModal(5000);
          }
        }
      }, 4000);

    } catch {
      showModal(errorState);
      closeModal(5000);
    }
  });

  function formatCurrency(amount, currency) {
    const symbols = {
      USD: "$", EUR: "€", GBP: "£", NGN: "₦",
      INR: "₹", GHS: "GH₵", KES: "KSh",
      ZAR: "R", CAD: "$", AUD: "A$"
    };
    return `${symbols[currency] || "$"}${amount.toFixed(2)}`;
  }
});