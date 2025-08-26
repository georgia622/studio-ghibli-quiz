
const playAgainButton = document.querySelector("#play-again");
const endButton = document.querySelector("#end-game");
const nextButton = document.querySelector("#next");
const homeButton = document.querySelector("#home");
const startButton = document.querySelector("#start-game");
const trueButton = document.querySelector("#true");
const falseButton = document.querySelector("#false");
const displayQuestion = document.querySelector("#question");
const howToButton = document.querySelector("#btn-instructions");
const btnMedium = document.querySelector("#btn-medium");
const btnEasy = document.querySelector("#btn-easy");
const btnHard = document.querySelector("#btn-hard");
const levelButtons = [btnEasy, btnMedium, btnHard];
const validationError = document.querySelector("#validationError");
const dropDownMenu = document.querySelector("#myDropdown");
const playerName = document.querySelector("#playername");
const welcomePage = document.querySelector("#welcome-page");
const gamePage = document.querySelector("#game-page");
const trueButtonContainer = document.querySelector("#true-button");
const falseButtonContainer = document.querySelector("#false-button");
const rightAnswerImage = document.querySelector("#answerImage");
const wrongAnswerImage = document.querySelector("#wrong-answer-img");
const player = document.querySelector("#player");
const levelMessage = document.querySelector("#level-message");
const thankYouPage = document.querySelector("#thank-you");
const score = document.querySelector("#score");
const finalScoreDisplay = document.querySelector("#final-score");
const levelDisplay = document.querySelector("#level");
const levelDifficulty = document.querySelector("#level-difficulty");
const levelDropDown = document.querySelector("#showDropDown");
const helpContent = document.querySelector("#help-content");
const helpBtn = document.querySelector("#helpBtn");

let currentQuestionIndex = 0;
let currentQuestion = " ";


const easyQuestions = [
   {
      answer: "true",
      question: "1. Totoro is a large, fluffy forest spirit.",
      response: "Totoro is indeed a large, fluffy forest spirit from the animated film My Neighbor Totoro."
   },
   {
      answer: "false",
      question: "2. Kiki delivers packages on a flying vacuum cleaner.",
      response: "she flies on a broomstick."
   },
   {
      answer: "true",
      question: "3. Ponyo is a goldfish who wants to become human.",
      response: "the movie Ponyo centers around a goldfish princess and her wish to be a human girl."
   },
   {
      answer: "true",
      question: "4. Spirited Away features a bathhouse for spirits.",
      response: "yes, Spirited Away features a bathhouse called Aburaya (also known as the Bathhouse) that serves as a place for spirits to relax and rejuvenate"
   },
   {
      answer: "true",
      question: "5. Jiji is Kiki's talking cat companion.",
      response: "Jiji is Kiki's talking cat companion in the movie Kiki's Delivery Service. He is a black cat and Kiki's familiar spirit, providing her with companionship."
   },
   {
      answer: "true",
      question: "6. In My Neighbor Totoro, there is a magical Catbus.",
      response: "there is a magical, anthropomorphic cat bus in the movie My Neighbor Totoro. It's a large, grinning, twelve-legged cat with a bushy tail and a hollow body that serves as a bus."
   },
   {
      answer: "true",
      question: "7. Howl's Moving Castle can walk on legs.",
      response: "in the movie Howl's Moving Castle, the castle does walk on legs, these legs are used to propel the castle across the landscape, though it is also capable of flight."
   },
   {
      answer: "true",
      question: "8. Soot sprites appear in both Spirited Away and My Neighbor Totoro.",
      response: "Soot sprites, also known as Susuwatari or Makkurokurosuke, make appearances in both Studio Ghibli films"
   },
   {
      answer: "false",
      question: "9. Studio Ghibli films are all in English originally.",
      response: "Studio Ghibli films are not originally in English. They are Japanese animated films and are primarily voiced in Japanese. "
   },
   {
      answer: "false",
      question: "10. Grave of the Fireflies is a comedy.",
      response: "It is a highly acclaimed and intensely emotional animated war film."
   }
];

