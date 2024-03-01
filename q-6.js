// Prompt the user to enter a character, number, or string
const userInput = prompt("Enter a character, number, or string:");

// Check if the input is a number
if (!isNaN(userInput)) {
    console.log(userInput + " is a number.");
} else {
    // Check if the input is an uppercase letter
    if (userInput === userInput.toUpperCase()) {
        console.log(userInput + " is an uppercase letter.");
    // Check if the input is a lowercase letter
    } else if (userInput === userInput.toLowerCase()) {
        console.log(userInput + " is a lowercase letter.");
    } else {
        console.log("The input contains a combination of letters and/or numbers.");
    }
}
