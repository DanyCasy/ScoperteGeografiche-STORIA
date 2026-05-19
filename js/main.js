document.addEventListener('DOMContentLoaded', () => {
  // ========== HAMBURGER MENU (APRE MENU LATERALE DA SINISTRA) ==========
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    // Chiudi il menu quando clicchi su un link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ========== DARK MODE CON SLIDER ==========
  const themeSlider = document.getElementById('theme-slider');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') root.setAttribute('data-theme', 'dark');
  if (themeSlider) {
    themeSlider.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ========== PULSANTE BACK TO TOP ==========
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========== REVEAL ON SCROLL ==========
  const reveals = document.querySelectorAll('.reveal');
  const checkReveal = () => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', checkReveal);
  checkReveal();

  // ========== FUNZIONI GLOBALI PER LE PAGINE ==========
  window.toggleDeepDive = function(btn) {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
    btn.textContent = content.classList.contains('open') ? '🔼 Chiudi' : '🔍 Approfondisci';
  };

  window.openTab = function(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
  };

  window.checkAnswer = function(btn, isCorrect) {
    const parent = btn.parentElement;
    const feedback = parent.nextElementSibling;
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(b => { b.disabled = true; });
    if (isCorrect) {
      btn.style.background = '#28a745';
      btn.style.color = '#fff';
      feedback.className = 'quiz-feedback correct';
      feedback.innerHTML = '<strong>✅ Corretto!</strong>';
    } else {
      btn.style.background = '#dc3545';
      btn.style.color = '#fff';
      feedback.className = 'quiz-feedback wrong';
      feedback.innerHTML = '<strong>❌ Sbagliato.</strong>';
      buttons.forEach(b => {
        if (b.getAttribute('onclick') && b.getAttribute('onclick').includes('true')) {
          b.style.background = '#28a745';
          b.style.color = '#fff';
        }
      });
    }
  };
});