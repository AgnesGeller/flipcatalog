console.log("Katalógus betöltve!");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("d-none");
      if (thankYou) {
        thankYou.classList.remove("d-none");
      }

      const data = {
        nev: form.nev.value,
        email: form.email.value,
        csomag: form.csomag.value,
        megjegyzes: form.megjegyzes.value
      };
      localStorage.setItem("megrendeles", JSON.stringify(data));
    });
  }
});