const mediumQuestions = [
   {
      answer: "false",
      question: "1. No-Face speaks a lot throughout Spirited Away.",
      response: "he is largely a silent character, communicating primarily through gestures and sounds, especially in the beginning of the film."
   },
   {
      answer: "true",
      question: "2. San, from Princess Mononoke, wears a wolf pelt and face paint.",
      response: "she wears a wolf pelt and has red war paint on her face. She is depicted as a young woman raised by wolves, and her appearance reflects this upbringing."
   },
   {
      answer: "true",
      question: "3. Castle in the Sky was Studio Ghibli's first official release.",
      response: "Castle in the Sky, released in 1986, was Studio Ghibli's first official film."
   },
   {
      answer: "true",
      question: "4. In The Cat Returns, the protagonist becomes a cat herself.",
      response: "the protagonist, Haru Yoshioka, does indeed transform into a cat."
   },
   {
      answer: "false",
      question: "5. Whisper of the Heart is about a girl who discovers she can talk to animals.",
      response: "It's a coming of age story about a young girl named Shizuku who discovers her passion for writing and pursues it with determination."
   },
   {
      answer: "true",
      question: "6. Turnip Head in Howl's Moving Castle turns out to be a cursed prince.",
      response: "Turnip Head is indeed revealed to be Prince Justin, a cursed prince from a neighboring kingdom."
   },
   {
      answer: "true",
      question: "7. Porco Rosso is about a pilot cursed to look like a pig.",
      response: "Porco Rosso tells the story of an Italian World War I ex-fighter ace who is cursed to look like a pig."
   },
   {
      answer: "true",
      question: "8. Chihiro forgets her real name in Spirited Away.",
      response: "through a combination of magic and the passage of time, she begins to forget her original name, Chihiro."
   },
   {
      answer: "true",
      question: "9. The tanuki in Pom Poko use magic to transform.",
      response: "they are depicted as magical creatures, known as bake-danuki in Japanese folklore, who can shapeshift into various forms."
   },
   {
      answer: "false",
      question: "10. The Wind Rises is a fantasy story with talking animals.",
      response: "it's a historical drama based on the life of Jiro Horikoshi, the designer of the Mitsubishi A6M Zero fighter plane."
   }
];

const hardQuestions = [
   {
      answer: "true",
      question: "1. The original Japanese title of Spirited Away is Sen to Chihiro no Kamikakushi.",
      response: "this translates to Sen and Chihiro's Spiriting Away or Sen and Chihiro's Disappearance"
   },
   {
      answer: "true",
      question: "2. In Nausicaä of the Valley of the Wind, Nausicaä rides a glider called a Möwe.",
      response: "the Möwe is a personal, jet-powered glider that Nausicaä uses to navigate the post-apocalyptic world of the film."
   },
   {
      answer: "true",
      question: "3. Only Yesterday switches between 1980s and 1970s timelines.",
      response: "the film switches between two distinct time periods: the present, set in 1982, and the past, specifically 1966, when the protagonist, Taeko, was ten years old. "
   },
   {
      answer: "false",
      question: "4. Ghibli co-founder Isao Takahata directed Howl's Moving Castle.",
      response: "Isao Takahata did not direct Howl's Moving Castle. That film was directed by Hayao Miyazaki."
   },
   {
      answer: "true",
      question: "5. The Baron from The Cat Returns also appears in Whisper of the Heart.",
      response: "in Whisper of the Heart, he appears as a statue in an antique shop, while in The Cat Returns, he comes to life and plays a more active role."
   },
   {
      answer: "false",
      question: "6. Tales from Earthsea was directed by Hayao Miyazaki.",
      response: "the film was directed by his son, Gorō Miyazaki, in his directorial debut."
   },
   {
      answer: "true",
      question: "7. In Princess Mononoke, the Forest Spirit dies and brings new life at the same time.",
      response: "yes, in Princess Mononoke, the Forest Spirit dies and brings new life simultaneously."
   },
   {
      answer: "false",
      question: "8. From Up on Poppy Hill is set during the 1980s economic boom.",
      response: "the film is set in 1963, in the period leading up to the 1964 Tokyo Olympics."
   },
   {
      answer: "true",
      question: "9. When Marnie Was There is based on a British novel.",
      response: "it is based on a 1967 novel of the same name by British author Joan G. Robinson."
   },
   {
      answer: "false",
      question: "10. The Tale of the Princess Kaguya was the last Ghibli film directed by Hayao Miyazaki.",
      response: "The Tale of the Princess Kaguya was directed by Isao Takahata, not Hayao Miyazaki. Hayao Miyazaki's final film before his retirement was The Wind Rises."
   }
];

