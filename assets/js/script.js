/**Game button Variables*/
const playAgainButton = document.getElementById("play-again");
const endButton = document.getElementById("end-game");
const nextButton = document.getElementById("next");
const homeButton = document.getElementById("home");
const startButton = document.getElementById("start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const displayQuestion = document.getElementById("question");
const howToButton = document.getElementById("btn-instructions");
const btnMedium = document.getElementById("btn-medium");
const btnEasy = document.getElementById("btn-easy");
const btnHard = document.getElementById("btn-hard");
const levelButtons = [btnEasy, btnMedium, btnHard];
const button = document.getElementById("btn-level");
const validationError = document.getElementById("validationError");

/**Quiz Questions,answers and responses*/
const easyQuestions = [
   {
      question: "1. Totoro is a large, fluffy forest spirit.",
      answer: "true",
      response: "Totoro is indeed a large, fluffy forest spirit from the animated film My Neighbor Totoro."
   },
   {
      question: "2. Kiki delivers packages on a flying vacuum cleaner.",
      answer: "false",
      response: "she flies on a broomstick."
   },
   {
      question: "3. Ponyo is a goldfish who wants to become human.",
      answer: "true",
      response: "the movie Ponyo centers around a goldfish princess and her wish to be a human girl."
   },
   {
      question: "4. Spirited Away features a bathhouse for spirits.",
      answer: "true",
      response: "yes, Spirited Away features a bathhouse called Aburaya (also known as the Bathhouse) that serves as a place for spirits to relax and rejuvenate"
   },
   {
      question: "5. Jiji is Kiki's talking cat companion.",
      answer: "true",
      response: "Jiji is Kiki's talking cat companion in the movie Kiki's Delivery Service. He is a black cat and Kiki's familiar spirit, providing her with companionship."
   },
   {
      question: "6. In My Neighbor Totoro, there is a magical Catbus.",
      answer: "true",
      response: "there is a magical, anthropomorphic cat bus in the movie My Neighbor Totoro. It's a large, grinning, twelve-legged cat with a bushy tail and a hollow body that serves as a bus."
   },
   {
      question: "7. Howl's Moving Castle can walk on legs.",
      answer: "true",
      response: "in the movie Howl's Moving Castle, the castle does walk on legs, these legs are used to propel the castle across the landscape, though it is also capable of flight."
   },
   {
      question: "8. Soot sprites appear in both Spirited Away and My Neighbor Totoro.",
      answer: "true",
      response: "Soot sprites, also known as Susuwatari or Makkurokurosuke, make appearances in both Studio Ghibli films"
   },
   {
      question: "9. Studio Ghibli films are all in English originally.",
      answer: "false",
      response: "Studio Ghibli films are not originally in English. They are Japanese animated films and are primarily voiced in Japanese. "
   },
   {
      question: "10. Grave of the Fireflies is a comedy.",
      answer: "false",
      response: "It is a highly acclaimed and intensely emotional animated war film."
   }
];

const mediumQuestions = [
   {
      question: "1. No-Face speaks a lot throughout Spirited Away.",
      answer: "false",
      response: "he is largely a silent character, communicating primarily through gestures and sounds, especially in the beginning of the film."
   },
   {
      question: "2. San, from Princess Mononoke, wears a wolf pelt and face paint.",
      answer: "true",
      response: "she wears a wolf pelt and has red war paint on her face. She is depicted as a young woman raised by wolves, and her appearance reflects this upbringing."
   },
   {
      question: "3. Castle in the Sky was Studio Ghibli's first official release.",
      answer: "true",
      response: "Castle in the Sky, released in 1986, was Studio Ghibli's first official film."
   },
   {
      question: "4. In The Cat Returns, the protagonist becomes a cat herself.",
      answer: "true",
      response: "the protagonist, Haru Yoshioka, does indeed transform into a cat."
   },
   {
      question: "5. Whisper of the Heart is about a girl who discovers she can talk to animals.",
      answer: "false",
      response: "It's a coming of age story about a young girl named Shizuku who discovers her passion for writing and pursues it with determination."
   },
   {
      question: "6. Turnip Head in Howl's Moving Castle turns out to be a cursed prince.",
      answer: "true",
      response: "Turnip Head is indeed revealed to be Prince Justin, a cursed prince from a neighboring kingdom."
   },
   {
      question: "7. Porco Rosso is about a pilot cursed to look like a pig.",
      answer: "true",
      response: "Porco Rosso tells the story of an Italian World War I ex-fighter ace who is cursed to look like a pig."
   },
   {
      question: "8. Chihiro forgets her real name in Spirited Away.",
      answer: "true",
      response: "through a combination of magic and the passage of time, she begins to forget her original name, Chihiro."
   },
   {
      question: "9. The tanuki in Pom Poko use magic to transform.",
      answer: "true",
      response: "they are depicted as magical creatures, known as bake-danuki in Japanese folklore, who can shapeshift into various forms."
   },
   {
      question: "10. The Wind Rises is a fantasy story with talking animals.",
      answer: "false",
      response: "it's a historical drama based on the life of Jiro Horikoshi, the designer of the Mitsubishi A6M Zero fighter plane."
   }
];

const hardQuestions = [
   {
      question: "1. The original Japanese title of Spirited Away is Sen to Chihiro no Kamikakushi.",
      answer: "true",
      response: "this translates to Sen and Chihiro's Spiriting Away or Sen and Chihiro's Disappearance"
   },
   {
      question: "2. In Nausicaä of the Valley of the Wind, Nausicaä rides a glider called a Möwe.",
      answer: "true",
      response: "the Möwe is a personal, jet-powered glider that Nausicaä uses to navigate the post-apocalyptic world of the film."
   },
   {
      question: "3. Only Yesterday switches between 1980s and 1970s timelines.",
      answer: "true",
      response: "the film switches between two distinct time periods: the present, set in 1982, and the past, specifically 1966, when the protagonist, Taeko, was ten years old. "
   },
   {
      question: "4. Ghibli co-founder Isao Takahata directed Howl's Moving Castle.",
      answer: "false",
      response: "Isao Takahata did not direct Howl's Moving Castle. That film was directed by Hayao Miyazaki."
   },
   {
      question: "5. The Baron from The Cat Returns also appears in Whisper of the Heart.",
      answer: "true",
      response: "in Whisper of the Heart, he appears as a statue in an antique shop, while in The Cat Returns, he comes to life and plays a more active role."
   },
   {
      question: "6. Tales from Earthsea was directed by Hayao Miyazaki.",
      answer: "false",
      response: "the film was directed by his son, Gorō Miyazaki, in his directorial debut."
   },
   {
      question: "7. In Princess Mononoke, the Forest Spirit dies and brings new life at the same time.",
      answer: "true",
      response: "yes, in Princess Mononoke, the Forest Spirit dies and brings new life simultaneously."
   },
   {
      question: "8. From Up on Poppy Hill is set during the 1980s economic boom.",
      answer: "false",
      response: "the film is set in 1963, in the period leading up to the 1964 Tokyo Olympics."
   },
   {
      question: "9. When Marnie Was There is based on a British novel.",
      answer: "true",
      response: "it is based on a 1967 novel of the same name by British author Joan G. Robinson."
   },
   {
      question: "10. The Tale of the Princess Kaguya was the last Ghibli film directed by Hayao Miyazaki.",
      answer: "false",
      response: "The Tale of the Princess Kaguya was directed by Isao Takahata, not Hayao Miyazaki. Hayao Miyazaki's final film before his retirement was The Wind Rises."
   }
];

let currentQuestionIndex = 0;
let currentQuestion = " ";

/** Toggles how to play instructions dropdown */
howToButton.addEventListener("click", function () {
   document.getElementById("myDropdown").classList.toggle("hide");
});

/**Check the user has entered a player name to start the game,
* tutorial used as guide from
* https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/ */
startButton.addEventListener("click", function (e) {
   e.preventDefault();
   const playerName = document.getElementById("playername");

   //Checks and validates that a user has entered a player name
   if (!playerName.value) {
      validationError.classList.remove("hide");
   } else {
      startGame();
      playerNameDisplay();
   }
});

/**Shows game page and hides validation error message */
function startGame() {
   //Hides welcome page and displays the game page
   document.getElementById("welcome-page").classList.add("hide");
   document.getElementById("game-page").classList.remove("hide");
   validationError.classList.add("hide");
}

/**Displays the start button after level selection */
function startButtonAdd() {
   startButton.classList.remove("hide");
}


/**Used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *  as a guide */
levelButtons.forEach((button) => {
   button.addEventListener("click", function () {
      let levelSelect = this.getAttribute("data-type");
      showQuestion(levelSelect);
      startButtonAdd();
   });
});


/** Shows questions from the selected level
 * @param {string} levelSelect - The level difficulty selected "easy", "medium", "hard"
 */
function showQuestion(levelSelect) {

   if (levelSelect === "easy") {
      currentQuestion = easyQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "easy");
      document.getElementById("level").innerHTML = "Easy";
   } else if (levelSelect === "medium") {
      currentQuestion = mediumQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "medium");
      document.getElementById("level").innerHTML = "Medium";
   } else if (levelSelect === "hard") {
      currentQuestion = hardQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "hard");
      document.getElementById("level").innerHTML = "Hard";
   }
}

