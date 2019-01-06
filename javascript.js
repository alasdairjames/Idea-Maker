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
  outputList = document.createElement = "ul";
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
	loadNewCombination();
}

//using jquery to detect enter press within the input box


//closes the modal
function finishCombinations() {
modal.style.display = "none";
document.write(outputList);
}

//
