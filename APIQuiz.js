
var currentQuestionIndex = 0;
let time = questions.length * 20;
let timerId;

  
  let questions = document.getElementById("#questions");
  var timerEl = document.getElementById("#time");
  let choicesEl = document.getElementById("#choices");
  let submitBtn = document.getElementById("#submit");
  let letsBegin = document.getElementById("#begin");
  let initialsEl = document.getElementById("#initials");
  let feedbackEl = document.getElementById("#feedback");
  
  

// letsBegin.addEventListener('click', function() {
//   for (i = 0; i < questions.length; i++) {
//     var choicesEl (this.title)   
        
//   }

function startQuiz() {
    letsBegin.classList.add(hide);
    time = questions.length * 15;
          
    }

}
);

function questionClick() {
    
    if (this.value !== questions[currentQuestionIndex].answer) {
    
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  

function startQuiz() {
    
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");
    
    timerId = setInterval(clockTick, 1000);
  
    timerEl.textContent = time;
  
    getQuestion();
  }

  currentQuestion.choices.forEach(function(choice, i) {
    
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    
    choiceNode.onclick = questionClick;

    
    choicesEl.appendChild(choiceNode);
  });
}

  
  function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
@media screen and (max-width: 500px) {
    .column {
      width: 100%;
    }
  }


