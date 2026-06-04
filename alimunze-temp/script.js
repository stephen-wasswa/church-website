/**
 * Kasenge Miracle Centre Church — Alimunze
 * Main Application Script
 * 
 * Handles UI interactions, navigation, slider, and API requests.
 */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  const overlay    = document.getElementById('overlay');
  const closeBtn   = document.getElementById('close-nav');

  const openNav  = () => {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  };
  const closeNav = () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  if (hamburger) hamburger.addEventListener('click', openNav);
  if (closeBtn)  closeBtn.addEventListener('click', closeNav);
  if (overlay)   overlay.addEventListener('click', closeNav);

  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  const words  = document.querySelectorAll('.hero-rotate-word');

  if (slides.length && words.length) {
    const SLIDE_DURATION = 5500;
    let current = 0;
    let timer;

    (function sizeWrap() {
      const wrap = document.getElementById('word-wrap');
      if (!wrap) return;
      let maxW = 0;
      words.forEach(w => {
        w.style.position = 'static';
        w.style.opacity  = '1';
        const ww = w.offsetWidth;
        if (ww > maxW) maxW = ww;
        w.style.position = '';
        w.style.opacity  = '';
      });
      const available = wrap.closest('.hero-headline')
        ? wrap.closest('.hero-content').offsetWidth
        : window.innerWidth - 48;
      wrap.style.width = Math.min(maxW, available) + 'px';
    })();

    function goTo(n) {
      words[current].classList.remove('active');
      words[current].classList.add('exit');
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = (n + slides.length) % slides.length;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');

      const wi = current % words.length;
      setTimeout(() => { words.forEach(w => w.classList.remove('exit')); }, 650);
      words[wi].classList.add('active');
    }

    function startSlide() {
      timer = setInterval(() => goTo(current + 1), SLIDE_DURATION);
    }

    dots.forEach(d => d.addEventListener('click', () => {
      clearInterval(timer);
      goTo(+d.dataset.index);
      startSlide();
    }));

    startSlide();
  }

  const ro = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  const modalBackdrop = document.getElementById('prayer-modal');
  const modalClose    = document.getElementById('modal-close');

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const el = document.getElementById('prayer-name');
      if (el) el.focus();
    }, 350);
  }
  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  ['open-prayer', 'open-prayer-2', 'footer-prayer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', openModal);
  });
  if (modalClose)    modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeNav(); closeModal(); }
  });

  const submitPrayer = document.getElementById('submit-prayer');
  if (submitPrayer) {
    submitPrayer.addEventListener('click', async () => {
      const nameEl = document.getElementById('prayer-name');
      const reqEl  = document.getElementById('prayer-request');
      const name   = nameEl ? nameEl.value.trim() : '';
      const req    = reqEl  ? reqEl.value.trim()  : '';

      if (!name || !req) {
        alert('Please fill in your name and prayer request.');
        return;
      }

      submitPrayer.textContent = 'Sending…';
      submitPrayer.disabled = true;

      try {
        const formData = new FormData();
        formData.append('full_name', name);
        formData.append('request',   req);

        const response = await fetch('save_prayer.php', { method: 'POST', body: formData });
        const result   = await response.json();

        if (result.status === 'success') {
          submitPrayer.textContent = "Prayer Received — We're Believing With You ✓";
          submitPrayer.style.background = 'var(--maroon-deep)';
          setTimeout(() => {
            if (nameEl) nameEl.value = '';
            if (reqEl)  reqEl.value  = '';
            submitPrayer.textContent    = 'Send Prayer Request';
            submitPrayer.style.background = '';
            submitPrayer.disabled = false;
            closeModal();
          }, 2500);
        } else {
          alert('Error: ' + result.message);
          submitPrayer.textContent = 'Send Prayer Request';
          submitPrayer.disabled = false;
        }
      } catch {
        alert('Could not connect to the server. Please try again.');
        submitPrayer.textContent = 'Send Prayer Request';
        submitPrayer.disabled = false;
      }
    });
  }

  const contactSubmit = document.getElementById('contact-form-submit');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', async () => {
      const fname   = (document.getElementById('cf-fname')   || {value:''}).value.trim();
      const lname   = (document.getElementById('cf-lname')   || {value:''}).value.trim();
      const email   = (document.getElementById('cf-email')   || {value:''}).value.trim();
      const phone   = (document.getElementById('cf-phone')   || {value:''}).value.trim();
      const date    = (document.getElementById('cf-date')    || {value:''}).value.trim();
      const message = (document.getElementById('cf-message') || {value:''}).value.trim();

      if (!fname || !email) {
        alert('Please fill in at least your first name and email.');
        return;
      }

      contactSubmit.textContent = 'Sending…';
      contactSubmit.disabled = true;

      try {
        const formData = new FormData();
        formData.append('first_name', fname);
        formData.append('last_name',  lname);
        formData.append('email',      email);
        formData.append('phone',      phone);
        formData.append('visit_date', date);
        formData.append('message',    message);

        const response = await fetch('save_contact.php', { method: 'POST', body: formData });
        const result   = await response.json();

        if (result.status === 'success') {
          contactSubmit.textContent = 'Message Sent ✓';
          contactSubmit.style.background = 'var(--maroon-deep)';
          ['cf-fname','cf-lname','cf-email','cf-phone','cf-date','cf-message'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
          });
          setTimeout(() => {
            contactSubmit.textContent = 'Send Message';
            contactSubmit.style.background = '';
            contactSubmit.disabled = false;
          }, 3000);
        } else {
          alert('Error: ' + result.message);
          contactSubmit.textContent = 'Send Message';
          contactSubmit.disabled = false;
        }
      } catch {
        alert('Could not connect to the server. Please try again.');
        contactSubmit.textContent = 'Send Message';
        contactSubmit.disabled = false;
      }
    });
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const num = btn.dataset.copy;
      if (!num) return;
      navigator.clipboard.writeText(num).then(() => {
        const original = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = original;
        }, 2000);
      }).catch(() => { alert('Number: ' + num); });
    });
  });

  const yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();

})();
