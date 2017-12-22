//Start the full function, and declare the variables we'll be using within.

function talktoAPI(){
	var waitTime = document.getElementById("streetcarWaitTime");
	var response = document.getElementById("streetcarWaitTime");
	var addthe = document.getElementById("the");
	var input = document.getElementById("enterstop").value;

//validate form
  	if (input == "") {
    alert("You must enter a stop name.");
    return false;}

//This GETs the data from the API in JSON format.
//I need to figure out how to call specific details based on input.


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://nameless-tundra-18596.herokuapp.com/schedule' + '?station=' + input);
ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	console.log("The database is reading some streetcar info: ")
	console.log(ourData);
	console.log("Will arrive in: " + ourData.time);

//Set a data point for the wait time to display	
	var currentWaitTime = (ourData.next_bus);

//Pass that data to the functions
	getWaitTime(currentWaitTime);
	};
ourRequest.send();

//This returns the wait time.

	function getWaitTime(data){
    	waitTime.innerHTML = " streetcar arrives in " + data + " minutes.";
    	addthe.innerHTML = "The ";
    	console.log("I logged the output");
}

//Call the append and get functions as part of the parent function.

	getWaitTime();

};