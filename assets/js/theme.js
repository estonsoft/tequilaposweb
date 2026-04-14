(function () {
  // ── Apply saved theme immediately (before paint) to prevent flash ──
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

// ── Wire up the toggle once DOM is ready ──
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  // Set toggle state to match current theme
  toggle.checked = document.documentElement.classList.contains('dark');

  toggle.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});