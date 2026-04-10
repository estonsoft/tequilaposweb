document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Splide
  var splide = new Splide("#main-slider", {
    type: "slide", // Use 'slide' for simple progression (no loop)
    rewind: false, // Disable rewind to keep the progress bar accurate
    arrows: true, // Keep the arrows for navigation (we will style them)
    pagination: false, // Explicitly hide the default Splide dots
    speed: 500, // Match the transition speed to the CSS transition
  });

  // 2. Select the progress bar element
  var bar = splide.root.querySelector(".my-slider-progress-bar");

  // 3. Attach the event listener to update the bar width
  splide.on("mounted move", function () {
    // Get the last index of the slides
    var end = splide.Components.Controller.getEnd() + 1;

    // Calculate the percentage: (current index + 1) / total slides * 100
    var percentage = String((100 * (splide.index + 1)) / end) + "%";

    // Apply the calculated width to the progress bar element
    bar.style.width = percentage;
  });

  // 4. Mount the slider to start it
  splide.mount();
});