const expertQuestions = [{
      answer: "true",
      question: "1. Hayao Miyazaki used his own experiences with his mother's illness as inspiration for the character of the bedridden mother in My Neighbor Totoro.",
      response: "this was a significant inspiration for the character of Yasuko Kusakabe"
   },
   {
      answer: "false",
      question: "2. The Ohmu creatures in Nausicaä of the Valley of the Wind were inspired by real-world beetles found in Miyazaki's garden.",
      response: "they were inspired by trilobites and various prehistoric creatures."
   },
   {
      answer: "true",
      question: "3. The Studio Ghibli name comes from the Italian word for a desert wind, and the studio name is meant to suggest 'a new wind' in the animation industry",
      response: "the idea being that the studio would 'blow a new wind through the anime industry'"
   },
   {
      answer: "false",
      question: "4. The background art for Spirited Away was painted using oil paints rather than watercolor or digital techniques.",
      response: "the backgrounds were primarily done using watercolour and traditional media."
   },
   {
      answer: "true",
      question: "5. Laputa: Castle in the Sky shares its name with an island in Gulliver's Travels by Jonathan Swift.",
      response: "Laputa is a flying island described in the 1726 book Gulliver's Travels by Jonathan Swift"
   },
   {
      answer: "false",
      question: "6. Grave of the Fireflies was intended by Isao Takahata as an anti-American war propaganda film.",
      response: "Takahata explicitly stated it was not meant as propaganda but as a human tragedy."
   },
   {
      answer: "true",
      question: "7. The Totoro character design was inspired by a mix of a cat, owl, and tanuki.",
      response: "this reflects the director Hayao Miyazaki's imagination rather than existing folklore."
   },
   {
      answer: "true",
      question: "8. Studio Ghibli once refused to release Princess Mononoke in the U.S. unless Miramax agreed not to edit a single frame.",
      response: "a producer famously sent a katana to Harvey Weinstein with the message no cuts."
   },
   {
      answer: "false",
      question: "9. Yubaba and Zeniba from Spirited Away are actually voiced by two separate actors in the Japanese version.",
      response: " In Japanese, both characters are voiced by the same actress (Mari Natsuki)."
   },
   {
      answer: "true",
      question: "10. The Tale of the Princess Kaguya was the most expensive Japanese animated film ever made at the time of its release.",
      response: "with a budget of approximately US$49.3 million (5 billion yen)."
   }
];


/**Shows game page and 
 * hides validation error message
 **/
function startGame() {
   welcomePage.classList.add("hide");
   gamePage.classList.remove("hide");
   validationError.classList.add("hide");
}


/**Displays the start button 
 * after level selection 
 **/
function startButtonAdd() {
   startButton.classList.remove("hide");
}



/** Shows questions from the selected level
 * @param {string} levelSelect - The level difficulty 
 * selected "easy", "medium", "hard"
 */
function showQuestion(levelSelect) {

   if (levelSelect === "easy") {
      currentQuestion = easyQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "easy");
      levelDisplay.innerHTML = "Easy";
   } else if (levelSelect === "medium") {
      currentQuestion = mediumQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "medium");
      levelDisplay.innerHTML = "Medium";
   } else if (levelSelect === "hard") {
      currentQuestion = hardQuestions[currentQuestionIndex];
      displayQuestion.innerHTML = `${currentQuestion.question}`;
      nextButton.setAttribute("data-type", "hard");
      levelDisplay.innerHTML = "Hard";
   }
}



