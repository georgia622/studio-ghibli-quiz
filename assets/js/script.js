
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
      answer: "true",
      response: "Totoro is indeed a large, fluffy forest spirit from the animated film My Neighbor Totoro."
   },
   {
      question: "Kiki delivers packages on a flying vacuum cleaner.",
      answer: "false",
      response: "she flies on a broomstick."
   },
   {
      question: "Ponyo is a goldfish who wants to become human.",
      answer: "true",
      response: "the movie Ponyo centers around a goldfish princess and her wish to be a human girl."
   },
   {
      question: "Spirited Away features a bathhouse for spirits.",
      answer: "true",
      response: "yes, Spirited Away features a bathhouse called Aburaya (also known as the Bathhouse) that serves as a place for spirits to relax and rejuvenate"
   },
   {
      question: "Jiji is Kiki's talking cat companion.",
      answer: "true",
      response: "Jiji is Kiki's talking cat companion in the movie Kiki's Delivery Service. He is a black cat and Kiki's familiar spirit, providing her with companionship."
   },
   {
      question: "In My Neighbor Totoro, there is a magical Catbus.",
      answer: "true",
      response: "there is a magical, anthropomorphic cat bus in the movie My Neighbor Totoro. It's a large, grinning, twelve-legged cat with a bushy tail and a hollow body that serves as a bus."
   },
   {
      question: "Howl's Moving Castle can walk on legs.",
      answer: "true",
      response: "in the movie Howl's Moving Castle, the castle does walk on legs, these legs are used to propel the castle across the landscape, though it is also capable of flight."
   },
   {
      question: "Soot sprites appear in both Spirited Away and My Neighbor Totoro.",
      answer: "true",
      response: "Soot sprites, also known as Susuwatari or Makkurokurosuke, make appearances in both Studio Ghibli films"
   },
   {
      question: "Studio Ghibli films are all in English originally.",
      answer: "false",
      response: "Studio Ghibli films are not originally in English. They are Japanese animated films and are primarily voiced in Japanese. "
   },
   {
      question: "Grave of the Fireflies is a comedy.",
      answer: "false",
      response: "It is a highly acclaimed and intensely emotional animated war film."
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
      currentQuestion = easyQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "easy");
   } else if (levelSelect === "medium") {
      currentQuestion = mediumQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "medium");
   } else if (levelSelect === "hard") {
      currentQuestion = hardQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "hard");
   }
}

/*To display the next question when next button clicked */
nextButton.addEventListener("click", () => {
   if (currentQuestionIndex < 10) {
      currentQuestionIndex++;
      let levelSelect = nextButton.getAttribute("data-type");
      showQuestion(levelSelect);
   } else {
      endGame();
   }
});

/* True and false button event listener to check answer */
trueButton.addEventListener("click", function () {
   checkAnswer("true");
});
falseButton.addEventListener("click", function () {
   checkAnswer("false");
});

function checkAnswer(answer) {
   let questionAnswer = currentQuestion.answer;
   if (currentQuestion.answer === answer) {
      displayQuestion.innerHTML = "That's Correct!";
   } else {
      displayQuestion.innerHTML = "Almost! The correct answer is" + " " + `${questionAnswer}` + ", " + `${currentQuestion.response}`;
   }
}


/* To display Thank You page and hide the game play */
function endGame() {
   document.getElementById("game-page").classList.add("hide");
   document.getElementById("thank-you").classList.remove("hide");
}