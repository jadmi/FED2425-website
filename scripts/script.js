// hulp chatgpt met buttons etc
// https://chatgpt.com/share/66f8aef3-8310-8002-89ad-1c23c1328533

// array aanmaken met de 3 headers
const sections = [
  document.querySelector(".header-1"),
  document.querySelector(".header-2"),
  document.querySelector(".header-3"),
];

const buttons = document.querySelectorAll("footer button");
const ul = document.querySelector(".details");
const ul2 = document.querySelector(".details-2");
const ul3 = document.querySelector(".details-3");
const tweedeNav = document.querySelector("nav:nth-of-type(2)");
const arrow = document.querySelectorAll(".arrow-icon");

const slider = document.querySelector(".carousel-slider");
const leftButton = document.querySelector(".vorige");
const rightButton = document.querySelector(".volgende");
const articles = slider.querySelectorAll("article");

let currentIndex = 0;

// const detailsElements = document.querySelectorAll(".detailsp2");

arrow.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    if (this.classList.contains("draaiAnimatie")) {
      this.classList.remove("draaiAnimatie");
      this.classList.add("draaiTerugAnimatie");
    } else {
      this.classList.add("draaiAnimatie");
      this.classList.remove("draaiTerugAnimatie");
    }
  });
});

// voor uitklappen summaries

// detailsElements.forEach((details) => {
//   details.addEventListener("click", function () {
//     if (this.classList.contains("show")) {
//       this.classList.remove("show");
//     } else {
//       this.classList.add("show");
//     }
//   });
// });

const openButton = document
  .querySelector("nav button")
  .addEventListener("click", function () {
    tweedeNav.classList.add("openMenu");
    tweedeNav.classList.remove("closeMenu");
  });

// const closeButton = document
//   .querySelector("nav:nth-of-type(2) button")
//   .addEventListener("click", function () {
//     tweedeNav.classList.remove("openMenu");
//     tweedeNav.classList.add("closeMenu");
//   });

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (index == 0) {
      ul.classList.toggle("show");
    } else if (index == 1) {
      ul2.classList.toggle("show");
    } else {
      ul3.classList.toggle("show");
    }

    if (
      ul.classList.contains("show") ||
      ul2.classList.contains("show") ||
      ul3.classList.contains("show")
    ) {
      ul.setAttribute("aria-hidden", "false");
    } else {
      ul.setAttribute("aria-hidden", "true");
    }

    if (this.classList.contains("draaiAnimatie")) {
      this.classList.remove("draaiAnimatie");
      this.classList.add("draaiTerugAnimatie");
    } else {
      this.classList.add("draaiAnimatie");
      this.classList.remove("draaiTerugAnimatie");
    }
  });
});

// Hulp van chatgpt, zelf verder mee gegaan en aangepast. Zie "chatgpt-bewegendeheader" voor chat gpt gesprek, alleen de eerste kwart van het gesprek is relevant / deels gebruikt.

// de tijd dat de header blijft staan aangeven
const switchInterval = 5000;

let runCount = 0; // bijhouden hoevaak de functie is uitgevoerd

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  timeoutTijd = 0;
} else {
  timeoutTijd = 500;
}

function switchSection() {
  if (runCount >= 2 /* || tweedeNav.classList.contains("openMenu") */) {
    return; // Stop de functie na 2x uitvoeren of wanneer hamburger open is
  }

  const currentSection = sections[currentIndex];
  currentIndex++;

  const nextSection = sections[currentIndex];
  currentSection.classList.add("slide-out");

  setTimeout(() => {
    currentSection.style.display = "none";
    nextSection.style.display = "flex";
    nextSection.classList.add("slide-in");
    setTimeout(() => {
      nextSection.classList.remove("slide-in");
      runCount++;
    }, timeoutTijd);
  }, timeoutTijd);
}

setInterval(switchSection, switchInterval);

//  hulp chatgpt bij functie https://chatgpt.com/c/671438e0-6404-8002-a44b-03ca184ace0e

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
