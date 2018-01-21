window.addEventListener("load", function(){


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://nameless-tundra-18596.herokuapp.com/routes/');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        var retrievedObject = Object.keys(ourData.routes);
        var objectLength = retrievedObject.length;
        console.log(retrievedObject);
        console.log(objectLength);

    var options = '';

    for(var i = 0; i < objectLength; i++) {
    options += '<option value="'+ retrievedObject[i] +'" />';

    document.getElementById('route_list').innerHTML = options;
        };
                console.log(document.getElementById('route_list'));
    };

    ourRequest.send();

});


function validateForm(){

    // Get the input element
    var input = document.getElementById('route');
    // Get the datalist
    var route_list = document.getElementById('route_list');


    // If we find the input inside our list, we submit the form
    for (var element of route_list.children) {
        if(element.value == input.value) {
            return true;
        }
    }

    // we send an error message
    alert("name input is invalid")
    return false;
};

function validateStopForm(){

    // Get the input element
    var input = document.getElementById('stop');
    // Get the datalist
    var route_list = document.getElementById('stop_list');


    // If we find the input inside our list, we submit the form
    for (var element of route_list.children) {
        if(element.value == input.value) {
            return true;
        }
    }

    // we send an error message
    alert("name input is invalid")
    return false;
};