/** Navigates to the next question
 * ends the game if reached the end of the qustions
 */
nextButton.addEventListener("click", function () {
   if (currentQuestionIndex < 9) {
      currentQuestionIndex++;
      let levelSelect = nextButton.getAttribute("data-type");
      showQuestion(levelSelect);
      trueButton.addEventListener("click", checkTrue);
      falseButton.addEventListener("click", checkFalse);
   } else {
      endGame(); //Displays thank you page, end of game
   }
});


/**True and false button event listener to check answer*/
trueButton.addEventListener("click", checkTrue);
falseButton.addEventListener("click", checkFalse);


function checkTrue() {
   checkAnswer("true");
   removeAnswerButton(); //Removes event listener to prevent increasing of score
}

function checkFalse() {
   checkAnswer("false");
   removeAnswerButton(); //Removes event listener to prevent increasing of score
}


function removeAnswerButton() {
   
   document.getElementById("answerImage").classList.remove("hide");
}


/**Checks answer and updates score if correct, displays text with correct answer and why if incorrect,
 * @param {string} answer - The users selected answer "true" or "false"
*/
function checkAnswer(answer) {
   let questionAnswer = currentQuestion.answer;
   if (currentQuestion.answer === answer) {
      displayQuestion.innerHTML = "That's Correct!";
      updateScore(); //Increments the score
   } else {
      displayQuestion.innerHTML = "The correct answer is" + " " + `${questionAnswer}` + ", " + `${currentQuestion.response}`;
   }
}


