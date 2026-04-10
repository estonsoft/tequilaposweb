const monthlyBtn = document.getElementById("monthlyBtn");
  const annuallyBtn = document.getElementById("annuallyBtn");

  const starterPrice = document.getElementById("starterPrice");
  const premiumPrice = document.getElementById("premiumPrice");
  const personalPrice = document.getElementById("personalPrice");

  const prices = {
    monthly: {
      personal: "Free",
      starter: "$29.99/Month",
      premium: "$69.99/Month",
    },
    annually: {
      personal: "Free",
      starter: "$299/Year",
      premium: "$699/Year",
    },
  };

  function setPricing(mode) {
    if (mode === "monthly") {
      monthlyBtn.classList.add("bg-black", "text-white");
      monthlyBtn.classList.remove("text-gray-700");

      annuallyBtn.classList.add("text-gray-700");
      annuallyBtn.classList.remove("bg-black", "text-white");
    } else {
      annuallyBtn.classList.add("bg-black", "text-white");
      annuallyBtn.classList.remove("text-gray-700");

      monthlyBtn.classList.add("text-gray-700");
      monthlyBtn.classList.remove("bg-black", "text-white");
    }

    personalPrice.textContent = prices[mode].personal;
    starterPrice.textContent = prices[mode].starter;
    premiumPrice.textContent = prices[mode].premium;
  }

  setPricing("monthly");

  monthlyBtn.addEventListener("click", () => setPricing("monthly"));
  annuallyBtn.addEventListener("click", () => setPricing("annually"));