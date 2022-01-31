var questions=[
    {
        quesion: "Inside which HTML element do we put the JavaScript tag?",
        choices: ["<script>", "<link>", "<head>", "<section>"],
        answer: "<script>"

    },
    {
        quesion: "Inside which HTML element do we put the JavaScript tag?",
        choices: ["<script>", "<link>", "<head>", "<section>"],
        answer: "<script>"

    }
];

questions[0] =   {
    quesion: "Inside which HTML element do we put the JavaScript tag?",
    choices: ["<script>", "<link>", "<head>", "<section>"],
    answer: "<script>"
},
questions[0].question
questions[0].answer
questions[0].choices[0]
questions[0].choices[1]

var correctAnswers = 0
var wrongAnswers = 0
var timeInterval = 15

                    0       1       2 
var myArray = ["first", "second", "three"]
myArray.length
3
myArray[0] = "first"
myArray[1] = "second"


function displayQuestion(){
    for (var i=0; i < questions.length; i++) {
        //creating divs
        //document.querySelector("div").appendingChild("newDiv")
        if (questions[i].answer === userAnswer) {
                correctAnswers++

        } else {
            wrongAnswers++
            timeInterval--
        }
    }

    function timeIntervalFunction() {
        if (timeInterval === 0) {
            stopGame()
        }
    }

    // create-append create html elements dynamically and appendChild them to a parent div
    // how to access hard coded html "doucment.querySelector(".class") document.querySelector("#id")
    // time interval - keep track of time and questions throughout the app - 15 second stopping time
    // local storage - saving the high score
    
}


