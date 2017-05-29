	
var score = 0;
var win = 0;
var lose = 0;
var randomNumber = [Math.floor(Math.random()*(120-19))+19];

var crystal = {diamond : [Math.floor(Math.random()*(12-1))+1],
				emerald : [Math.floor(Math.random()*(12-1))+1],
               ruby: [Math.floor(Math.random()*(12-1))+1],
               sapphire: [Math.floor(Math.random()*(12-1))+1],    
             };

console.log(crystal.diamond);
console.log(crystal.emerald);
console.log(crystal.ruby);
console.log(crystal.sapphire);





$("#randomnumber").html(randomNumber); //randomnumber generated that the player tries to match
$("#winbox").html(win);
$("#losebox").html(lose);
$("#score").html(score);

$(document).ready(function(){
	$("#diamond").click(function(){

	var scoreValue = parseInt(score);
	var diamondValue = parseInt(crystal.diamond);
	score = scoreValue + diamondValue;
	console.log(score);
	$("#score").html(score);
	});

});


$(document).ready(function(){
	$("#emerald").click(function(){

	var scoreValue = parseInt(score);
	var emeraldValue = parseInt(crystal.emerald);
	score = scoreValue + emeraldValue;
	console.log(score);
	$("#score").html(score);
	});

});

$(document).ready(function(){
	$("#ruby").click(function(){

	var scoreValue = parseInt(score);
	var rubyValue = parseInt(crystal.ruby);
	score = scoreValue + rubyValue;
	console.log(score);
	$("#score").html(score);
	});

});

$(document).ready(function(){
	$("#sapphire").click(function(){

	var scoreValue = parseInt(score);
	var sapphireValue = parseInt(crystal.sapphire);
	score = scoreValue + sapphireValue;
	console.log(score);
	$("#score").html(score);
	});

});


if(score == randomNumber){
	win++;
	$("#winbox").html(win);
}
if(score > randomNumber){
	lose++;
	$("#losebox").html(lose);
}






















