document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".carousel-slider");
  const articles = slider.querySelectorAll("article");

  const leftButton = document.querySelector(".vorige");
  const rightButton = document.querySelector(".volgende");

  let currentIndex = 0;

  //  hulp chatgpt bij functie https://chatgpt.com/c/671438e0-6404-8002-a44b-03ca184ace0e

  // carousel slider buttons
  function updateButtonStates() {
    if (currentIndex === 0) {
      leftButton.disabled = true;
    } else {
      leftButton.disabled = false;
    }

    if (currentIndex == articles.length - 1) {
      rightButton.disabled = true;
    } else {
      rightButton.disabled = false;
    }
  }

  updateButtonStates();

  // hulp slider: chatgpt (image gebruikt dus kan niet gedeeld worden)
  // berekent slider positie door breedte container te berekenen.
  rightButton.addEventListener("click", () => {
    if (currentIndex < articles.length - 1) {
      currentIndex++;
      slider.scrollTo({
        left: slider.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
    updateButtonStates();
  });

  leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      slider.scrollTo({
        left: slider.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
    updateButtonStates();
  });
});
