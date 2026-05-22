# STORIA - Sito Web SCOPERTE GEOGRAFICHE

Sito web realizzato da: Casillo, Mereu, Grossato e Consiglio

Link repository: https://danycasy.github.io/ScoperteGeografiche-STORIA/


## Divisione del lavoro

Mereu: FAQ, Bartolomeo Diaz, index, Vasco da Gama, CSS

Casillo: aggiustamenti grafici, Enrico il Navigatore, Pedro Álvares Cabral, CSS

Gregory: Marco Polo, CSS

Consiglio: Mongoli, CSS


## Fonti e supporti utilizzati

- Wikipedia
- Focus Junior
- Treccani
- Libro di storia
- Geopop
- AI (per rendere il codice più pulito e leggibile e per inserire alcuni commenti)


## Descrizione del progetto

Progetto commissionato dal professor di storia Andrea Demarchi e dal professor Di Maria Christian, realizzato con HTML, CSS e JavaScript.

Il sito tratta le scoperte geografiche, con focus sulla rotta delle Indie, il Capo delle Tempeste e il Capo di Buona Speranza. Vengono approfonditi i principali esploratori e navigatori portoghesi, con una sezione dedicata anche ai Mongoli.

Ogni argomento ha una pagina dedicata. Sono presenti anche una sezione FAQ e una pagina "Chi siamo" che descrive il contributo di ogni membro del gruppo.

I testi sono scritti in modo schematico per agevolare lo studio e l'esposizione. Durante la presentazione, l'utente è invitato a fare domande e a suggerire eventuali modifiche.


## Struttura del sito

progetto-scoperte/
│
├── index.html
├── faq.html
├── chi-siamo.html
│
├── pages/
│   ├── bartolomeu-dias.html
│   ├── vasco-da-gama.html
│   ├── enrico-il-navigatore.html
│   ├── pedro-alvares-cabral.html
│   ├── marco-polo.html
│   └── mongoli.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│
└── README.md


## Funzionalità del sito

Tutte le pagine condividono lo stesso header con:

- Slider per la modalità chiara/scura (con emoji sole e luna)
- Menu hamburger che si apre lateralmente da sinistra
- Titolo centrato

Ogni pagina dedicata a un esploratore contiene:

- Hero con ritratto, titolo e date
- Quattro card statistiche cliccabili con alert informativo
- Card dei viaggi con pulsanti "Approfondisci" espandibili
- Mappa della rotta
- Tabs interattivi (Curiosità, Personaggi, Eredità)
- Sezione di ripasso con domande e risposte
- Quiz a risposta multipla con feedback visivo

Sono presenti anche:

- Pagina FAQ con domande frequenti organizzate per categoria
- Pagina Chi siamo con la presentazione del team
- Home page con timeline verticale e statistiche in evidenza

Funzionalità tecniche:

- Dark mode con salvataggio della preferenza
- Effetto "reveal" allo scroll
- Pulsante "Torna su"
- Design responsive