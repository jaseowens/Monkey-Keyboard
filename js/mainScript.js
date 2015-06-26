var currentClicks; //global var, used to update DB.
var currentCorrect; //global var, used to update DB.
var sentence = []; //global array used to store generated sentence. 

function update(clickAmount, correctAmount){

	document.getElementById("clickCounter").innerHTML = clickAmount; //Displays click amount
	document.getElementById("correctCounter").innerHTML = correctAmount; //Displays click amount

	currentClicks = clickAmount; //sets new global var to equal current click amount -> now called clickAmount
	currentCorrect = correctAmount;

}

function showSentence(){

	document.getElementById("generatedSentence").innerHTML = sentence.join(" ");

	if(sentence.join(" ") == "The quick brown fox jumps over the lazy dog."){
		updateCorrects(correctAmount);
		alert("Congrats, you generated teh correct sentence, thats a 1/16,777,216 chance of happening!")
	}
}

function generate(){

	var word;
	for (i = 0; i < 9; i++){
		var wordSelector = Math.floor((Math.random() * 9) + 1);
		console.log(wordSelector)
		switch (wordSelector){
			case 1:
				word = "The";
				break;
			case 2:
				word = "quick";
				break;
			case 3:
				word = "brown";
				break;
			case 4:
				word = "fox";
				break;
			case 5:
				word = "jumps";
				break;
			case 6:
				word = "over";
				break;
			case 7:
				word = "the";
				break;
			case 8:
				word = "lazy";
				break;
			case 9:
				word = "dog.";
				break;
			default:
				word = "Uhoh, thats an error!";
		}
		sentence[i] = word;
	}
	showSentence();
	console.log(currentClicks);
	updateClicks(currentClicks);

}




