///////////////////
//Variables
///////////////////

var dataset1 = document.querySelector(".dataset1");
var dataset2 = document.querySelector(".dataset2");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var addBtn1 = document.querySelector(".addBtn1");
var randomizeBtn = document.querySelector(".randomizeBtn");
var sampleDataBtn = document.querySelector(".sampleDataBtn");
var clearDataBtn = document.querySelector(".clearDataBtn");

///////////////////
//Add to Datalist Functions 
///////////////////

// add a list item to the first dataset 
function addListItem(item, dataset) {
	var listItem = document.createElement("li");
	listItem.textContent = item;
	dataset.appendChild(listItem)
}

// a function whose paramaters are the input and dataset
function keyPress(input, dataset) {
		var boxInput = input.value;
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

///////////////////
//Sample/Clear Functions
///////////////////
window.onLoad = sampleDataSet();

//adds a sample list 
function sampleDataSet () {
	dataset1.innerHTML = "<li>Facebook</li><li>Twitter</li><li>Stumbleupon</li><li>Tinder</li><li>Blog</li>";
	dataset2.innerHTML = "<li>Motorcycles</li><li>Habits</li><li>Nomads</li><li>Finance Planning</li>";
}

//clears both lists
function clearDataset () {
	dataset1.innerHTML = "";
	dataset2.innerHTML = "";
}

sampleDataBtn.addEventListener("click", function(){
	sampleDataSet();
})

clearDataBtn.addEventListener("click", function(){
	clearDataset();
})

///////////////////
//Randomize Function
///////////////////

//random number between 1 and x function
function randomNumber(x){
y = Math.random()*x;
y = Math.floor(y)+1;
return y;
}

//function to select random list number
function listNumber(dataset) {
	var length = dataset.childElementCount;
	length = randomNumber(length);
	console.log(length);
}

//must return a text only list element from the specified dataset 
function randomize(dataset){
	x=2;
	var listItem = dataset.childNodes[x].innerHTML;
	console.log(listItem);
}

///////////////////
//
///////////////////