/**Gets the player name input and displays player name*/
function playerNameDisplay() {
   let playerInput = document.getElementById("playername").value;
   document.getElementById("player").innerHTML = playerInput;
}

/**Increments and displays score */
function updateScore() {
   let previousScore = document.getElementById("score").innerHTML;
   document.getElementById("score").innerHTML = ++previousScore;
}

/**Gets current score to display final score*/
function finalScore() {
   let finalScore = document.getElementById("score").innerHTML;
   document.getElementById("final-score").innerHTML = finalScore;
}



/**End game button restarts game, displays welcome page with original welcome message*/
endButton.addEventListener("click", function () {
   document.getElementById("level-message").innerHTML = "Pick your path through the Ghibli world!";
   finishGame();
});

/**Play again button restarts the game, displays welcome page with new selection message*/
playAgainButton.addEventListener("click", function () {
   finishGame();
   document.getElementById("level-message").innerHTML = "Choose Your Next Level!";
});

/**Home button returns back to welcome page*/
homeButton.addEventListener("click", function () {
   finishGame();
   document.getElementById("game-page").classList.add("hide");
});

/**Resets the game back to initial state,
 * Clears score, resets current question index, shows welcome page*/
function finishGame() {
   document.getElementById("thank-you").classList.add("hide");
   document.getElementById("welcome-page").classList.remove("hide");
   currentQuestionIndex = 0; //Resets to first question
   document.getElementById("score").innerHTML = "0"; //Clears score
   document.getElementById("playername").innerHTML = " "; //Clears playername
   startButton.classList.add("hide"); //Start button hiden until level is selected
}


/** To display Thank You page, hide the game play and show the final score*/
function endGame() {
   document.getElementById("game-page").classList.add("hide");
   document.getElementById("thank-you").classList.remove("hide");
   finalScore(); //Displays the final score 
}