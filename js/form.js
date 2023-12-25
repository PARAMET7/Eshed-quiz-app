
const card = document.querySelector(".card-container");

const darkSwitch = document.querySelector('[data-js="darkMode"]');
const body = document.querySelector("body");
const main = document.querySelector("main");

const form = document.querySelector('[data-js="addCards"]');
const addQuestion = document.querySelector('[data-js="addQuestion"]');
const addAnswer = document.querySelector('[data-js="addAnswer"]');
const addTag = document.querySelector('[data-js="addTag"]');

const submitButton = document.querySelector('[data-js="submitBtn"]');

const charsQuestion = document.querySelector('[data-js="questionCharsLeft"]');
const charsAnswer = document.querySelector('[data-js="answerCharsLeft"]');



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const section = document.createElement("section");
  section.classList.add("card-container");

  const newBookmark = document.createElement("button");
  newBookmark.setAttribute("data-js", "bookmark");
  newBookmark.classList.add("bookmark");
  section.append(newBookmark);

  const newBookImage = document.createElement("img");
  newBookImage.src = "./resources/bookmark_filled.png";
  newBookImage.setAttribute("data-js", "bookmarkImage");
  newBookmark.append(newBookImage);

  const newArticle = document.createElement("article");
  newArticle.classList.add("card-article");
  section.append(newArticle);

  const newQuestion = document.createElement("p");
  newArticle.append(newQuestion);
  newQuestion.textContent = addQuestion.value;

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("check");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("data-js", "answerButton");
  newArticle.append(newAnswerButton);

  const newAnswerText = document.createElement("p");
  newAnswerText.classList.add("solution");
  newAnswerText.setAttribute("hidden", "");
  newAnswerText.setAttribute("data-js", "answerText");
  newAnswerText.textContent = addAnswer.value;
  newArticle.append(newAnswerText);

  const newTagsContainer = document.createElement("p");
  newTagsContainer.classList.add("tags-container");
  section.append(newTagsContainer);

  const newTags = document.createElement("ul");
  newTags.classList.add("tags");
  newTagsContainer.append(newTags);

  const newList = document.createElement("li");
  newList.textContent = addTag.value;
  newTags.append(newList);

  main.append(section);

  //bookmark toggle activate
  const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');
  const bbutton = document.querySelector('[data-js="bookmark"]');

  bbutton.addEventListener("click", (e) => {
    if (bookmarkImage.src.match("bmw.png")) {
      bookmarkImage.src = "./resources/bookmark_filled.png";
    } else if (bookmarkImage.src.match("bookmark_filled.png")) {
      bookmarkImage.src = "./resources/bookmark.png";
    }
  });

  //answer toggle activate
  const answerButton = document.querySelector('[data-js="answerButton"]');
  const answer = document.querySelector('[data-js="answerText"]');

  let aCounter = 1;
  answerButton.addEventListener("click", (e) => {
    if (aCounter % 2 != 0) {
      answer.removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
      aCounter++;
    } else {
      answer.setAttribute("hidden", "");
      answerButton.textContent = "Show answer";
      aCounter--;
    }
  });

  charsAnswer.textContent = "";
  charsQuestion.textContent = "";
  form.reset();
});

// Character Counts to textfields

function countChars(inputField, output) {
  inputField.addEventListener("input", () => {
    output.textContent = 150 - inputField.value.length + " characters left";
    inputField.value.length === 150
      ? output.classList.add("red")
      : output.classList.remove("red");
  });
}

countChars(addQuestion, charsQuestion);
countChars(addAnswer, charsAnswer);

 //============     ======          ==============
 //============     submit           ==============
 //============     ======           ==============



  //============answer toggle activate==============


// ==========Character Counts to textfields===============//



 //============     =========          ==============
 //============     25-12-23           ==============
 //============     =========          ==============


// const quizForm = document.getElementById("quiz-form");

// quizForm.addEventListener("submit", function (event) {


//   event.preventDefault();

//   //   const formElements = event.target.elements;
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);
//   const formQuestionInput = data.formQuestion;
//   const formAnswerInput = data.formAnswer;
//   const formTagInput = data.formTag;

//   //   console.log(data.formQuestion, data.formAnswer, data.formTag); // prints the text entered on the "Your question" form

//   //   console.log(event.target.elements);

//   const cardContainer = document.createElement("div"); // assigned new div element to a variable
//   cardContainer.classList.add("question-card-1"); // gave style class to the card

//   const bookmarkImg = document.createElement("img"); // assigned new img element to a variable
//   bookmarkImg.classList.add("bookmark-img"); // gave style class to the image
//   bookmarkImg.src = "./resources/bookmark.png"; // gave source for the image
//   bookmarkImg.alt = "bookmark icon"; // gave alt text  to the image
//   bookmarkImg.setAttribute("data-js", "bookmark-icon"); // gave further attributes to the image

//   const questionText = document.createElement("h3"); // assigned new h3 element (question text) to a variable
//   questionText.textContent = formQuestionInput; // set the value of the new questionAnswer to show up in the new card

//   const answerText = document.createElement("h4"); // assigned new h4 element (answer text) to a variable
//   answerText.textContent = formAnswerInput; // set the value of the new answerText to show up in the new card
//   answerText.classList.add("hidden"); // add class name, assuming new answers should also initiate hidden

//   const answerButton = document.createElement("button"); // assigned new button element to a variable
//   answerButton.classList.add("answer-button"); // gave style class to the new button
//   answerButton.type = "button"; // add type to the new button element
//   answerButton.setAttribute("data-js", "answer-button"); // gave further attributes to the button
//   answerButton.textContent = "Show Answer"; // set the value of the new button text

//   const hashtagList = document.createElement("ul"); // assigned new hashtag (ul) element to a variable
//   const liElement = document.createElement("li"); // assigned new hashtag content (li) element to a variable
//   liElement.textContent = formTagInput; // set the content of the hashtag text to  a new variable
//   hashtagList.appendChild(liElement); // append the content of the hashtag text to the parent element (ul) as a child element

//   // appending new elements to the card container
//   cardContainer.appendChild(bookmarkImg);
//   cardContainer.appendChild(questionText);
//   cardContainer.appendChild(answerText);
//   cardContainer.appendChild(answerButton);
//   cardContainer.appendChild(hashtagList);

//   //  append the cardContainer to the form page
//   const questionCardsContainer = document.querySelector('[data-js="main"]');
//   questionCardsContainer.append(cardContainer);

//   answerButton.addEventListener("click", function () {
//     // Get the h4 element inside the question card
//     const answerText = document.querySelector(".question-card-1 h4");
//     // console.log(answerButton);

//     // Toggle the 'hidden' class on the h4 element
//     answerText.classList.toggle("hidden");

//     if (answerButton.innerText === "Show Answer") {
//       answerButton.innerText = "Hide Answer";
//     } else {
//       answerButton.innerText = "Show Answer";
//     }
//   });

//   event.target.reset(); // reset form fields
// });
