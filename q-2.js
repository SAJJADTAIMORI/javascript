// Prompt the user to enter a number
const userInput = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(userInput)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Check if the number is even or odd
    if (userInput % 2 === 0) {
        console.log(userInput + " is an even number.");
    } else {
        console.log(userInput + " is an odd number.");
    }
}
