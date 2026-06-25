(function () {
  if (document.querySelector(".reviews") || document.querySelector(".fs-review-strip")) return;

  const hero = document.querySelector(".hero");
  if (!hero) return;

  const reviews = [
    ["review-1.png", "Igor Chladek", "Very fun and friendly service. Good quality photos and easy communication."],
    ["review-2.png", "Nataliia Z", "Professional and kind. The shoot felt relaxed and the result was beautiful."],
    ["review-4.png", "Jobin Gholami", "Geweldige service. Ze waren erg aardig voor mijn kinderen en de sfeer was relaxed."],
    ["review-5.png", "Amira Elsen", "Fantastische fotograaf. We voelden ons meteen op ons gemak en de foto's zijn prachtig."],
    ["review-7.png", "Alex Rowan", "Amazing experience. Super professional and made me feel at ease immediately."],
    ["review-12.png", "Cathelijne Vreugdenhil", "Hele leuke fotoshoot, goede fotograaf met leuke fotoideeen en mooie kwaliteit."]
  ];

  function card(review) {
    return '<article class="fs-review-card"><div class="fs-review-top"><img class="fs-review-avatar" src="' + review[0] + '" alt="Review profiel"><div><p class="fs-review-name">' + review[1] + '</p><p class="fs-review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p></div></div><blockquote>' + review[2] + '</blockquote></article>';
  }

  const cards = reviews.map(card).join("");
  const section = document.createElement("section");
  section.className = "fs-review-strip";
  section.setAttribute("aria-label", "Reviews Fotoshoot Utrecht");
  section.innerHTML = '<div class="fs-review-window"><div class="fs-review-track"><div class="fs-review-set">' + cards + '</div><div class="fs-review-set" aria-hidden="true">' + cards + '</div></div></div>';
  hero.insertAdjacentElement("afterend", section);

})();

