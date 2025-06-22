console.log("Katalógus betöltve!");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(response => {
          if (response.ok) {
            form.classList.add("d-none");
            if (thankYou) {
              thankYou.classList.remove("d-none");
            }
          } else {
            alert("Hiba történt az elküldéskor. Kérlek próbáld meg később.");
          }
        })
        .catch(error => {
          alert("Hálózati hiba. Ellenőrizd a kapcsolatot!");
          console.error("Hiba:", error);
        });
    });
  }
});
  document.addEventListener("DOMContentLoaded", () => {
  // Űrlap beküldés – Ajánlatkérés
  const form = document.getElementById("orderForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(response => {
          if (response.ok) {
            form.classList.add("d-none");
            if (thankYou) {
              thankYou.classList.remove("d-none");
            }
          } else {
            alert("Hiba történt az elküldéskor. Kérlek próbáld meg később.");
          }
        })
        .catch(error => {
          alert("Hálózati hiba. Ellenőrizd a kapcsolatot!");
          console.error("Hiba:", error);
        });
    });
  }

  // Növénykatalógus szűrés gombok alapján
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".filter-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.category;

      cards.forEach(card => {
        const tags = card.dataset.category || "";
        const show = selected === "all" || tags.includes(selected);
        card.style.display = show ? "" : "none";
      });
    });
  });
});

// Kiemelés az aktuális szűrőgombnak
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    // ... (szűrési kód)
  });
});