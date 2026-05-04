document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  // Mobile Menu Toggle
  const toggleMenu = () => {
    const isOpen = !mobileMenu.classList.contains("-translate-x-full");
    mobileMenu.classList.toggle("-translate-x-full");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  };

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    const isOpen = !mobileMenu.classList.contains("-translate-x-full");
    if (isOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu();
    }
  });

  // Universal Accordion Logic for Mobile Menu
  const accordionHeaders = mobileMenu.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", (e) => {
      e.stopPropagation();
      const content = header.nextElementSibling;
      const icon = header.querySelector("svg");
      
      // Toggle current
      content.classList.toggle("hidden");
      if (icon) icon.classList.toggle("rotate-180");
    });
  });

  // Desktop Mega Menu Logic
  let active = 'food';
  window.setActive = function(cat) {
    active = cat;
    document.querySelectorAll('[data-panel]').forEach(p => {
      p.classList.toggle('hidden', p.getAttribute('data-panel') !== cat);
    });
    document.querySelectorAll('#categoryList [data-cat]').forEach(a => {
      const isActive = a.getAttribute('data-cat') === cat;
      a.classList.toggle('underline', isActive);
    });
  };

  window.clearActive = function() {
    setActive(active);
  };

  // Initialize Desktop State
  if (document.getElementById('categoryList')) {
    setActive(active);
  }
});
