let isEnglish = true;

function toggleLanguage() {
  const slider = document.getElementById("slider");
  const text = document.getElementById("language-text");
  const toggle = document.getElementById("language-toggle");
  const flag = document.getElementById("flag-icon");

  const toggleWidth = toggle.offsetWidth;
  const sliderWidth = slider.offsetWidth;
  const textWidth = text.offsetWidth;

  const maxTranslate = toggleWidth - sliderWidth - 10; // 4px padding
  const textTranslate = maxTranslate - textWidth; // adjust text movement

  if (isEnglish) {
    // Move slider to right
    slider.style.transform = `translateX(${maxTranslate}px)`;

    // Move text to the left side
    text.style.transform = `translateX(${-textTranslate}px)`;
    text.textContent = "ESPAÑOL";

    // Change flag
    flag.src = "/assets/images/flags/espan.png";
    flag.alt = "Spain";
  } else {
    // Move slider back to left
    slider.style.transform = `translateX(0)`;

    // Move text back to original
    text.style.transform = `translateX(0)`;
    text.textContent = "ENGLISH";

    // Change flag
    flag.src = "/assets/images/flags/usa.png";
    flag.alt = "USA";
  }

  isEnglish = !isEnglish;
}

document
  .getElementById("language-toggle")
  .addEventListener("click", toggleLanguage);

//   this is fro hero fade up animation
const lottie = document.getElementById("heroLottie");
const heroText = document.getElementById("heroText");

// Wait until Lottie animation is ready
lottie.addEventListener("lottie-ready", () => {
  console.log("Lottie is ready!");

  // Optional: if you want to wait until Lottie finishes playing
  setTimeout(() => {
    // Animate text in
    heroText.classList.remove("opacity-0", "translate-y-6");
    heroText.classList.add("opacity-100", "translate-y-0");
  }, 500); // adjust 500ms as needed
});

// Slider
