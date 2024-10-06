console.log("fired");

// Select the num button
const num_buttons = document.querySelectorAll(".num");

// Set initial value to 0
document.querySelector(".display").innerHTML = "0";

// Declare input numbers
let num1 = "";
let num2 = "";
let sign = "";
let current_input = "";
let result = "";
let all_input = "";

for ( var i = 0; i < num_buttons.length; i++) {
    num_buttons[i].addEventListener("click", update_display);

    // Convert array to String
    let contents = num_buttons[i].innerHTML;

    // Display select number on the panel when clicked
    function update_display(event) {
        const button_value = event.target.innerHTML;
        current_input += button_value;
        all_input += button_value;
        document.querySelector(".display").innerHTML = all_input;
    }
}

const ac_button = document.querySelector(".ac");
ac_button.addEventListener("click", ac_button_click_handler);

// Reset display number when click AC button
function ac_button_click_handler() {
    document.querySelector(".display").innerHTML = "0";
    // Reset
    current_input = "";
    sign = "";
    num1 = "";
    num2 = "";
    result = "";
    all_input = "";
}


const sign_buttons = document.querySelectorAll(".sign");
for ( var i = 0; i < sign_buttons.length; i++) {
    sign_buttons[i].addEventListener("click", sign_button_click_handler);

    function sign_button_click_handler(event) {
        const sign_value = event.target.innerHTML;
        if (num1 === "") {
            num1 = current_input;
        }
        else if (num2 === "") {
            num2 = current_input;
            result = calculate(num1, num2, sign);
            num1 = result;
            sign = "";
            num2 = "";
        }
        current_input = "";
        sign = sign_value;
        all_input += sign;
        document.querySelector(".display").innerHTML = all_input;
    }
}

const equal_button = document.querySelector(".equal");
equal_button.addEventListener("click", equal_button_handler);

function equal_button_handler(event) {
    if (num1 !== "" && sign !== "" && current_input !== "") {
        num2 = current_input;
        result = calculate(num1, num2, sign);
        document.querySelector(".display").innerHTML = result;
        // Reset
        current_input = "";
        sign = "";
        num1 = "";
        num2 = "";
        all_input = "";
    }
}

function calculate(num1, num2, sign) {
    if (sign === "+") {
        return String(Number(num1) + Number(num2));
    }
    else if (sign === "−") {
        return String(Number(num1) - Number(num2));
    }
    else if (sign === "×") {
        return String(Number(num1) * Number(num2));
    }
    else if (sign === "÷") {
        return String(Number(num1) / Number(num2));
    }
}