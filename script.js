// Fade in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) link.style.color = 'var(--accent)';
});

// Year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
