// hulp chatgpt + site
// https://chatgpt.com/share/66f8aef3-8310-8002-89ad-1c23c1328533

const buttons = document.querySelectorAll("button");
const ul = document.querySelector(".details");
const ul2 = document.querySelector(".details-2");
const ul3 = document.querySelector(".details-3");

// array aanmaken met de 3 headers
const sections = [
  document.getElementById("header-1"),
  document.getElementById("header-2"),
  document.getElementById("header-3"),
];

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (index == 0) {
      ul.classList.toggle("show");
    } else if (index == 1) {
      ul2.classList.toggle("show");
    } else {
      ul3.classList.toggle("show");
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

// index van array bijhouden
let currentIndex = 0;

// de tijd dat de header blijft staan aangeven
const switchInterval = 5000;

let runCount = 0; // bijhouden hoevaak de functie is uitgevoerd

function switchSection() {
  if (runCount >= 2) {
    return; // Stop de functie na 2x uitvoeren
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
    }, 500);
  }, 500);
}

setInterval(switchSection, switchInterval);
