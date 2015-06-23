var myDataRef = new Firebase('https://monkeykeyboard.firebaseio.com'); //accesses firebase db

myDataRef.on("value", function(snapshot) {

	var initClicks = snapshot.val(); // Is the initial amount of clicks on DB
	var returnedClicks = initClicks.clicks; //sets returned value from DB to display click amount

  	update(returnedClicks); //Calls function update and passes it init value of clicks

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code); //error message
});


function updateClicks(newClicks){

	newClicks += 1;
	myDataRef.set({"clicks":  newClicks})

}
