// Navigation Scroll Effect (Background blur on scroll)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation (Ab baar-baar chalega upar-neeche dono taraf!)
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Screen par aate hi animation chalu
            entry.target.classList.add('active');
        } else {
            // Screen se hat-te hi reset, taaki wapas aane par fir animate ho
            entry.target.classList.remove('active');
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxBg = document.getElementById('parallax-bg');
    if(parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});