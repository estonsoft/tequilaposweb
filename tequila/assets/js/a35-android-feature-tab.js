
  document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetTabId = button.dataset.tab;
        const targetTab = document.getElementById(targetTabId);

        // Hide all tab content
        tabContents.forEach((content) => {
          content.classList.add('opacity-0', 'pointer-events-none');
          content.classList.remove('opacity-100');
        });

        // Show the selected tab content
        targetTab.classList.add('opacity-100');
        targetTab.classList.remove('opacity-0', 'pointer-events-none');

        // Update button styles
        tabButtons.forEach((btn) => {
          const innerCircle = btn.querySelector('.w-3');
          if (btn.dataset.tab === targetTabId) {
            btn.classList.add('bg-gray-800', 'text-white', 'shadow-md', 'hover:bg-gray-700');
            btn.classList.remove('bg-gray-100', 'text-gray-800', 'shadow-sm', 'hover:bg-gray-200');
            innerCircle.classList.add('bg-white');
            innerCircle.classList.remove('bg-gray-600');
          } else {
            btn.classList.add('bg-gray-100', 'text-gray-800', 'shadow-sm', 'hover:bg-gray-200');
            btn.classList.remove('bg-gray-800', 'text-white', 'shadow-md', 'hover:bg-gray-700');
            innerCircle.classList.add('bg-gray-600');
            innerCircle.classList.remove('bg-white');
          }
        });
      });
    });
  });