const trueOrFalse = (answer) => {
   checkAnswer(answer);
   removeAnswerButton();
}


/**Hides true/false 
 * buttons
 **/
function removeAnswerButton() {
   trueButtonContainer.classList.add("hide");
   falseButtonContainer.classList.add("hide");
}


/**Adds true/false buttons back 
 * and hides the images on display
 * */
function addAnswerButton() {
   trueButtonContainer.classList.remove("hide");
   falseButtonContainer.classList.remove("hide");
   rightAnswerImage.classList.add("hide");
   wrongAnswerImage.classList.add("hide");
}


/**Checks answer and updates score if correct, 
 * displays text with correct answer and why if incorrect,
 * @param {string} answer - The users selected answer "true" or "false"
*/
function checkAnswer(answer) {
   let questionAnswer = currentQuestion.answer;
   if (currentQuestion.answer === answer) {
      displayQuestion.innerHTML = "That's Correct" + " " + `${playerName.value}`+ "!";
      updateScore();
      rightAnswerImage.classList.remove("hide");
   } else {
      wrongAnswerImage.classList.remove("hide");
      displayQuestion.innerHTML = "The correct answer is" + " " + `${questionAnswer}` + ", " + `${currentQuestion.response}`;
   }
}



/**Gets the player name input and 
 * displays player name
 **/
function playerNameDisplay() {
   let playerInput = playerName.value;
   player.innerHTML = playerInput;
}



/**Increments and displays score 
 **/
function updateScore() {
   let previousScore = score.innerHTML;
   score.innerHTML = ++previousScore;
}

/**Gets current score to 
 * display final score
 **/
function finalScore() {
   let finalScoreResult = score.innerHTML;
   finalScoreDisplay.innerHTML = finalScoreResult;
}



/**Resets the game back to initial state,
 * Clears score, resets current question index, shows welcome page
 **/
function finishGame() {
   thankYouPage.classList.add("hide");
   welcomePage.classList.remove("hide");
   currentQuestionIndex = 0;
   score.innerHTML = "0";
   startButton.classList.add("hide");
   addAnswerButton();
}


/** To display Thank You page, hide the game play 
 * and show the final score
 **/
function endGame() {
   gamePage.classList.add("hide");
   thankYouPage.classList.remove("hide");
   finalScore();
}



startButton.addEventListener("click", (e) => {
   e.preventDefault();
   if (!playerName.value) {
      validationError.classList.remove("hide");
   } else {
      startGame();
      playerNameDisplay();
   }
});


howToButton.addEventListener("click", () => {
   dropDownMenu.classList.toggle("hide");
});


helpBtn.addEventListener("click", () => {
   helpContent.classList.toggle("hide");
});

nextButton.addEventListener("click", () => {
   if (currentQuestionIndex < 9) {
      currentQuestionIndex++;
      let levelSelect = nextButton.getAttribute("data-type");
      showQuestion(levelSelect);
      addAnswerButton();
   } else {
      endGame();
   }
});


levelButtons.forEach((button) => {
   button.addEventListener("click", (e) => {
      let levelSelect = e.target.getAttribute("data-type");
      showQuestion(levelSelect);
      startButtonAdd();
   });
});


trueButton.addEventListener("click", () => trueOrFalse("true"));
falseButton.addEventListener("click", () => trueOrFalse("false"));


endButton.addEventListener("click", () => {
   levelMessage.innerHTML = "Pick your path through the Ghibli world!";
   playerName.value = " ";
   finishGame();
});


playAgainButton.addEventListener("click", () => {
   finishGame();
   levelMessage.innerHTML = `Choose Your Next Level ${playerName.value}!`;
});


homeButton.addEventListener("click", () => {
   finishGame();
   gamePage.classList.add("hide");
});

levelDifficulty.addEventListener("click", () => {
   levelDropDown.classList.toggle("hide");
});
