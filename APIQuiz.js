let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to letiables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var currentQuestionIndex = 0;
let time = questions.length * 20;
let timerId;

  
  let questions = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  let choicesEl = document.getElementById("choices");
  let submitBtn = document.getElementById("submit");
  let startBtn = document.getElementById("start");
  let initialsEl = document.getElementById("initials");
  let feedbackEl = document.getElementById("feedback");
  
  

startBtn.addEventListener('click', function() {
    let answers
  for (i = 0; i < questions.length; i++) {
        answers = prompt(questions[i].title)
        
  }

}
);

@media screen and (max-width: 500px) {
    .column {
      width: 100%;
    }
  }


