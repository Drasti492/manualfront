// scripts/pricing.js — FINAL, FULL, PAYHERO-ENABLED (FIXED)

document.addEventListener("DOMContentLoaded", async () => {
  const PRICE_IN_USD = 10.40;

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

      priceEl.textContent = formatCurrency(amount, currency);
      flagEl.textContent = getFlag(currency);
    } catch {
      priceEl.textContent = "$10.40";
      flagEl.textContent = "USD";
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
    const phone = phoneInput.value.trim();
    const token = localStorage.getItem("token");

    paymentMessage.textContent = "";

    if (!token) {
      paymentMessage.textContent = "Please login first.";
      return;
    }

    if (!phone || phone.length < 10) {
      paymentMessage.textContent =
        "Enter phone in format 2547XXXXXXXX";
      return;
    }

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
          body: JSON.stringify({ phone })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        paymentMessage.textContent =
          data.message || "Payment initiation failed";
        return;
      }

      paymentMessage.textContent =
        "STK prompt sent. Confirm on your phone.";
    } catch {
      paymentMessage.textContent =
        "Network error. Try again.";
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
