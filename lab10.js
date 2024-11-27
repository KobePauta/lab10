//Question 1
function greetUser(name) {
    const output = document.getElementById("output");
    output.innerText = `Hello, ${name}!`;
}

function handleGreet() {
    const name = document.getElementById("Q1").value;
    greetUser(name);
}

//Question 2
function changeMessage() {
    const message = document.getElementById("message");
    message.innerText = "Hello, World!";
}

//Question 3
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const sum = num1 + num2;
    const result = document.getElementById("result");
    result.innerText = `The sum is: ${sum}`;
}

//Question 4
function updateTitle() {
    const newTitle = document.getElementById("titleInput").value;

    const titleElement = document.getElementById("title");
    titleElement.innerText = newTitle;
}

//Question 5
function concatenateStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;

    const combinedResult = string1 + " " + string2;
    const combinedTextElement = document.getElementById("combinedText");
    combinedTextElement.innerText = combinedResult;
}


//Question 6
const button = document.getElementById("bgButton");
const colorBox = document.getElementById("colorBox");

button.addEventListener("click", function() {
    colorBox.style.backgroundColor = "blue";
});
