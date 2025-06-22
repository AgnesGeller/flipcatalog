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