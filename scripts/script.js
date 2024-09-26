// Hulp van chatgpt, zelf verder mee gegaan en aangepast. Zie "chatgpt-bewegendeheader" voor chat gpt gesprek, alleen de eerste kwart van het gesprek is relevant / deels gebruikt.


// https://chatgpt.com/share/66f4a34c-a378-8002-b5d8-a0c5f356ec70 voor deel 2 van de chat (animaties)

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

let aantalKeer = 0; 

function switchSection() {
  if (aantalKeer >= 2) {
    return;
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
      aantalKeer++; 
    }, 500); 
  }, 500); 
}

setInterval(switchSection, switchInterval);
