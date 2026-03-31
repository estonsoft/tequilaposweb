function toggleAccordion(button) {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  const contentId = button.getAttribute('aria-controls');
  const content = document.getElementById(contentId);

  if (!content) return;

  if (expanded) {
    // Collapse
    button.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = null;
    button.querySelector('svg').style.transform = 'rotate(0deg)';
  } else {
    // Expand
    button.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
    button.querySelector('svg').style.transform = 'rotate(180deg)';
  }
}
