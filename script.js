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
// Här är interaktiva knappen för att visa/dölja ounchbuffé-info

//--------------------------------------------------------------------------------
// här är en simpel beräkning för totalkostnad av valda rätter.
