document.addEventListener('DOMContentLoaded', () => {
    // Select the Gallery link and submenu
    const galleryToggle = document.getElementById('galleryToggle');
    const submenu = document.querySelector('.submenu');

    // Add a click event listener to the Gallery link
    galleryToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Toggle the submenu's visibility with animation
        if (submenu.style.maxHeight === '0px' || submenu.style.maxHeight === '') {
            submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Expand submenu
            submenu.style.opacity = '1'; // Fade in submenu
        } else {
            submenu.style.maxHeight = '0px'; // Collapse submenu
            submenu.style.opacity = '0'; // Fade out submenu
        }
    });
});