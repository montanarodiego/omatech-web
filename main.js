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

function switchProduct(id) {
  if (id === currentProduct) return;
  currentProduct = id;

  const product = PRODUCTS[id];
  const chips   = CHIP_IDS.map(cid => document.getElementById(cid));
  const dframe  = document.getElementById('dframe');
  const dname   = document.getElementById('dname');
  const dsvg    = document.getElementById('dsvg');

  // Fade out chips
  chips.forEach(chip => {
    chip.style.opacity   = '0';
    chip.style.transform = 'translateY(6px)';
  });

  // Scale down frame
  dframe.style.transform = 'scale(0.94)';
  dframe.style.opacity   = '0.4';

  setTimeout(() => {
    // Update content
    dname.textContent = product.name;
    dsvg.style.stroke = product.stroke;
    chips.forEach((chip, i) => { chip.innerHTML = product.chips[i]; });

    // Scale frame back
    dframe.style.transform = 'scale(1)';
    dframe.style.opacity   = '1';

    // Stagger chips back in
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
      switchProduct(entry.target.dataset.product);
    }
  });
}, { threshold: 0.45 });

document.querySelectorAll('.text-panel').forEach(panel => panelObserver.observe(panel));

// Show initial chips on load
setTimeout(() => {
  CHIP_IDS.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 700 + i * 90);
  });
}, 0);
