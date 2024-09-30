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

let runCount = 0; // Counter to track the number of runs

function switchSection() {
  if (runCount >= 2) {
    return; // Exit after running twice
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
      runCount++; // Increment the run counter after each complete run;
    }, 500); // Match this timeout with the slide-in animation duration
  }, 500); // Match this timeout with the slide-out animation duration
}

setInterval(switchSection, switchInterval);
