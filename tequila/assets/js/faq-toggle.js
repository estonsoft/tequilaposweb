document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.faq-question');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      button.setAttribute('aria-expanded', !expanded);

      if (!expanded) {
        // Open the answer
        answer.style.maxHeight = answer.scrollHeight + 'px';
        button.querySelector('svg').style.transform = 'rotate(180deg)';
      } else {
        // Close the answer
        answer.style.maxHeight = null;
        button.querySelector('svg').style.transform = 'rotate(0deg)';
      }

      // Accordion behavior: close others
      buttons.forEach(btn => {
        if (btn !== button) {
          btn.setAttribute('aria-expanded', 'false');
          btn.nextElementSibling.style.maxHeight = null;
          btn.querySelector('svg').style.transform = 'rotate(0deg)';
        }
      });
    });
  });
});
