// scripts/pricing.js — FIXED FOR DYNAMIC KES AMOUNT & BETTER VALIDATION

document.addEventListener("DOMContentLoaded", async () => {
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

  const API_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

  let rates = {};
  let amountKES = 0;  // FIXED: Store calculated KES for backend

  overlay.style.display = "flex";
  mainContent.style.display = "none";

  const savedCurrency = localStorage.getItem("userCurrency");
  if (savedCurrency) {
    select.value = savedCurrency;
  }

  document
    .querySelectorAll(".if-verified, .if-not-verified")
    .forEach(el => (el.style.display = "none"));

  const status = await getUserStatus();

  if (status.verified) {
    document
      .querySelectorAll(".if-verified")
      .forEach(el => (el.style.display = "block"));
  } else {
    document
      .querySelectorAll(".if-not-verified")
      .forEach(el => (el.style.display = "block"));
  }

  async function loadRatesAndUpdate(currency) {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      rates = data.usd;

      const rate = rates[currency.toLowerCase()] || 1;
      const amount = (PRICE_IN_USD * rate).toFixed(2);

      // FIXED: Calculate KES equivalent (using USD to KES rate)
      const kesRate = rates.kes || 129;  // Fallback if API fails; update based on current rates
      amountKES = Math.ceil(PRICE_IN_USD * kesRate);  // Round up to whole KES

      priceEl.textContent = formatCurrency(amount, currency);
      flagEl.textContent = getFlag(currency);
    } catch {
      priceEl.textContent = "$11.94";
      flagEl.textContent = "USD";
      amountKES = 1540;  // Fallback fixed
    }
  }

  continueBtn.addEventListener("click", () => {
    const currency = select.value;
    localStorage.setItem("userCurrency", currency);
    overlay.style.display = "none";
    mainContent.style.display = "block";
    loadRatesAndUpdate(currency);
  });

  changeBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  // ===============================
  // PAYHERO STK PUSH (SECURE)
  // ===============================
  contactBtn.addEventListener("click", async () => {
    let phone = phoneInput.value.trim();
    const token = localStorage.getItem("token");

    paymentMessage.textContent = "";

    if (!token) {
      paymentMessage.textContent = "Please login first.";
      return;
    }

    // FIXED: Better phone validation (must start with 254, 12 digits total)
    if (!phone.startsWith("254") || phone.length !== 12 || isNaN(phone)) {
      paymentMessage.textContent = "Enter valid phone: 2547XXXXXXXX (12 digits)";
      return;
    }

    contactBtn.disabled = true;  // FIXED: Disable button during request
    paymentMessage.textContent = "Sending STK prompt…";

    try {
      const res = await fetch(
        "https://manual-back.onrender.com/api/payhero/stk-push",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ phone, amountKES })  // FIXED: Pass calculated amountKES
        }
      );

      const data = await res.json();

      if (!res.ok) {
        paymentMessage.textContent = data.message || "Payment initiation failed";
        contactBtn.disabled = false;
        return;
      }

      paymentMessage.textContent = "STK prompt sent. Confirm on your phone.";
    } catch {
      paymentMessage.textContent = "Network error. Try again.";
    } finally {
      contactBtn.disabled = false;  // Re-enable
    }
  });

  function getFlag(code) {
    const flags = {
      USD: "USD",
      NGN: "NGN",
      GHS: "GHS",
      KES: "KES",
      ZAR: "ZAR",
      INR: "INR",
      EUR: "EUR",
      GBP: "GBP",
      CAD: "CAD",
      AUD: "AUD"
    };
    return flags[code] || "USD";
  }

  function formatCurrency(amount, currency) {
    const symbols = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      NGN: "₦",
      INR: "₹",
      GHS: "GH₵",
      KES: "KSh",
      ZAR: "R",
      CAD: "$",
      AUD: "A$"
    };

    const symbol = symbols[currency] || "$";
    return `${symbol}${parseFloat(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2
    })}`;
  }
});