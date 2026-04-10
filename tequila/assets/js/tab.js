document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab]');
    const panes = document.querySelectorAll('.tab-pane');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset all buttons to inactive state
            buttons.forEach(btn => {
                btn.classList.remove(
                    'active',
                    'bg-black',
                    'text-white',
                    'hover:bg-white',
                    'hover:text-black'
                );
                btn.classList.add(
                    'bg-white',
                    'border-gray-300',
                    'text-black',
                    'hover:bg-gray-100',
                    'hover:text-black'
                );
            });

            // Hide all tab panes
            panes.forEach(pane => pane.classList.add('hidden'));

            // Set clicked button to active state
            button.classList.add(
                'active',
                'bg-black',
                'text-white',
                'hover:bg-white',
                'hover:text-black'
            );
            button.classList.remove(
                'bg-white',
                'border-gray-300',
                'text-black',
                'hover:bg-gray-100'
            );

            // Show the clicked tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
});
