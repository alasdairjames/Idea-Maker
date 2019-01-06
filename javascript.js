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
var outputList = document.createElement("ul");
var outputListDiv = document.querySelector(".outputListDiv");

///////////////////
//Generic Functions
///////////////////

//click event function 
function elementClick(element, callback) {
	element.addEventListener("click", function(){
		callback();
	});
}

//Input Enter function input=target input field. Callback = function to call. 
//Param 1 & 2 are any parametrs to be passed to the function 
function inputEnterPress(input, callback, param1, param2) {
	$(input).on("keypress", function(e) {
	if(e.which == 13) {
	callback(param1,param2);
}})};

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

inputEnterPress(input1,keyPress, input1, dataset1);
inputEnterPress(input2,keyPress, input2, dataset2);

///////////////////
//Remove from List Function 
///////////////////

function listItemRemove(dataset){
	dataset.addEventListener("click", (event) => {
		var li = event.target;
		$(li).remove();
	});
};
listItemRemove(dataset1);
listItemRemove(dataset2);

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

//buttons for sample and clear
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
	return length;
}

//must return a text only list element from the specified dataset 
function randomize(dataset){
	x=listNumber(dataset);
	x-=1;
	var listItem = dataset.childNodes[x].innerHTML;
	return listItem;	
}

///////////////////
//Modal
///////////////////

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
randomizeBtn.onclick = function() {
  modal.style.display = "block";
  loadNewCombination();
}

///////////////////
//Modal Functionality
///////////////////

//setting variables
var dataItem1 = document.querySelector(".dataItem1");
var dataItem2 = document.querySelector(".dataItem2");
var ideaBox = document.querySelector(".ideaBox");


//loads a new combination
function loadNewCombination() {
	function loadDataItem(dataset, dataItem){
	dataItem.innerHTML = randomize(dataset);
	}
	loadDataItem(dataset1, dataItem1);
	loadDataItem(dataset2, dataItem2);
	ideaBox.select();
	ideaBox.value = "";
}

//goes onto the next combination whilst saving the output
function addToIdeaList(){
	var listItem = document.createElement("li");
	var item = ideaBox.value;
	listItem.innerHTML = item;
	outputList.appendChild(listItem);
	console.log(outputList);
	loadNewCombination();
}

//closes the modal
function finishCombinations() {
modal.style.display = "none";
outputListDiv.appendChild(outputList);

}

///////////////////
//Modal Buttons
///////////////////

var modalSkipBtn = document.querySelector(".modalSkipBtn");
var modalEnterBtn = document.querySelector(".modalEnterBtn");
var modalFinishBtn = document.querySelector(".modalFinishBtn");

//click button functions
elementClick(modalSkipBtn, loadNewCombination);
elementClick(modalEnterBtn, addToIdeaList);
elementClick(modalFinishBtn, finishCombinations);
inputEnterPress(ideaBox, addToIdeaList);