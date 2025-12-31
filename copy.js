// The Word Counter Application

// The following code counts the number of words in a text area input field and displays the count in real-time as the user types. It also includes a button to clear the text area and reset the word count.

// I used querySelector to select the CSS classes and IDs in the HTML file
// const countButton = document.querySelector('#countButton'); I didn't want a button counter.
// const sentenceCount = document.querySelector('#sentenceCount');

const textArea = document.querySelector('#textArea');//Area where words are typed.

const wordCount = document.querySelector('#wordCount');//Displays the number of words counted in document.

const charsCount = document.querySelector('#charsCount');//Displays the number of characters counted in document.

const readTime = document.getElementById('readTime');//Displays estimated reading time based on word count.

const clearButton = document.getElementById('clearButton');//Button clears all data from the text area.


//   Function for counting characters & words.

textArea.addEventListener("input", function (e) {
  let countValues = event.target.value;

  wordCount.innerText = "Words: " + getwordCount(countValues);
  charsCount.innerText = "Characters: " + countValues.length;

  //Calculates estimated read time based on 200 WPM.
  //Math.ceil rounds up to nearest whole number.
  readTime.innerText = "Estimated Read Time: " + Math.ceil(getwordCount(countValues) / 200) + " min";

});

//************************************************************************************************************
/*function getwordCount(textArea) {
return textArea.length>0 ? textArea.split(/\s+/).length : 0;
// Alternative: return textArea.length>0 ? textArea.split(/\s+/).length : 0; (Doesn't work)
}*/

//************************************************************************************************************

// textArea.trim() - Removes leading and trailing whitespace
// .split(/\s+/) - Splits the text by one or more spaces
// .filter(word => word.length > 0) - Filters out any empty strings (which would be counted as "words" if there are multiple spaces)
// .length - Counts only the actual words

function getwordCount(textArea) {

  // Trim whitespace and split by spaces, then filter out empty strings using ternary operator
  return textArea.trim().length > 0 ? textArea.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
}


function getcharsCount(textArea) {
  return textArea.length;
}


function getreadTime(textArea) {
  let WPM = 200;
  return Math.ceil(getwordCount(textArea) / WPM);
}



//Function updates textArea when input is detected or modified.
function update(textArea) {
  wordCount.innerText = "Words: " + getwordCount(textArea.value);
  charsCount.innerText = "Characters: " + textArea.value.length;
}

// Checks if the input text is empty then displays a message. If it is not empty, it 
// proceeds to count words and characters. (Originally, the counter would start at 1 instead of 0 even when the textarea was empty)
textArea.addEventListener("input", update);
if (textArea.value === '') {
 
 // *********** wordCount.innerHTML = '<p>Please enter some text to count words.</p>';(not necessary with current code)****************

}

update(textArea);

/* DOESN'T WORK AS INTENDED

let currentNumber=0;
let menu = document.getElementById('wordCount');

function clearNumber() {
    textArea.value = '';
    menu.textContent = 'Words:' + 0;
}

 clearButton.addEventListener('click', () => {

   textArea.value = '';
    
// clearButton.addEventListener('click', clearNumber);

 });

 countWords();
*/

/*
let currentNumber = 0;
let buttons = document.getElementById('wordCount');
let clearButton = document.getElementById('clearButton'); // Add this - use your actual button ID

function clearNumber() {
    textArea.value = '';
    menu.textContent = 'Words: ' + 0;
    currentNumber = 0; // Reset the counter variable too
}

clearButton.addEventListener('click', clearNumber);

countWords();*/


//Clears text area and resets counts to 0.
let currentNumber = 0;
function clearNumber() {
  textArea.value = '';
  wordCount.innerText = 'Words: 0';
  charsCount.innerText = 'Characters: 0';
  readTime.innerText = 'Read Time: 0 min';
  currentNumber = 0;

}


clearButton.addEventListener('click', clearNumber);