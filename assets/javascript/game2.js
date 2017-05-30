var score = 0;
var win = 0;
var lose = 0;
var randomNumber = [Math.floor(Math.random()*(120-19))+19];
var randomNumbervalue = parseInt(randomNumber);
var winValue = parseInt(win);
var loseValue = parseInt(lose);
var scoreValue = parseInt(score);


var crystal = {diamond : [Math.floor(Math.random()*(12-1))+1],
				emerald : [Math.floor(Math.random()*(12-1))+1],
               ruby: [Math.floor(Math.random()*(12-1))+1],
               sapphire: [Math.floor(Math.random()*(12-1))+1],    
             };

var diamondValue = parseInt(crystal.diamond);
var emeraldValue = parseInt(crystal.emerald);
var rubyValue = parseInt(crystal.ruby);
var sapphireValue = parseInt(crystal.sapphire);

console.log(crystal.diamond);
console.log(crystal.emerald);
console.log(crystal.ruby);
console.log(crystal.sapphire);





$("#randomnumber").html(randomNumbervalue); //randomnumber generated that the player tries to match
$("#winbox").html(win);
$("#losebox").html(lose);
$("#score").html(score);

$(document).ready(function(){

$("#diamond").click(function(){

	var scoreValue = parseInt(score);
	// var diamondValue = parseInt(crystal.diamond);
	score = scoreValue + diamondValue;
	console.log(score);
	$("#score").html(score);

	if(score > randomNumbervalue){
	lose = loseValue+=1;
	console.log(lose);
	$("#losebox").html(lose);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
	
	}


    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
	}
});



$("#emerald").click(function(){

	var scoreValue = parseInt(score);
	score = scoreValue + emeraldValue;
	console.log(score);
	$("#score").html(score);

	if(score > randomNumbervalue){
	lose = loseValue+=1;
	console.log(lose);
	$("#losebox").html(lose);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
    }




    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);

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
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
    }



    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
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
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);




    }
    if(score === randomNumbervalue){
	win = winValue+=1;
	console.log(win);
	$("#winbox").html(win);
	score = 0;
	scoreValue = parseInt(score);
	console.log(scoreValue);
	$("#score").html(score);
	randomNumbervalue = [Math.floor(Math.random()*(120-19))+19];
	randomNumbervalue = parseInt(randomNumbervalue);
	$("#randomnumber").html(randomNumbervalue);
	diamondValue = [Math.floor(Math.random()*(12-1))+1];
	diamondValue = parseInt(diamondValue);
	console.log([diamondValue]);
	emeraldValue = [Math.floor(Math.random()*(12-1))+1];
	emeraldValue = parseInt(emeraldValue);
	console.log([emeraldValue]);
	rubyValue = [Math.floor(Math.random()*(12-1))+1];
	rubyValue = parseInt(rubyValue);
	console.log([rubyValue]);
	sapphireValue = [Math.floor(Math.random()*(12-1))+1];
	sapphireValue = parseInt(sapphireValue);
	console.log([sapphireValue]);
    }

});



});

















