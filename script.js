// Fade in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navObs = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(l => {
      l.style.color = '';
      if (l.getAttribute('href') === '#' + e.target.id) l.style.color = 'var(--accent)';
    });
  }),
  { rootMargin: '-40% 0px -40% 0px' }
);
sections.forEach(s => navObs.observe(s));

// Current year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
