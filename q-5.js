// Prompt the user to enter a number
const userInput = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (userInput % 3 === 0) {
    console.log(userInput + " is divisible by 3.");
} else {
    console.log(userInput + " is not divisible by 3.");
}
