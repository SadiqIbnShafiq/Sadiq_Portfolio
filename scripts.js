document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Smooth scrolling and closing the nav
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close the navigation menu with animation
            navLinks.classList.remove('nav-active');
        });
    });
});


