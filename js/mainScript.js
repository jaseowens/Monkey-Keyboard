var currentClicks; //global var, used to update DB.
var sentence = []; //global array used to store generated sentence. 

function update(clickAmount){

	document.getElementById("clickCounter").innerHTML = clickAmount; //Displays click amount

	currentClicks = clickAmount; //sets new global var to equal current click amount -> now called clickAmount

}

function showSentence(){

	document.getElementById("generatedSentence").innerHTML = sentence;

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
	updateClicks(currentClicks);

}




