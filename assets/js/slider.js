document.addEventListener("DOMContentLoaded", function () {
  ["#main-slider", "#mobile-slider"].forEach(function (selector) {
    var root = document.querySelector(selector);
    if (!root) return;

    var splide = new Splide(selector, {
      type: "slide", // Use 'slide' for simple progression (no loop)
      rewind: false, // Disable rewind to keep the progress bar accurate
      arrows: true, // Keep the arrows for navigation (we will style them)
      pagination: false, // Explicitly hide the default Splide dots
      speed: 500, // Match the transition speed to the CSS transition
    });

    var bar = splide.root.querySelector(".my-slider-progress-bar");

    splide.on("mounted move", function () {
      if (!bar) return;
      var end = splide.Components.Controller.getEnd() + 1;
      var percentage = String((100 * (splide.index + 1)) / end) + "%";
      bar.style.width = percentage;
    });

    splide.mount();
  });
});
