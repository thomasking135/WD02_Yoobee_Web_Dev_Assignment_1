/*Add function */

// Function checks to see IF input added
// IF input is NO, a prompt appears
// IF input = YES, item gets appended to the list
// The text input box is cleared for the next item


function pushData() {
	// The function checks to see IF a value has been input
    inputText = " ";
	let view = document.getElementById("view");
	let newTd = document.createElement("li");
	var inputText = document.getElementById("inputText").value;
	var x = document.forms["Form"]["inputText"].value;
	// This IF code checks for an input and alerts the user if none has been entered
	if (x == 0) {
	  alert("You haven't added a wish 😰");
	  document.getElementById('name_error').innerHTML = 'Wish must be filled out';
	  console.log("Unsuccessful!");
	  return false;
	  ;
	}
	// An input that is TRUE gets appended to the list
	var node = document.createTextNode(inputText);
	newTd.appendChild(node);
	view.appendChild(newTd);
	// The input is reset for the next entry
    document.getElementById("Form").reset();
	document.getElementById('name_error').innerHTML = '';
    console.log("Success!");
}

/* Refresh Page */

//This function clears refreshes the page
function refreshList(){
	document.location.reload();
	console.log("Your wish is my command!");
}
