/* ─────────────────────────────────────────────────────
   ARYAN PANCHAL — PORTFOLIO  |  script.js
   ───────────────────────────────────────────────────── */

/* ── Baffle name scramble ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.querySelector('.baffle-text');
  if (nameEl && typeof baffle === 'function') {
    const b = baffle('.baffle-text', {
      characters: '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz',
      speed: 100,
    });
    b.start();
    b.reveal(2000, 2000);
  }
});


/* ── Navbar: add 'scrolled' class on scroll ──────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


/* ── Mobile nav toggle ───────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});


/* ── Scroll reveal ───────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Only animate once
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll('.reveal, .fade-up, .fade-in').forEach(el => {
  revealObserver.observe(el);
});


/* ── Smooth active nav highlighting ──────────────────── */
const sections = document.querySelectorAll('section[id], footer[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, {
  threshold: 0.4,
});

sections.forEach(s => sectionObserver.observe(s));
