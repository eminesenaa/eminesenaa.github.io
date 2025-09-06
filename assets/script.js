document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');
    const scrollToTopBtn = document.getElementById('scrollToTop');

    function activate(hash) {
        const id = (hash || '#about').replace('#', '');
        sections.forEach(s => s.classList.toggle('active', s.id === id));
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }

    navLinks.forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const hash = a.getAttribute('href');
            history.pushState(null, '', hash);
            activate(hash);
        });
    });

    activate(location.hash);
    window.addEventListener('popstate', () => activate(location.hash));

    // Scroll to top functionality
    function toggleScrollToTop() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', toggleScrollToTop);
});