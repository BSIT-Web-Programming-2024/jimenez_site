document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove active class from all sections
            sections.forEach(section => section.classList.remove('active', 'fade-in'));

            // Add active class to the selected section
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.classList.add('active', 'fade-in');  // Add fade-in animation class

            // Optionally scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Set the default active section to home on page load
    const homeSection = document.getElementById('home');
    homeSection.classList.add('active', 'fade-in');
});
