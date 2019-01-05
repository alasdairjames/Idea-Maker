console.log("hello");

var dataset1 = document.querySelector(".dataset1");
var dataset2 = document.querySelector(".dataset2");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var addBtn1 = document.querySelector(".addBtn1");
var randomizeBtn = document.querySelector(".randomizeBtn");

// add a list item to the first dataset 
function addListItem(item) {
	var listItem = document.createElement("li");
	listItem.textContent = item;
	dataset1.appendChild(listItem)
}

// call the add item function
//using jquery to detect enter press within the input box
$(input1).on("keypress", function(e){
	if(e.which == 13) {
		var testInput = input1.value;
		console.log(testInput);
		//check if user has entered text
		if (testInput === "") {
			alert("Please write text!");
		//if they have, add it to the list by calling function
		} else {
			addListItem(testInput);
			//clear the box
			input1.value = "";
		}
}});

