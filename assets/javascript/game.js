	
var score = 0;
var win = 0;
var lose = 0;

var crystal = {diamond : [Math.floor(Math.random()*(12-1))+1],
			   emerald : [Math.floor(Math.random()*(12-1))+1],
               ruby: [Math.floor(Math.random()*(12-1))+1],
               sapphire: [Math.floor(Math.random()*(12-1))+1],    
             };

console.log(crystal.diamond);
console.log(crystal.emerald);
console.log(crystal.ruby);
console.log(crystal.sapphire);





$("#randomnumber").html([Math.floor(Math.random()*(120-19))+19]); //randomnumber generated that the player tries to match
$("#winbox").html(win);
$("#losebox").html(lose);
$("#score").html(score);

$(document).ready(start);

function start() {

	$("#diamond").on("click", function(){
		score = score + crystal.diamond;
		console.log(score);
	});

}


