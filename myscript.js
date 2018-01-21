function hideAll(){
document.getElementById("extraThe").style.display = "none";
document.getElementById("extraAt").style.display = "none";
document.getElementById("stop").style.display = "none";
document.getElementById("extraArrive").style.display = "none";
document.getElementById("waitTimes").style.display = "none";
document.getElementById("stop").value = "";
};

//Input a Route and get a Stop

function enterRoute(){
var route = document.getElementById("route").value;

document.getElementById("extraThe").style.display = "inline";
document.getElementById("extraAt").style.display = "inline";
document.getElementById("stop").style.display = "inline";

if (route == "") {
    alert("You must fill out the fields.");
    return false;}

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://nameless-tundra-18596.herokuapp.com/stops?route=' + route);
ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	console.log(ourData);
	localStorage.setItem('savedStops', JSON.stringify(ourData));
	var objectKeys = Object.keys(ourData);
    var stopOptions = '';
	objectKeys.forEach(function(stop){
		console.log(ourData[stop].title);
		stopOptions += '<option value="'+ ourData[stop].title +'" />';
		document.getElementById('stop_list').innerHTML = stopOptions;
	});
//Update the Stops datalist

    console.log(document.getElementById('stop_list'));
	};


ourRequest.send();



};

function getWaitTime(data){

		var waitTimes = document.getElementById("waitTimes");
    	waitTimes.innerHTML = " " + data + " minutes.";

}


//Input a Stop and return the wait times

function enterStop(){

	var enteredStop = document.getElementById("stop").value;
	var enteredRoute = document.getElementById("route").value;
	var stopUniqueId = [];

	var ourData = JSON.parse(localStorage.getItem("savedStops"));
	var objectKeys = Object.keys(ourData);
	objectKeys.forEach(function(stop){
		if(ourData[stop].title == enteredStop){
			stopUniqueId.push(ourData[stop].stopId);
			console.log(ourData[stop].stopId);
		};
	});

	//localStorage.setItem('stopToStore', stopUniqueId);
	//localStorage.setItem('routeToStore', route);

	document.getElementById("extraArrive").style.display = "inline";
	document.getElementById("waitTimes").style.display = "inline";

if (route == "" || stop == "") {
    alert("You must fill out the fields.");
    return false;
};

	stopURL = 'https://nameless-tundra-18596.herokuapp.com/predict?stops=' + stopUniqueId[0];
	if (stopUniqueId.length > 1) {
		for (var i = 1; i < stopUniqueId.length; i++) {
			stopURL = stopURL + '&stops=' + stopUniqueId[i];
		};
	};

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', stopURL);
	ourRequest.onload = function(){
	var returnedTimes = JSON.parse(ourRequest.responseText);
//Log it all
	console.log(returnedTimes);

// Pass that data to the getWaitTime function
	getWaitTime(returnedTimes[0]);

	};


	ourRequest.send();

};