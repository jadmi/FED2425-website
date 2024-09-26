// Hulp van chatgpt, zelf verder mee gegaan en aangepast. Zie "chatgpt-bewegendeheader" voor chat gpt gesprek, alleen de eerste kwart van het gesprek is relevant / deels gebruikt.
// const sections = [
//   document.getElementById("header-1"),
//   document.getElementById("header-2"),
//   document.getElementById("header-3"),
// ];

// let currentIndex = 0;
// const switchInterval = 2000;

// function switchSection() {
//   sections[currentIndex].style.display = "none";
//   currentIndex++;

//   if (currentIndex >= 3) {
//     currentIndex = 0;
//   }

//   sections[currentIndex].style.display = "flex";
// }

// setInterval(switchSection, switchInterval);

const sections = [
  document.getElementById("header-1"),
  document.getElementById("header-2"),
  document.getElementById("header-3"),
];

let currentIndex = 0;
const switchInterval = 3000;

let hasRun = false; // Flag to track if the function has run

function switchSection() {
  if (hasRun) return; // Exit if the function has already run once

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
      hasRun = true; // Set the flag to true after running the function
    }, 500); // Match this timeout with the slide-in animation duration
  }, 500); // Match this timeout with the slide-out animation duration
}

setInterval(switchSection, switchInterval);
