
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
// Menu shift karila moblie / large screen sati
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Menu box close karila 
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});