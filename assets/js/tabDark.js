document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Reset all buttons
      buttons.forEach(btn => {
        btn.classList.remove(
          'active',
          'bg-white',
          'text-black',
          'hover:bg-black',
          'hover:text-white'
        );
        btn.classList.add(
          'bg-black',
          'text-white',
          'hover:bg-white',
          'hover:text-black'
        );
      });

      // Hide all panes
      panes.forEach(pane => pane.classList.add('hidden'));

      // Activate clicked button
      button.classList.add(
        'active',
        'bg-white',
        'text-black',
        'hover:bg-black',
        'hover:text-white'
      );
      button.classList.remove(
        'bg-black',
        'text-white',
        'hover:bg-white',
        'hover:text-black'
      );

      // Show the corresponding pane
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.remove('hidden');
    });
  });
});
