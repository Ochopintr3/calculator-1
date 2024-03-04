let display = document.getElementById("display");
let currentInput = "";
let pendingOperation = "";
let operand = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    operand = 0;
    pendingOperation = "";
    display.value = currentInput;
}

function operate(operator) {
    if (currentInput !== "") {
        if (operand === 0) {
            operand = parseFloat(currentInput);
        } else {
            performOperation();
            display.value = operand;
        }

        pendingOperation = operator;
        currentInput = "";
    }
}

function performOperation() {
    const currentNumber = parseFloat(currentInput);
    switch (pendingOperation) {
        case '+':
            operand += currentNumber;
            break;
        case '-':
            operand -= currentNumber;
            break;
        case '*':
            operand *= currentNumber;
            break;
        case '/':
            operand /= currentNumber;
            break;
    }
}

function calculateResult() {
    if (currentInput !== "") {
        performOperation();
        currentInput = operand.toString();
        display.value = currentInput;
        operand = 0;
        pendingOperation = "";
    }
}

clearDisplay();
