/* =========================================================
   MUNEEB UR REHMAN — PORTFOLIO
   Shared site interactions
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initSiteIntro();
  initMenu();
  initBackToTop();
  initYear();
  initRevealAnimations();
  initHeroMotion();
  initFooterTop();
});

/* =========================================================
   CINEMATIC INTRO
========================================================= */

function initSiteIntro() {
  const intro = document.getElementById('siteIntro');

  if (!intro) {
    document.body.classList.add('site-loaded');
    return;
  }

  document.body.classList.add('site-loading');

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (reducedMotion) {
    intro.remove();
    document.body.classList.remove('site-loading');
    document.body.classList.add('site-loaded');
    return;
  }

  /*
    The intro runs once per page load.
    Total cinematic sequence:
    logo appears → pauses → rises away → curtain opens.
  */

  window.setTimeout(() => {
    intro.classList.add('is-finished');
  }, 1450);

  window.setTimeout(() => {
    intro.remove();

    document.body.classList.remove('site-loading');
    document.body.classList.add('site-loaded');
  }, 2250);
}


/* =========================================================
   FULL-SCREEN MENU
========================================================= */

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.menu-close');
  const menu = document.getElementById('siteMenu');

  if (!toggle || !menu) return;

  const menuLinks = menu.querySelectorAll('a');

  const openMenu = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');

    toggle.setAttribute(
      'aria-expanded',
      'true'
    );

    document.body.classList.add('menu-open');

    menuLinks.forEach((link, index) => {
      link.style.setProperty(
        '--menu-index',
        index
      );
    });
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');

    toggle.setAttribute(
      'aria-expanded',
      'false'
    );

    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener(
      'click',
      closeMenu
    );
  }

  menuLinks.forEach((link) => {
    link.addEventListener(
      'click',
      closeMenu
    );
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      menu.classList.contains('is-open')
    ) {
      closeMenu();
    }
  });
}


/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {
  const btn = document.getElementById(
    'backToTop'
  );

  if (!btn) return;

  const updateVisibility = () => {
    btn.classList.toggle(
      'is-visible',
      window.scrollY > 500
    );
  };

  window.addEventListener(
    'scroll',
    updateVisibility,
    { passive: true }
  );

  updateVisibility();

  btn.addEventListener('click', () => {
    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion
        ? 'auto'
        : 'smooth'
    });
  });
}


/* =========================================================
   FOOTER YEAR
========================================================= */

function initYear() {
  const yearElements =
    document.querySelectorAll('#year');

  yearElements.forEach((element) => {
    element.textContent =
      new Date().getFullYear();
  });
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initRevealAnimations() {
  const revealElements =
    document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  if (reducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add(
        'is-visible'
      );
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            'is-visible'
          );

          observerInstance.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin:
          '0px 0px -60px 0px'
      }
    );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}


/* =========================================================
   HOMEPAGE HERO MOTION
========================================================= */

function initHeroMotion() {
  const hero =
    document.querySelector('.hero-visual');

  if (!hero) return;

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  if (reducedMotion) return;

  const mainImage =
    hero.querySelector(
      '.hero-image-main'
    );

  const smallImage =
    hero.querySelector(
      '.hero-image-small'
    );

  const card =
    hero.querySelector(
      '.hero-floating-card'
    );

  if (!mainImage) return;

  hero.addEventListener(
    'mousemove',
    (event) => {
      const rect =
        hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      mainImage.style.transform =
        `translate(${x * -10}px, ${y * -10}px)`;

      if (smallImage) {
        smallImage.style.transform =
          `translate(${x * 12}px, ${y * 12}px)`;
      }

      if (card) {
        card.style.transform =
          `translate(${x * -18}px, ${y * -18}px) rotate(5deg)`;
      }
    }
  );

  hero.addEventListener(
    'mouseleave',
    () => {
      mainImage.style.transform = '';

      if (smallImage) {
        smallImage.style.transform = '';
      }

      if (card) {
        card.style.transform =
          'rotate(5deg)';
      }
    }
  );
}

function initFooterTop() {
  const button = document.getElementById('footerTop');

  if (!button) return;

  button.addEventListener('click', () => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  });
}