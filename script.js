// Medjed — scripts légers, sans dépendance
(function () {
  'use strict';

  // Filtre des projets par catégorie
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('#grid .card');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      cards.forEach(function (card) {
        card.hidden = !(f === 'all' || card.dataset.cat === f);
      });
    });
  });

  // Copie de l'adresse e-mail (pas de back-end nécessaire)
  var btn = document.getElementById('copy');
  var status = document.getElementById('copy-status');
  if (btn) {
    btn.addEventListener('click', function () {
      var email = btn.dataset.email;
      var done = function (msg) {
        status.textContent = msg;
        setTimeout(function () { status.textContent = ''; }, 2500);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(
          function () { done('Adresse copiée ✓'); },
          function () { done(email); }
        );
      } else {
        done(email); // repli : affiche l'adresse
      }
    });
  }

  // Année du footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
