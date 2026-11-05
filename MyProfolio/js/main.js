/* ============================================================
   main.js — Alvin Chan (詹彥堂) Personal Portfolio
   Minimalist Academic Design System
   Navigation, scroll effects, theme toggle, copy toast, animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileMenu();
  initScrollProgress();
  initScrollReveal();
  initActiveNavLinks();
  initBackToTop();
  initSmoothScroll();
  initCopyButtons();
  initYear();
});

/* ── 1. Theme Toggle (Dark / Light) ── */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    // Respect OS preference on first visit
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('portfolio-theme', initialTheme);
  }

  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });

  // Listen for system theme changes if user hasn't explicitly chosen
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme-custom')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    }
  });
}

/* ── 2. Navbar Scroll Glassmorphism Effect ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on initial load
}

/* ── 3. Mobile Navigation Drawer ── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileMenuClose');
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    mobileOverlay?.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });

  mobileOverlay?.addEventListener('click', () => {
    closeMenu();
  });

  // Close when clicking any nav link inside mobile menu
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ── 4. Scroll Progress Indicator ── */
function initScrollProgress() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }, { passive: true });
}

/* ── 5. Scroll Reveal with IntersectionObserver ── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── 6. Active Nav Links Highlighting ── */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-links .nav-item');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links .mobile-link');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        
        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35, rootMargin: '-74px 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── 7. Back to Top Button ── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 8. Smooth Scroll to In-Page Anchors ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navH = 74;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navH;
      
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });

      // Update URL hash smoothly without jump
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    });
  });
}

/* ── 9. Copy to Clipboard with Toast Notification ── */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('copyToast');
  const toastMsg = document.getElementById('toastMessage');
  let toastTimer = null;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-https / older browsers
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        if (toast) {
          if (toastMsg) {
            toastMsg.textContent = `已成功複製：${text}`;
          }
          toast.classList.add('show');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => {
            toast.classList.remove('show');
          }, 2600);
        }
      } catch (err) {
        console.error('複製失敗:', err);
      }
    });
  });
}

/* ── 10. Dynamic Current Year ── */
function initYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ── 11. Typed Tagline Animation ── */
(function initTyped() {
  const el = document.getElementById('heroTagline');
  if (!el) return;

  const phrases = [
    '一位持續探索醫學、科學與科技的醫學生。',
    'A medical student at China Medical University.',
    'Exploring Medicine, Neuroscience & AI in Healthcare.',
    '「積極樂觀、感恩惜福」'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = { type: 60, delete: 30, pause: 2400 };

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      el.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(tick, speed.pause);
        return;
      }
    } else {
      el.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, isDeleting ? speed.delete : speed.type);
  }

  // Slight initial delay for smooth page entrance
  setTimeout(tick, 900);
})();
