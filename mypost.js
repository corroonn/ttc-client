function saveDeviceID() {
// Retrieve data to send it
	var enteredNumber = document.getElementById("deviceID").value;
	var streetcarForAPI = localStorage.getItem("streetcarToStore");
	var stopForAPI = localStorage.getItem("stopToStore");

	$.ajax({
  		type: "POST",
  		url: 'https://nameless-tundra-18596.herokuapp.com/sync',
  		data: {
  			id: enteredNumber,
  			route: streetcarForAPI,
  			stop: stopForAPI
  		},
 		success: function(){
 			console.log('You did it.')
 		},
  		dataType: 'json'
	});

	console.log("Sync device number " + enteredNumber + " to data for the " + streetcarForAPI + " " + stopForAPI + " stop.");
};

