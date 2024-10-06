const display = document.querySelector('.display');
let expression = "";
let resultDisplayed = false;

// Update the display
function updateDisplay(value) {
    display.innerHTML = value;
}

// Handle number and operator button clicks
function handleButtonClick(value) {
    // If a result was just displayed, and the next input is a number, reset the expression
    if (resultDisplayed && !isNaN(value)) {
        expression = value;  // Start a new expression
        resultDisplayed = false;
    } else if (resultDisplayed && isNaN(value)) {
        // If result is displayed and an operator is pressed, continue with the result
        resultDisplayed = false;
        expression += value;
    } else {
        expression += value;  // Continue building the expression
    }
    updateDisplay(expression);
}

// Handle equal button click using eval()
function handleEqualClick() {
    try {
        // Replace custom operators (×, ÷) with JS-compatible ones
        const sanitizedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(sanitizedExpression);

        // Round result to 2 decimal places if it's a decimal
        result = Number(result.toFixed(2));

        updateDisplay(result);
        expression = String(result);  // Use the result for further calculations
        resultDisplayed = true;  // Flag that result is displayed
    } catch (error) {
        updateDisplay("Error");
        expression = "";
    }
}

// Handle AC button (reset everything)
function handleACClick() {
    expression = "";
    updateDisplay("0");
    resultDisplayed = false;
}

// Add event listeners for number and operator buttons
document.querySelectorAll(".num, .sign").forEach(button => {
    button.addEventListener("click", event => handleButtonClick(event.target.innerHTML));
});

// Add event listener for equal button
document.querySelector(".equal").addEventListener("click", handleEqualClick);

// Add event listener for AC button
document.querySelector(".ac").addEventListener("click", handleACClick);