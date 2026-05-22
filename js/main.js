document.addEventListener('DOMContentLoaded', () => { // aspetta che tutto l'HTML sia caricato

  // ========== HAMBURGER MENU (APRE MENU LATERALE DA SINISTRA) ==========
  const hamburger = document.getElementById('hamburger'); // prende il pulsante hamburger
  const navMenu = document.getElementById('nav-menu'); // prende il menu di navigazione

  if (hamburger && navMenu) { // controlla che entrambi gli elementi esistano

    hamburger.addEventListener('click', () => { // quando clicchi l'hamburger
      hamburger.classList.toggle('active'); // aggiunge/rimuove la classe active al bottone
      navMenu.classList.toggle('active'); // aggiunge/rimuove la classe active al menu
    });

    // Chiudi il menu quando clicchi su un link
    document.querySelectorAll('.nav-link').forEach(link => { // seleziona tutti i link del menu

      link.addEventListener('click', () => { // quando clicchi un link
        hamburger.classList.remove('active'); // chiude l'animazione dell'hamburger
        navMenu.classList.remove('active'); // chiude il menu laterale
      });

    });
  }

  // ========== DARK MODE CON SLIDER ==========
  const themeSlider = document.getElementById('theme-slider'); // prende il bottone del tema
  const root = document.documentElement; // prende il tag html
  const savedTheme = localStorage.getItem('theme'); // recupera il tema salvato

  if (savedTheme === 'dark') root.setAttribute('data-theme', 'dark'); // applica il dark mode salvato

  if (themeSlider) { // controlla che il bottone esista

    themeSlider.addEventListener('click', () => { // quando clicchi il bottone tema

      const isDark = root.getAttribute('data-theme') === 'dark'; // controlla se il tema attuale è dark
      const newTheme = isDark ? 'light' : 'dark'; // decide il nuovo tema

      root.setAttribute('data-theme', newTheme); // cambia il tema della pagina
      localStorage.setItem('theme', newTheme); // salva il tema nel browser

    });
  }

  // ========== PULSANTE BACK TO TOP ==========
  const backBtn = document.getElementById('back-to-top'); // prende il bottone torna su

  if (backBtn) { // controlla che il bottone esista

    window.addEventListener('scroll', () => { // quando scorri la pagina
      backBtn.classList.toggle('visible', window.scrollY > 300); // mostra il bottone dopo 300px
    });

    backBtn.addEventListener('click', () => { // quando clicchi il bottone
      window.scrollTo({ top: 0, behavior: 'smooth' }); // torna in cima con animazione fluida
    });

  }

  // ========== REVEAL ON SCROLL ==========
  const reveals = document.querySelectorAll('.reveal'); // prende tutti gli elementi reveal

  const checkReveal = () => { // funzione che controlla gli elementi visibili

    reveals.forEach(el => { // scorre ogni elemento

      if (el.getBoundingClientRect().top < window.innerHeight - 100) { // controlla se l'elemento è visibile
        el.classList.add('active'); // aggiunge la classe active
      }

    });
  };

  window.addEventListener('scroll', checkReveal); // esegue il controllo durante lo scroll
  checkReveal(); // esegue il controllo appena caricata la pagina

  // ========== FUNZIONI GLOBALI PER LE PAGINE ==========

  window.toggleDeepDive = function(btn) { // funzione per aprire/chiudere approfondimenti

    const content = btn.nextElementSibling; // prende il contenuto successivo al bottone

    content.classList.toggle('open'); // apre o chiude il contenuto

    btn.textContent = content.classList.contains('open')
      ? '🔼 Chiudi'
      : '🔍 Approfondisci'; // cambia il testo del bottone

  };

  window.openTab = function(evt, tabName) { // funzione per cambiare tab

    document.querySelectorAll('.tab-content').forEach(t =>
      t.classList.remove('active')
    ); // nasconde tutti i contenuti

    document.querySelectorAll('.tab-btn').forEach(b =>
      b.classList.remove('active')
    ); // rimuove active da tutti i bottoni

    document.getElementById(tabName).classList.add('active'); // mostra la tab selezionata
    evt.currentTarget.classList.add('active'); // attiva il bottone cliccato

  };

  window.checkAnswer = function(btn, isCorrect) { // funzione per controllare le risposte del quiz

    const parent = btn.parentElement; // prende il contenitore dei bottoni
    const feedback = parent.nextElementSibling; // prende il box del feedback
    const buttons = parent.querySelectorAll('button'); // prende tutti i bottoni

    buttons.forEach(b => {
      b.disabled = true; // disattiva tutti i bottoni dopo la risposta
    });

    if (isCorrect) { // se la risposta è corretta

      btn.style.background = '#28a745'; // colora il bottone di verde
      btn.style.color = '#fff'; // testo bianco

      feedback.className = 'quiz-feedback correct'; // assegna classe corretta
      feedback.innerHTML = '<strong>✅ Corretto!</strong>'; // mostra messaggio corretto

    } else { // se la risposta è sbagliata

      btn.style.background = '#dc3545'; // colora il bottone di rosso
      btn.style.color = '#fff'; // testo bianco

      feedback.className = 'quiz-feedback wrong'; // assegna classe errore
      feedback.innerHTML = '<strong>❌ Sbagliato.</strong>'; // mostra messaggio errore

      buttons.forEach(b => { // controlla tutti i bottoni

        if (
          b.getAttribute('onclick') &&
          b.getAttribute('onclick').includes('true')
        ) { // trova la risposta corretta

          b.style.background = '#28a745'; // evidenzia la risposta corretta
          b.style.color = '#fff'; // testo bianco

        }

      });
    }
  };

});
