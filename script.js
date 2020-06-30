$(document).ready(function() {
	magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely","Outlook good" , "Yes", "Signs point to yes", "Reply hazy", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Not in 2020" ];
    $("#answer").hide();
    // define the method
	magic8Ball.askQuestion = function(question) {
        $("#answer").hide();
		 // create a random number
		 var randomNumber = Math.random();
		 // make the random number between 0 and the number of items in your array
		 var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		 // round down the number to be a whole number
		 var randomIndex = Math.floor(randomNumberForListOfAnswers);
		 // use that number to index a random number from the answers array
         var answer = this.listOfAnswers[randomIndex];
         
         $("#answer").text( answer );

		 console.log(question);
		 console.log(answer);
	};
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
        };

        $("#questionButton").click( onClick );
 });

