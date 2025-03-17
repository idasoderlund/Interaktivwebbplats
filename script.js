// här är interaktiva  knappen för att kategorisera menyn
document.addEventListener("DOMContentLoaded", function () {
  const chooseCategory = document.getElementById("chooseCategory");
  const categories = document.querySelectorAll(".category");

  chooseCategory.addEventListener("change", function () {
    const selectedCategory = chooseCategory.value;

    categories.forEach((category) => {
      if (selectedCategory === "all") {
        category.style.display = "block";
      } else if (category.classList.contains(selectedCategory)) {
        category.style.display = "block";
      } else {
        category.style.display = "none";
      }
    });
  });
});
//--------------------------------------------------------------------
//Här är knapp för att dölja/visa specialk & allergier
function inittogglePriceAndAllergies() {
  const toggleButton1 = document.getElementById("togglePriceAndAllergies");
  const pricesAndAllergiesInfo = document.getElementById(
    "pricesAndAllergiesInfo"
  );
  if (toggleButton1 && priceAndAllergiesInfo) {
    console.log(
      "Toggle button for prices and allergies not found, initializing."
    );

    toggleButton1.addEventListener("click", function () {
      pricesAndAllergiesInfo.style.display =
        pricesAndAllergiesInfo.style.display === "none" ||
        pricesAndAllergiesInfo.style.display === ""
          ? "block"
          : "none";
    });
  } else {
    console.warn("Toggle button is not found, skipping toggle initialization.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  inittogglePriceAndAllergies();
});
//--------------------------------------------------------------------
// Här är interaktiva knappen för att visa/dölja lunchbuffé-info
function initTogglelunchBuffet() {
  const toggleButton = document.getElementById("togglelunchBuffet");
  if (toggleButton) {
    console.log("Toggle button found, initializing toggle for lunch buffet.");

    toggleButton.addEventListener("click", function () {
      let lunchBuffetInformation = document.getElementById("lunchBuffetInfo");
      if (lunchBuffetInformation) {
        lunchBuffetInformation.style.display =
          lunchBuffetInformation.style.display === "none" ||
          lunchBuffetInformation.style.display === ""
            ? "block"
            : "none";
      } else {
        console.warn("Lunch Buffet information not found");
      }
    });
  } else {
    console.warn("Toggle button is not found, skipping toggle initialization.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  initTogglelunchBuffet();
});
//--------------------------------------------------------------------------------
// här är en simpel beräkning för totalkostnad av valda rätter.
document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {
    const dishes = document.querySelectorAll('input[name="dish"]:checked');
    let totalCost = 0;

    dishes.forEach((dish) => {
      totalCost += parseFloat(dish.value);
    });
    document.getElementById(
      "totalCostLabel"
    ).innerText = `Totalkostnad: $${totalCost.toFixed(2)}`;
  });
