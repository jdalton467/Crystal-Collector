var score = 0; //score variable
var win = 0; //amount of wins
var lose = 0; //amount of losses
var randomNumber = [Math.floor(Math.random()*(120-19))+19]; //random number generated from 20 to 120
var randomNumbervalue = parseInt(randomNumber);
var winValue = parseInt(win); //parsed win value
var loseValue = parseInt(lose); //parsed loss value
var scoreValue = parseInt(score); //parsed scorevalue


//object named crystal that contains for crystal properties
var crystal = {diamond : [Math.floor(Math.random()*(12-1))+1], //each
				emerald : [Math.floor(Math.random()*(12-1))+1],//crystal
               ruby: [Math.floor(Math.random()*(12-1))+1], //is assigned 
               sapphire: [Math.floor(Math.random()*(12-1))+1],  //a random value between 1 and 12  
             };

var diamondValue = parseInt(crystal.diamond); //parse all of the random values generated for the crystals
var emeraldValue = parseInt(crystal.emerald);
var rubyValue = parseInt(crystal.ruby);
var sapphireValue = parseInt(crystal.sapphire);

console.log(crystal.diamond);//logging to the console for testing purposes
console.log(crystal.emerald);
console.log(crystal.ruby);
console.log(crystal.sapphire);


// reset function that will bring the score down to 0 and reset the values of the crystals once a game
//is lost or won
var reset = function(){
	score = 0; //reset score back to 0
	scoreValue = parseInt(score); //parse it
	console.log(scoreValue);
	$("#score").html(score); //render the reset score on the page
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19]; //randomize the random number value 
	randomNumbervalue = parseInt(randomNumbervalue); //parse
	$("#randomnumber").html(randomNumbervalue); //render in new random number onto the page
	diamondValue = [Math.floor(Math.random()*(12-1))+1]; //reset diamond value
	diamondValue = parseInt(diamondValue); //parse
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1]; //reset emerald value 
	emeraldValue = parseInt(emeraldValue); //parse
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1]; //reset ruby value
	rubyValue = parseInt(rubyValue); // parse
	console.log([rubyValue]); 
	sapphireValue = [Math.floor(Math.random()*(12-1))+1]; //reset sapphire value and log to the console
	sapphireValue = parseInt(sapphireValue); //parse
	console.log([sapphireValue]);
}





$("#randomnumber").html(randomNumbervalue); //randomnumber generated that the player tries to match
$("#winbox").html(win); //render the wins, which start out 0 to the page
$("#losebox").html(lose); //same for losses
$("#score").html(score); //same for scores









$(document).ready(function(){ //when document loads

$("#diamond").click(function(){ //upon clicking the diamond image

	var scoreValue = parseInt(score);
	// var diamondValue = parseInt(crystal.diamond);
	score = scoreValue + diamondValue; //increase the score by how much the diamond is valued
	console.log(score);
	$("#score").html(score); //update the score on the page

	if(score > randomNumbervalue){ //if the score is greater than the random number on the screen
	lose = loseValue+=1; //then you lose and the losses tracker will increment by one
	console.log(lose);
	$("#losebox").html(lose); //display loss in the loss section of the page
	reset(); //call the reset function to start new game
	
	}


    if(score === randomNumbervalue){ //if the score is equal to that of the random number, then you win
	win = winValue+=1; //increase win by one 
	console.log(win);
	$("#winbox").html(win); //diplay on the win section
	reset(); //call the reset function to start a new game
	}
});

////////////////////Everything mentioned above for diamonds, goes for  the other crystals below///////////////////////////

$("#emerald").click(function(){

	var scoreValue = parseInt(score);
	score = scoreValue + emeraldValue;
	console.log(score);
	$("#score").html(score);

	if(score > randomNumbervalue){
	lose = loseValue+=1;
	console.log(lose);
	$("#losebox").html(lose);
	reset();
    }




    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	reset();
	
    }

});



  
$("#ruby").click(function(){

	var scoreValue = parseInt(score);
	score = scoreValue + rubyValue;
	console.log(score);
	$("#score").html(score);

	if(score > randomNumbervalue){
	lose = loseValue+=1;
	console.log(lose);
	$("#losebox").html(lose);
	reset();
    }



    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	reset();
    }

});




$("#sapphire").click(function(){

	var scoreValue = parseInt(score);
	score = scoreValue + sapphireValue;
	console.log(score);
	$("#score").html(score);
	
	if(score > randomNumbervalue){
	lose = loseValue+=1;
	console.log(lose);
	$("#losebox").html(lose);
	reset();

	}


    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	reset();
    }

});



});

















