// The Word Counter Application

// The following code counts the number of words in a text area input field and displays the count in real-time as the user types. It also includes a button to clear the text area and reset the word count.

// I used querySelector to select the CSS classes and IDs in the HTML file
// const countButton = document.querySelector('#countButton'); I didn't want a button counter.
// const sentenceCount = document.querySelector('#sentenceCount');
const textArea = document.querySelector('#textArea');//Area where words are typed.

wordCount = document.querySelector('#wordCount');//Displays the number of words counted in document.

charsCount = document.querySelector('#charsCount');//Displays the number of characters counted in document.

const readTime = document.getElementById('#readTime');//Displays estimated reading time based on word count.

clearButton = document.getElementById('clearButton');//Button clears all datat from the text area.

// trim() method removes whitespace from both ends of a string (or word).
// split(/\s+/) method splits a string into an array of substrings, and returns the new array.
// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// length property returns the length of a string or the number of elements in an array.

//   Function for counting characters & words.

textArea.addEventListener("keyup", function(e){
  let countValues = event.target.value;

wordCount.innerText = "Words: " + getwordCount(countValues);
charsCount.innerText = "Characters: " + countValues.length;
readTime.innerText = "Estimated Read Time: " + Math.ceil(getwordCount(countValues) / 200) + " min";

});


function getwordCount(textArea) {
return textArea.length>0 ? textArea.split(/\s+/).length : 0;
// Alternative: return textArea.length>0 ? textArea.split(/\s+/).length : 0;
}

function getcharsCount(textArea) {
    return textArea.length;
}


function getreadTime(textArea) {
let WPM = 200;
return Math.ceil(getwordCount(textArea) / WPM);
}



/*
function update(textArea) {
    wordCount.innerText = "Words: " + countWords(textArea.value);
    charsCount.innerText = "Characters: " + content.length;
}               
    textArea.addEventListener("input", update);        
    if (textArea.value === '') {// Checks if the input text is empty then displays a message. If it is not empty, it proceeds to count words, characters, and sentences. (Originally, the counter would start at 1 instead of 0 even when empty)
        // wordCount.innerHTML = '<p>Please enter some text to count words.</p>';(not necessary with current code)
    
    }   

update();



let currentNumber=0;
let menu = document.getElementById('wordCount');

function clearNumber() {
    textArea.value = '';
    menu.textContent = 'Words:' + 0;
}

 //clearButton.addEventListener('click', () => {

   // textArea.value = '';
    
clearButton.addEventListener('click', clearNumber);



// countWords();
*/