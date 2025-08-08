
// Game button Variables 
const playAgainButton = document.getElementById("play-again");
const endButton = document.getElementById("end-game");
const nextButton = document.getElementById("next");
const homeButton = document.getElementById("home");
const startButton = document.getElementById("start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const displayQuestion = document.getElementById("question");

let currentQuestionIndex = 0;
let currentQuestion = " ";

//Quiz Questions
const easyQuestions = [
   {
      "question": "Totoro is a large, fluffy forest spirit.",
      answer: "true"
   },
   {
      question: "Kiki delivers packages on a flying vacuum cleaner.",
      answer: "false"
   },
   {
      question: "Ponyo is a goldfish who wants to become human.",
      answer: "true"
   },
   {
      question: "Spirited Away features a bathhouse for spirits.",
      answer: "true"
   },
   {
      question: "Jiji is Kiki's talking cat companion.",
      answer: "true"
   },
   {
      question: "In My Neighbor Totoro, there is a magical Catbus.",
      answer: "true"
   },
   {
      question: "Howl's Moving Castle can walk on legs.",
      answer: "true"
   },
   {
      question: "Soot sprites appear in both Spirited Away and My Neighbor Totoro.",
      answer: "true"
   },
   {
      question: "Studio Ghibli films are all in English originally.",
      answer: "false"
   },
   {
      question: "Grave of the Fireflies is a comedy.",
      answer: "false"
   },
];

const mediumQuestions = [
   {
      question: "No-Face speaks a lot throughout Spirited Away.",
      answer: "false"
   },
   {
      question: "San, from Princess Mononoke, wears a wolf pelt and face paint.",
      answer: "true"
   },
   {
      question: "Castle in the Sky was Studio Ghibli's first official release.",
      answer: "true"
   },
   {
      question: "In The Cat Returns, the protagonist becomes a cat herself.",
      answer: "true"
   },
   {
      question: "Whisper of the Heart is about a girl who discovers she can talk to animals",
      answer: "false"
   },
   {
      question: "Turnip Head in Howl's Moving Castle turns out to be a cursed prince.",
      answer: "true"
   },
   {
      question: "Porco Rosso is about a pilot cursed to look like a pig",
      answer: "true"
   },
   {
      question: "Chihiro forgets her real name in Spirited Away.",
      answer: "true"
   },
   {
      question: "The tanuki in Pom Poko use magic to transform.",
      answer: "true"
   },
   {
      question: "The Wind Rises is a fantasy story with talking animals.",
      answer: "false"
   },
];

const hardQuestions = [
   {
      question: "The original Japanese title of Spirited Away is Sen to Chihiro no Kamikakushi.",
      answer: "true"
   },
   {
      question: "In Nausicaä of the Valley of the Wind, Nausicaä rides a glider called a Möwe.",
      answer: "true"
   },
   {
      question: "Only Yesterday switches between 1980s and 1970s timelines.",
      answer: "true"
   },
   {
      question: "Ghibli co-founder Isao Takahata directed Howl's Moving Castle.",
      answer: "false"
   },
   {
      question: "The Baron from The Cat Returns also appears in Whisper of the Heart.",
      answer: "false"
   },
   {
      question: "Tales from Earthsea was directed by Hayao Miyazaki.",
      answer: "false"
   },
   {
      question: "In Princess Mononoke, the Forest Spirit dies and brings new life at the same time.",
      answer: "true"
   },
   {
      question: "From Up on Poppy Hill is set during the 1980s economic boom.",
      answer: "false"
   },
   {
      question: "When Marnie Was There is based on a British novel.",
      answer: "true"
   },
   {
      question: "The Tale of the Princess Kaguya was the last Ghibli film directed by Hayao Miyazaki.",
      answer: "false"
   },
];

//Start Game on button click 
startButton.addEventListener("click", function () {
   document.getElementById("welcome-page").classList.add("hide");
   document.getElementById("game-page").classList.remove("hide");
});

// Get level selection on click 
const btnEasy = document.getElementById("btn-easy");
btnEasy.addEventListener("click", function () {
   let levelSelect = this.getAttribute("data-type");
   showQuestion(levelSelect);
});

const btnMedium = document.getElementById("btn-medium");
btnMedium.addEventListener("click", function () {
   let levelSelect = this.getAttribute("data-type");
   showQuestion(levelSelect);
});

const btnHard = document.getElementById("btn-hard");
btnHard.addEventListener("click", function () {
   let levelSelect = this.getAttribute("data-type");
   showQuestion(levelSelect);
});


/*Function to show questions from the selected level */
function showQuestion(levelSelect) {

   if (levelSelect === "easy") {
      let currentQuestion = easyQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "easy");
   } else if (levelSelect === "medium") {
   let currentQuestion = mediumQuestions[currentQuestionIndex];
   displayQuestion.innerHTML = `${currentQuestion.question}`;
   nextButton.setAttribute("data-type", "medium");
   } else if (levelSelect === "hard") {
   let currentQuestion = hardQuestions[currentQuestionIndex];
   displayQuestion.innerHTML = `${currentQuestion.question}`;
   nextButton.setAttribute("data-type", "hard");
}
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < 10){
   currentQuestionIndex++;
   let levelSelect = nextButton.getAttribute("data-type");
   showQuestion(levelSelect);
  } 
});




