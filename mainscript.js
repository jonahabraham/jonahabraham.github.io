var list = ["we shall see",
			"yes" ,
			"no" ,
			"maybe" ,
			"probably not" ,
			"try again later" ,
			"doubtful" ,
			"ask again" ,
			"as i see it yes" ,
			"signs point to yes"];

function randomNumber () {
	return Math.floor(Math.random() * 10);
}
function testJs(){
	alert("test!");
}

function shakeeightball() {
	document.getElementById("eightball").src="eightball2.jpg";
	//alert("we shall see") ;

	//change paragraph to eightball text
	document.getElementById("results").innerHTML=list[randomNumber()];
	
	alert(randomNumber()) ;
}
