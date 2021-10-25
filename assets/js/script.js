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
    },

];

console.log(questionInfo[0].question);

var startQuizEl = document.getElementById("start");
var timerEl = document.getElementById("time");
var questionsEl=document.getElementById("questions");
var choice0El = document.getElementById("choice0");
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var answerEl = document.querySelector(".result");
var codeQuizHandler = function(){
    questionsEl.textContent= questionInfo[0].question;
};
var countDownHandler = function(){
    var timeLeft = 120;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function(){
        if(timeLeft>0){
            timerEl.textContent = ": " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0){
            timerEl.textContent ="is Up!";
            clearInterval(timeInterval);
        }

    },1000);
}

//set timer off 
startQuizEl.addEventListener("click",countDownHandler);
startQuizEl.addEventListener("click",codeQuizHandler);