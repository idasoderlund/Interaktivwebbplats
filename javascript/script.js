function inittogglePriceAndAllergies() {
  let e = document.getElementById("togglePriceAndAllergies"),
    t = document.getElementById("pricesAndAllergiesInfo");
  e && t
    ? (console.log(
        "Toggle button for prices and allergies not found, initializing."
      ),
      e.addEventListener("click", function () {
        t.style.display =
          "none" === t.style.display || "" === t.style.display
            ? "block"
            : "none";
      }))
    : console.warn(
        "Toggle button is not found, skipping toggle initialization."
      );
}
function initTogglelunchBuffet() {
  let e = document.getElementById("togglelunchBuffet");
  e
    ? (console.log(
        "Toggle button found, initializing toggle for lunch buffet."
      ),
      e.addEventListener("click", function () {
        let e = document.getElementById("lunchBuffetInfo");
        e
          ? (e.style.display =
              "none" === e.style.display || "" === e.style.display
                ? "block"
                : "none")
          : console.warn("Lunch Buffet information not found");
      }))
    : console.warn(
        "Toggle button is not found, skipping toggle initialization."
      );
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.getElementById("chooseCategory"),
    t = document.querySelectorAll(".category");
  e.addEventListener("change", function () {
    let n = e.value;
    t.forEach((e) => {
      "all" === n
        ? (e.style.display = "block")
        : e.classList.contains(n)
        ? (e.style.display = "block")
        : (e.style.display = "none");
    });
  });
}),
  document.addEventListener("DOMContentLoaded", function () {
    inittogglePriceAndAllergies();
  }),
  document.addEventListener("DOMContentLoaded", function () {
    initTogglelunchBuffet();
  }),
  document
    .getElementById("calculateTotal")
    .addEventListener("click", function () {
      let e = document.querySelectorAll('input[name="dish"]:checked'),
        t = 0;
      e.forEach((e) => {
        t += parseFloat(e.value);
      }),
        (document.getElementById(
          "totalCostLabel"
        ).innerText = `Total Cost: $${t.toFixed(2)}`);
    });
