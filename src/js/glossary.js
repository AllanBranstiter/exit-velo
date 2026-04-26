/* glossary.js — Exit Velo interactive term definitions */

const GLOSSARY_URL = '/data/glossary.json';

let glossaryData = {};
let activePopover = null;
let activeTerm = null;

async function loadGlossary() {
  try {
    const res = await fetch(GLOSSARY_URL);
    if (!res.ok) throw new Error('Failed to load glossary');
    glossaryData = await res.json();
    initTerms();
  } catch (e) {
    // Glossary unavailable — terms still display, just without popovers
    console.warn('Exit Velo: glossary could not be loaded.', e);
  }
}

function initTerms() {
  document.querySelectorAll('.term').forEach(el => {
    const key = el.dataset.term;
    if (!glossaryData[key]) return;

    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-haspopup', 'true');

    el.addEventListener('click', e => {
      e.stopPropagation();
      if (activeTerm === el && activePopover) {
        closePopover();
      } else {
        openPopover(key, el);
      }
    });

    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
}

function openPopover(key, anchor) {
  closePopover();

  const data = glossaryData[key];
  if (!data) return;

  const el = document.createElement('div');
  el.className = 'glossary-popover';
  el.setAttribute('role', 'tooltip');

  const closeBtn = document.createElement('button');
  closeBtn.className = 'glossary-popover__close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '\u00d7';

  const termEl = document.createElement('div');
  termEl.className = 'glossary-popover__term';
  termEl.textContent = data.term;

  const defEl = document.createElement('div');
  defEl.className = 'glossary-popover__definition';
  defEl.textContent = data.definition;

  el.appendChild(closeBtn);
  el.appendChild(termEl);
  el.appendChild(defEl);

  document.body.appendChild(el);
  activePopover = el;
  activeTerm = anchor;
  anchor.setAttribute('aria-expanded', 'true');

  positionPopover(el, anchor);

  el.querySelector('.glossary-popover__close').addEventListener('click', e => {
    e.stopPropagation();
    closePopover();
  });

  // Delay so the current click doesn't immediately close it
  setTimeout(() => {
    document.addEventListener('click', onOutsideClick);
    document.addEventListener('touchstart', onOutsideClick);
  }, 0);
}

function positionPopover(popover, anchor) {
  const rect     = anchor.getBoundingClientRect();
  const scrollY  = window.scrollY || document.documentElement.scrollTop;
  const scrollX  = window.scrollX || document.documentElement.scrollLeft;
  const vpWidth  = window.innerWidth;
  const popWidth = Math.min(320, vpWidth - 32);

  popover.style.maxWidth = popWidth + 'px';

  // Preferred: just below the anchor
  let top  = rect.bottom + scrollY + 8;
  let left = rect.left + scrollX;

  // Don't bleed off the right edge
  if (left + popWidth > vpWidth - 16) {
    left = vpWidth - popWidth - 16;
  }
  if (left < 16) left = 16;

  popover.style.top  = top + 'px';
  popover.style.left = left + 'px';
}

function closePopover() {
  if (activePopover) {
    activePopover.remove();
    activePopover = null;
  }
  if (activeTerm) {
    activeTerm.setAttribute('aria-expanded', 'false');
    activeTerm = null;
  }
  document.removeEventListener('click', onOutsideClick);
  document.removeEventListener('touchstart', onOutsideClick);
}

function onOutsideClick(e) {
  if (
    activePopover &&
    !activePopover.contains(e.target) &&
    !e.target.classList.contains('term')
  ) {
    closePopover();
  }
}

// Escape key closes popover
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopover();
});

// Reposition on scroll/resize
window.addEventListener('scroll', () => {
  if (activePopover && activeTerm) {
    positionPopover(activePopover, activeTerm);
  }
}, { passive: true });

window.addEventListener('resize', () => {
  if (activePopover && activeTerm) {
    positionPopover(activePopover, activeTerm);
  }
}, { passive: true });

loadGlossary();

// Allow dynamic pages to re-initialize terms after injecting new HTML
window.exitVeloInitTerms = initTerms;
