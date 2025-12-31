// The Word Counter Application

// The following code counts the number of words in a text area input field and displays the count in real-time as the user types. It also includes a button to clear the text area and reset the word count.

// I used querySelector to select the CSS classes and IDs in the HTML file
const textArea = document.querySelector('#textArea');
// const countButton = document.querySelector('#countButton'); I didn't want a button counter.
const clearButton = document.getElementById('clearButton');
const wordCount = document.querySelector('#wordCount');
const charsCount = document.querySelector('#charsCount');//Displays the number of characters counted in document.
// const sentenceCount = document.querySelector('#sentenceCount');
   


// trim() method removes whitespace from both ends of a string (or word).
// split(/\s+/) method splits a string into an array of substrings, and returns the new array.
// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// length property returns the length of a string or the number of elements in an array.

let words = textArea.value;
function countWords(words) {//A function to count words in a string.
  
    //filter() allows word/characters count to start only when something is typed in textarea.
  
    return words.trim().split(/\s+/).filter(words => words.length > 0).length;
    
  // return words.trim().split(" ").length;//counts words excluding spaces (.trim()) in the words in words variable.


  }



function update() {
    wordCount.innerText = "Words: " + countWords(textArea.value);
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



countWords();

