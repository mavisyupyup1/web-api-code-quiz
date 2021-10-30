//enter questions array
var questionInfo = [
    {
    question:"Inside which HTML element do we put the JavaScript?",
    choices:["a.<javascript>","b.<script>","c.<js>","d.all of the above"],
    answer: "b.<script>"
    },
    {
    question:"Which of these values is NOT considered false?",
    choices:["a.0","b.\"0\"","c.null","d.\"\""],
    answer: "b.\"0\""
    },
    {
    question:"Which of the following is true about typeof operator in JavaScript?",
    choices:["a.The typeof is a unary operator that is placed before its single operand, which can be of any type.","b.Its value is a string indicating the data type of the operand.","c.Both of the above.","d. None of the above."],
    answer: "c.Both of the above."
    },
    {
    question:" How can you get the type of arguments passed to a function?",
    choices:["a.using typeof operator","b.using getType function","c.Both of the above.","d. None of the above."],
    answer: "a.using typeof operator"
    },
    {
    question:"Which built-in method calls a function for each element in the array?",
    choices:["a.while()","b.loop()","c.forEach()","d. None of the above."],
    answer: "c.forEach()"
    },
    {
    question:"Which of the following function of Number object returns the number's value?",
    choices:["a.toString()","b.valueOf()","c.toLocaleString()","d.toPrecision()"],
    answer: "b.valueOf()"
    },
    {
    question:"Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
    choices:["a.lastIndexOf()","b.search()","c. substr()","d.indexOf()"],
    answer: "a.lastIndexOf()"
    },
    {
    question:"Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
    choices:["a.push()","b.join()","c.pop()","d.map()"],
    answer: "d.map()"
    },   
    {
    question:"What When a user views a page containing a JavaScript program, which machine actually executes the script? are variables used for in JavaScript Programs?",
    choices:["a.The User's machine running a Web browser","b. The Web server","c.A central machine deep within Netscape's corporate offices","d.None of the above"],
    answer:"a.The User's machine running a Web browser"
    },
    {
    question:"Which is the correct way to write a JavaScript array?",
    choices:["a.var txt = new Array(1:\"tim\",2:\"kim\",3:\"jim\")","b. var txt = new Array:1=(\"tim\")2=(\"kim\")3=(\"jim\")","c.var txt = new Array(\"tim\",\"kim\",\"jim\")","d. var txt = new Array=\"tim\",\"kim\",\"jim\""],
    answer: "c.var txt = new Array(\"tim\",\"kim\",\"jim\")"
    }

];

var startQuizEl = document.getElementById("start");
var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var questionsEl=document.getElementById("questions");
var questionTitleEl=document.getElementById("question-title");
var choice0El = document.getElementById("choice0");
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var resultEl = document.getElementById("result");
var endQuizEl = document.getElementById("end-screen");
var timeLeftEl = document.getElementById("time-left");
var submitEl = document.getElementById("submit");
var highScoreEl = document.getElementById("high-score");
var goBackEl = document.getElementById("go-back");
var initialsEl = document.getElementById("initials");
var listOfHighScoreEl = document.getElementById("list-of-scores");
var scoresClearedEl = document.getElementById("scores-cleared");
var clearScoreBtn = document.getElementById("clear-score");
var timeLeft;
var finalScore = document.getElementById("time-left");
var viewHighScoreBtn = document.getElementById("view-high-scores")
//intro screen{
var introScreen =function(){
    startScreenEl.style.display ="block";
    questionsEl.style.display ="none";
    highScoreEl.style.display="none";
    viewHighScoreBtn.style.display="block";
}
//start new quiz and start the timer

