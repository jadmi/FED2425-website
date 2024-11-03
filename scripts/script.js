// hulp chatgpt met buttons etc
// https://chatgpt.com/share/66f8aef3-8310-8002-89ad-1c23c1328533

// array aanmaken met de 3 headers
document.addEventListener("DOMContentLoaded", function () {
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
  const derdeNav = document.querySelector("nav:nth-of-type(3)");
  const video = document.querySelector("video");
  const playButton = document.querySelector(".play-button");

  const arrow = document.querySelectorAll(".arrow-icon");

  const halloweenThema = document.querySelector("main section:first-of-type a");
  const halloweenBody = document.querySelector("body");
  halloweenThema.addEventListener("click", function () {
    halloweenBody.classList.toggle("halloween");
  });

  if (video) {
    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playButton.innerHTML = "&#9208";
      } else {
        video.pause();
        playButton.innerHTML = "&#9654";
      }
    });
  }

  let currentIndex = 0;

  // detail animaties
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

  // toevoeging nav geen touch scroll
  function preventScroll(event) {
    event.preventDefault();
  }

  // stackoverflow.com/questions/49500339/cant-prevent-touchmove-from-scrolling-window-on-ios
  const openButton = document
    .querySelector("nav button")
    .addEventListener("click", function () {
      tweedeNav.classList.add("openMenu");
      tweedeNav.classList.remove("closeMenu");
      document.addEventListener("touchmove", preventScroll, {
        passive: false,
      });
      document.body.style.overflow = "hidden";
    });

  // hamburger buttons
  const closeButton = document
    .querySelector("nav:nth-of-type(2) button")
    .addEventListener("click", function () {
      tweedeNav.classList.remove("openMenu");
      tweedeNav.classList.add("closeMenu");
      document.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "";
    });

  const closeButton2 = document
    .querySelector("nav:nth-of-type(3) button:last-of-type")
    .addEventListener("click", function () {
      tweedeNav.classList.remove("openMenu");
      tweedeNav.classList.add("closeMenu");
      derdeNav.classList.remove("openMenu");
      derdeNav.classList.add("closeMenu");
      document.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "";
    });

  const derdeNavButton = document
    .querySelector("nav:nth-of-type(2) ul .navbutton")
    .addEventListener("click", function () {
      derdeNav.classList.add("openMenu");
      derdeNav.classList.remove("closeMenu");
    });

  const terugButton = document
    .querySelector("nav:nth-of-type(3) button:first-of-type")
    .addEventListener("click", function () {
      derdeNav.classList.remove("openMenu");
      derdeNav.classList.add("closeMenu");
      tweedeNav.classList.add("openMenu");
      tweedeNav.classList.remove("closeMenu");
    });

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

  // zorgt voor veranderen van headers + animaties timen
  function switchSection() {
    if (runCount >= 2 || tweedeNav.classList.contains("openMenu")) {
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

  // tijd tussen switchen van headers
  setInterval(switchSection, switchInterval);
});
