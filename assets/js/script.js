//enter questions array
var questionInfo = [
    {
    question:"Inside which HTML element do we put the JavaScript?",
    choices:["a.<javascript>","b.<script>","c.<js>","d.all of the above"],
    answer: "b.<script>"
    },
    {
    question:"Which of these values is NOT considered false?",
    choices:["a.0","b.\"0\"","c.null","d\"\"."],
    answer: "b.\"0\""
    }
];

var startQuizEl = document.getElementById("start");
var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var questionsEl=document.getElementById("questions");
console.log(questionsEl);
var questionTitleEl=document.getElementById("question-title");
console.log(questionTitleEl);
var choice0El = document.getElementById("choice0");
console.log(choice0El);
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var resultEl = document.getElementById("result");
console.log(resultEl);
var questionIndex =0;
var timeLeft;

//start new quiz and start the timer

var startQuizHandler = function(){
    countDown(); 
    startScreenEl.style.display = "none";
    questionsEl.style.display = "block";
    
    nextQuestion();
}
var countDown = function(){
    timeLeft = 120;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function(){
        if(timeLeft>0){
            timerEl.textContent = ": " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0){
            timerEl.textContent =" is Up! Let's see how you did.";
            clearInterval(timeInterval);
            endQuiz();
        }

    },1000);  
}

//next question function
var nextQuestion =function(){
    questionTitleEl.textContent = questionInfo[questionIndex].question;
    console.log(questionInfo[0].question);
    choice0El.textContent = questionInfo[questionIndex].choices[0];
    console.log(questionInfo[0].choices[0]);
    choice1El.textContent = questionInfo[questionIndex].choices[1];
    choice2El.textContent = questionInfo[questionIndex].choices[2];
    choice3El.textContent = questionInfo[questionIndex].choices[3];
};
var checkAnswer =function (userAnswer) {
    resultEl.style.display = "block";
    console.log(resultEl);
    console.log(resultEl.style.display);
    console.log(questionInfo[0].answer);
    console.log(questionInfo[0].choices[userAnswer]);
    if(questionInfo[0].answer === questionInfo[0].choices[userAnswer]) {
        resultEl.textContent = "Correct!";}
    // } else {
    //     //wrong answer. Deduction 10 second from timer;
    //     timeLeft -=10;
    //     answerEl.textContent = "Wrong! The correct answer is " + questionInfo[questionIndex].answer+ " .";
    // }
}

//end game function
//var endQuiz=function(){};
//set timer off 
startQuizEl.addEventListener("click",startQuizHandler);
// choice0El.addEventListener("click",checkAnswer(0));
// choice1El.addEventListener("click",checkAnswer(1));
// choice2El.addEventListener("click",checkAnswer(2));
choice3El.addEventListener("click",checkAnswer(3));
