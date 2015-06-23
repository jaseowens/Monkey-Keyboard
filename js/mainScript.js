var currentClicks; //global var, used to update DB.

function update(clickAmount){

	document.getElementById("clickCounter").innerHTML = clickAmount; //Displays click amount

	currentClicks = clickAmount; //sets new global var to equal current click amount -> now called clickAmount

}



