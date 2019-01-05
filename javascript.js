console.log("hello");

var dataset1 = document.querySelector(".dataset1");
var dataset2 = document.querySelector(".dataset2");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var addBtn1 = document.querySelector(".addBtn1");
var randomizeBtn = document.querySelector(".randomizeBtn");


//functino to which we pass the functions 

// add a list item to the first dataset 
function addListItem(item, dataset) {
	var listItem = document.createElement("li");
	listItem.textContent = item;
	dataset.appendChild(listItem)
}

// a function whose paramaters are the input and dataset
function keyPress(input, dataset) {
		var boxInput = input.value;
		console.log(boxInput);
		//check if user has entered text
		if (boxInput === "") {
			alert("Please write text!");
		//if they have, add it to the list by calling function
		} else {
			addListItem(boxInput, dataset);
			//clear the box
			input.value = "";
		}
}

//using jquery to detect enter press within the input box
function inputPress(input, dataset) {
	$(input).on("keypress", function(e) {
	if(e.which == 13) {
		keyPress(input,dataset);
}})};

inputPress(input1,dataset1);
inputPress(input2,dataset2);
