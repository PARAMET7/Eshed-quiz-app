// const darkModeToggle = document.getElementById('[data-js="darkModeToggle"]');
// const body = document.body;

// // Function to toggle dark mode
// function toggleDarkMode() {
//   body.classList.toggle('dark-mode');
// }

// // Event listener for checkbox change
// darkModeToggle.addEventListener('change', function() {
//   toggleDarkMode();
// });

// /*==== toggele====1 */

// const toggleButton = document.getElementById('[data-js="toggleButton"]');
// const itemToToggle = document.getElementById('[data-js="itemToToggle"]');

// toggleButton.addEventListener('click', function() {
//   // Toggle the visibility of the item
//   if (itemToToggle.style.display === 'none') {
//     itemToToggle.style.display = 'block'; // or 'inline', 'flex', etc., based on your layout
//   } else {
//     itemToToggle.style.display = 'none';
//   }
// });

/*==== toggele====2 */

// const bookmarkIcon = document.querySelector(".img2");
// console.log(bookmarkIcon);
// const answerButton = document.querySelector("[data-js=answer-button]");

// // Get all elements with the class "answer-button"
// const answerButtons = document.querySelectorAll("[data-js=answer-button]");

// bookmarkIcon.addEventListener("click", function () {
//   // Check the current source of the bookmark icon
//   if (bookmarkIcon.src.endsWith("./resources/1.png")) {
//     //Change the source to the filled bookmark icon
//     bookmarkIcon.src = "./resources/2.png";
//   } else {
//     // Change the source back to the regular bookmark icon
//     bookmarkIcon.src = "./resources/1.png";
//   }
// });


// luam code


// Toogle bookmark button
const buttonBookmark = document.querySelector(".card__bookmark");
let index = 0;
// const bookmarkImg = document.getElementById(“bookmark-image”);
const bookmarkImg = document.querySelector(".img2");
const images = ["./resources/bookmark_transparent_white.png", "./resources/bookmark_filled.png"];
buttonBookmark.addEventListener("click", () => {
  index = 1 - index; // Toggles between 0=filled and 1=not filled
  bookmarkImg.src = images[index];
});

// Toogle answer button
// document.addEventListener(“DOMContentLoaded”, () => {
//   const buttonAnswer = document.querySelector(“.card__button”);
//   const answer = document.querySelector(“.card__answer”);
//   // Toggle answer button
//   buttonAnswer.addEventListener(“click”, () => {
//     answer.hidden = !answer.hidden; // Toggle visibility of the answer
//     buttonAnswer.textContent = answer.hidden ? “Show Answer” : “Hide Answer”;
//   });
// });


// showing answer//
// TOGGLE ANSWER //


const answerButton = document.querySelector("[data-js=answer-button]");

// Get all elements with the class "answer-button"
const answerButtons = document.querySelectorAll("[data-js=answer-button]");


answerButton.addEventListener("click", function () {
  // Get the h4 element inside the question card
  const answerText = document.querySelector(".question-cards h4");

  // Toggle the 'hidden' class on the h4 element
  answerText.classList.toggle("hidden");

  if (answerButton.innerText === "Show Answer") {
    answerButton.innerText = "Hide Answer";
  } else {
    answerButton.innerText = "Show Answer";
  }
});
