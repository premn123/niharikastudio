// Function to toggle the display of submenu and dropdown menu
function toggleSubmenu() {
    const submenu = this.querySelector('.submenu');
    if (submenu) {
        submenu.classList.toggle('show');
    }

    const dropdownMenu = this.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
    }
}

// Add event listeners to menu items with submenus
const menuItemsWithSubmenus = document.querySelectorAll('.submenu, .dropdown');
menuItemsWithSubmenus.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', toggleSubmenu);
    menuItem.addEventListener('mouseleave', toggleSubmenu);
});

// Close submenus and dropdown menus when clicking outside
document.addEventListener('click', (event) => {
    menuItemsWithSubmenus.forEach((menuItem) => {
        if (!menuItem.contains(event.target)) {
            const submenu = menuItem.querySelector('.submenu');
            if (submenu) {
                submenu.classList.remove('show');
            }

            const dropdownMenu = menuItem.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
