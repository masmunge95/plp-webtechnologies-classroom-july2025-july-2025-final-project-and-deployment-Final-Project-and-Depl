document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links > li');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu');

        // Check if the list item has a dropdown menu
        if (dropdown) {
            link.addEventListener('click', (event) => {
                // Prevent the link from navigating
                event.preventDefault();

                // Close other open dropdowns
                navItems.forEach(otherItem => {
                    const otherDropdown = otherItem.querySelector('.dropdown-menu');
                    if (otherDropdown && otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });

                // Toggle the active class on the clicked dropdown
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close dropdown if a click occurs outside of the nav-links
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-links')) {
            navItems.forEach(item => {
                const dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
});