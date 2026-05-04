
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
        const activeBtnClasses = ['bg-black', 'text-white', 'shadow-md', 'dark:bg-white', 'dark:text-black'];
        const inactiveBtnClasses = ['bg-white', 'text-gray-900', 'shadow-sm', 'hover:bg-gray-50', 'border', 'border-gray-300', 'dark:bg-[#1c1c1c]', 'dark:text-gray-300', 'dark:border-gray-600', 'dark:hover:bg-[#2c2c2c]'];
        
        const activeDotClasses = ['bg-white', 'dark:bg-black', 'border-transparent'];
        const inactiveDotClasses = ['bg-gray-700', 'dark:bg-gray-400', 'border-gray-400', 'dark:border-gray-500'];

        tabButtons.forEach((btn) => {
          const dot = btn.querySelector('.tab-dot');
          if (btn.dataset.tab === targetTabId) {
            btn.classList.add(...activeBtnClasses);
            btn.classList.remove(...inactiveBtnClasses);
            if (dot) {
              dot.classList.add(...activeDotClasses);
              dot.classList.remove(...inactiveDotClasses);
            }
          } else {
            btn.classList.add(...inactiveBtnClasses);
            btn.classList.remove(...activeBtnClasses);
            if (dot) {
              dot.classList.add(...inactiveDotClasses);
              dot.classList.remove(...activeDotClasses);
            }
          }
        });
      });
    });
  });