var startQuizHandler = function(){
    questionIndex=0;
    timerEl.style.display="block";
    startScreenEl.style.display = "none";
    questionsEl.style.display = "block";
    viewHighScoreBtn.style.display="block";
    countDown(); 
    nextQuestion();

}
var countDown = function(){
    timeLeft = 150;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function(){
        if(timeLeft>0){
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } 
        if (timeLeft === 0 && questionIndex <= questionInfo.length-1){
            alert("Time is up! Let's see how you did.")
            clearInterval(timeInterval);
            endQuiz();
        }
    },1000);  
}
var questionIndex = 0;
//next question function
var nextQuestion =function(){
    questionTitleEl.textContent = questionInfo[questionIndex].question;
    choice0El.textContent = questionInfo[questionIndex].choices[0];
    choice1El.textContent = questionInfo[questionIndex].choices[1];
    choice2El.textContent = questionInfo[questionIndex].choices[2];
    choice3El.textContent = questionInfo[questionIndex].choices[3];
   
};
function checkAnswer (userAnswer) {
    resultEl.style.display = "block";
    if(questionInfo[questionIndex].answer === questionInfo[questionIndex].choices[userAnswer]){
        resultEl.textContent = "Correct!";

    } else {
     //wrong answer. Deduction 10 second from timer;
        timeLeft -=10;
        resultEl.textContent = "Wrong! The correct answer is " + questionInfo[questionIndex].answer+ " .";
    }  

    questionIndex++;
    if (questionIndex<questionInfo.length) {
        nextQuestion();
    } else {
        endQuiz();
    }
};
function chooseA() {checkAnswer(0)};
function chooseB() {checkAnswer(1)};
function chooseC() {checkAnswer(2)};
function chooseD() {checkAnswer(3)};

//end game function
var endQuiz=function(){
    questionsEl.style.display = "none";
    resultEl.style.display = "none";
    endQuizEl.style.display="block";
    timerEl.style.display="none";
    if (timeLeft>=0){finalScore = timeLeft;
    }else{finalScore = 0}
    timeLeftEl.textContent = finalScore;
    console.log(finalScore);
};
var storeHighScore = function (event) {
    event.preventDefault();

    if(!initialsEl){
        alert("Please enter your initials!");
        return;
    }
    endQuizEl.style.display="none";
    highScoreEl.style.display="block";
    listOfHighScoreEl.style.display="block"
    scoresClearedEl.style.display="none";
//store score in local storage
    var savedHighScores = localStorage.getItem("high scores");
    // var highScoresArray;
    var scoresArray=[];
    if(!savedHighScores){
       scoresArray=[]
    }else{
        scoresArray=JSON.parse(savedHighScores);
   }
    // highScoresArray = JSON.parse(savedHighScore);
    var myScore ={
        initials: initialsEl.value,
        score: finalScore
    };
    scoresArray.push(myScore);
  //stringify array to store in local storage
    localStorage.setItem("high scores", JSON.stringify(scoresArray));
//reset initials input to be empty for next user
initialsEl.value = "";
showHighScore();
}
var showHighScore = function(){
    timerEl.style.display="none";
    startScreenEl.style.display = "none";
    questionsEl.style.display = "none";
    highScoreEl.style.display="block";
    listOfHighScoreEl.style.display="block";
    scoresClearedEl.style.display="none";
    viewHighScoreBtn.style.display="none";
    var savedHighScores = JSON.parse(localStorage.getItem("high scores"));
    for (var i=0; i<savedHighScores.length;i++){
    var eachHighScore = document.getElementById("each-score");
    eachHighScore.innerHTML += savedHighScores[i].initials + ": " + savedHighScores[i].score + "<br/>";
    listOfHighScoreEl.appendChild(eachHighScore);   
}

}
var clearHighScores =function(){
    listOfHighScoreEl.style.display="none"
    scoresClearedEl.style.display="block";
    localStorage.removeItem("high scores");
    scoresClearedEl.innerHTML="High Scores Cleared!"
}
//set timer off 
startQuizEl.addEventListener("click",startQuizHandler);
choice0El.addEventListener("click",chooseA);
choice1El.addEventListener("click",chooseB);
choice2El.addEventListener("click",chooseC);
choice3El.addEventListener("click",chooseD);
submitEl.addEventListener("click",storeHighScore);
goBackEl.addEventListener("click",introScreen);
clearScoreBtn.addEventListener("click",clearHighScores);
viewHighScoreBtn.addEventListener("click",showHighScore)