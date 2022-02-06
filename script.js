function addNums(num1, num2) {
    return num1 + num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return addNums(num1, num2);
        case '-':
            return subtractNums(num1, num2);
        case 'x':
            return multiplyNums(num1, num2);
        case '÷':
            return divideNums(num1, num2);
    }
}

// the display and 'displayValue' are updated when each num button is clicked
function initNumButtonEventListeners() {
    const buttons = document.querySelectorAll('button.num');
    buttons.forEach(button => button.addEventListener('click', () => {
        const display = document.querySelector('#display');
        display.textContent += button.textContent;
        displayValue += button.textContent;
    }));
}

// current display value is moved to a stored value and display is cleared when an operator button is clicked 
function initOperatorButtonEventListeners() {
    const buttons = document.querySelectorAll('button.operator');
    buttons.forEach(button => button.addEventListener('click', () => {
        const display = document.querySelector('#display');
        lastOperatorEntered = button.textContent;
        storedValue = displayValue.textContent;
        display.textContent = "";
        displayValue = "";
    }));
}

initNumButtonEventListeners();
initOperatorButtonEventListeners();
let displayValue = "";
let storedValue = null;
let lastOperatorEntered = null;
