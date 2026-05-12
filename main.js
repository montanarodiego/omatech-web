/* ── OMA tech. — main.js ── */

// ── NAV + FLOATING CTA ──
const nav  = document.getElementById('nav');
const fcta = document.getElementById('fcta');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  fcta.classList.toggle('vis',     window.scrollY > 400);
}, { passive: true });


// ── HAMBURGER MENU ──
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeNav() {
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}


// ── REVEAL ON SCROLL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── PRODUCT SWITCHER ──
const PRODUCTS = {
  tc56: {
    name:   'TC56',
    stroke: 'rgba(245, 166, 35, 0.8)',
    chips: [
      '<strong>4G LTE</strong> · Red',
      '<strong>Hexa-core</strong> · CPU',
      '<strong>IP67</strong> · Sellado',
      'Pantalla · <strong>5" HD</strong>',
      'RAM · <strong>2 GB</strong>',
      'Escáner · <strong>1D/2D</strong>',
    ],
  },
  tc21: {
    name:   'TC21',
    stroke: 'rgba(100, 160, 255, 0.8)',
    chips: [
      '<strong>WiFi</strong> · Red',
      '<strong>Octa-core</strong> · CPU',
      '<strong>NFC/GPS</strong> · Extra',
      'Pantalla · <strong>5" HD</strong>',
      'RAM · <strong>3 GB</strong>',
      'Escáner · <strong>1D/2D</strong>',
    ],
  },
  tc20: {
    name:   'TC20',
    stroke: 'rgba(80, 200, 140, 0.8)',
    chips: [
      '<strong>WiFi</strong> · Red',
      '<strong>Qualcomm</strong> · CPU',
      '<strong>IP54</strong> · Sellado',
      'Pantalla · <strong>4.3"</strong>',
      'RAM · <strong>2 GB</strong>',
      'Escáner · <strong>1D/2D</strong>',
    ],
  },
};

const CHIP_IDS = ['cl1', 'cl2', 'cl3', 'cr1', 'cr2', 'cr3'];

let currentProduct = 'tc56';
let activePanel    = null;

function switchProduct(id, panelEl) {
  if (id === currentProduct) return;
  currentProduct = id;

  if (activePanel) activePanel.classList.remove('active');
  activePanel = panelEl || null;
  if (activePanel) activePanel.classList.add('active');

  const product = PRODUCTS[id];
  const chips   = CHIP_IDS.map(cid => document.getElementById(cid));
  const dframe  = document.getElementById('dframe');
  const dname   = document.getElementById('dname');
  const dsvg    = document.getElementById('dsvg');

  chips.forEach(chip => {
    chip.style.opacity   = '0';
    chip.style.transform = 'translateY(6px)';
  });

  dframe.style.transform = 'scale(0.94)';
  dframe.style.opacity   = '0.4';

  setTimeout(() => {
    dname.textContent = product.name;
    dsvg.style.stroke = product.stroke;
    chips.forEach((chip, i) => { chip.innerHTML = product.chips[i]; });

    dframe.style.transform = 'scale(1)';
    dframe.style.opacity   = '1';

    chips.forEach((chip, i) => {
      setTimeout(() => {
        chip.style.opacity   = '1';
        chip.style.transform = 'translateY(0)';
      }, i * 70);
    });
  }, 220);
}

// Observe text panels to trigger switcher
const panelObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
      switchProduct(entry.target.dataset.product, entry.target);
    }
  });
}, { threshold: 0.45 });

document.querySelectorAll('.text-panel').forEach(panel => panelObserver.observe(panel));

// Init first panel active + show initial chips
setTimeout(() => {
  const firstPanel = document.querySelector('.text-panel[data-product="tc56"]');
  if (firstPanel) {
    activePanel = firstPanel;
    firstPanel.classList.add('active');
  }

  CHIP_IDS.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 700 + i * 90);
  });
}, 0);


// ── MAGNETIC BUTTONS ──
(function initMagneticButtons() {
  const magnetics = Array.from(document.querySelectorAll('.btn-gold, .nav-cta, .panel-cta'));
  const mouse = { x: 0, y: 0 };
  let rafId = null;

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      magnetics.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const cx   = rect.left + rect.width / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = mouse.x - cx;
        const dy   = mouse.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          btn.style.transition = 'filter 0.15s';
          btn.style.transform  = `translate(${dx * 0.3}px, ${dy * 0.3}px)`;
        } else {
          btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.15s';
          btn.style.transform  = 'translate(0px, 0px)';
        }
      });
    });
  });
})();


// ── NUMBER COUNTER ──
(function initCounters() {
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function formatNum(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function animateCounter(el) {
    const raw    = el.textContent.replace(/\./g, '');
    const target = parseInt(raw, 10);
    if (isNaN(target)) return;

    const startTime = performance.now();
    const duration  = 1200;

    (function tick(now) {
      const t = Math.min((now - startTime) / duration, 1);
      el.textContent = formatNum(target * easeOutExpo(t));
      if (t < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.price-num').forEach(el => counterObs.observe(el));
})();


// ── MOBILE CAROUSEL ──
(function initCarousel() {
  if (window.innerWidth > 767) return;

  const stickyText = document.querySelector('.sticky-text');
  const panels     = Array.from(document.querySelectorAll('.text-panel'));
  if (!stickyText || !panels.length) return;

  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'carousel-dots';

  panels.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      stickyText.scrollTo({ left: i * window.innerWidth * 0.85, behavior: 'smooth' });
    });
    dotsWrap.appendChild(dot);
  });

  stickyText.insertAdjacentElement('afterend', dotsWrap);

  const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

  stickyText.addEventListener('scroll', () => {
    const idx = Math.round(stickyText.scrollLeft / (window.innerWidth * 0.85));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  }, { passive: true });
})();
