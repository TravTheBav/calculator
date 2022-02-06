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

// the display is updated when each num button is clicked
function initNumButtonEventListeners() {
    const buttons = document.querySelectorAll('button.num');
    buttons.forEach(button => button.addEventListener('click', () => {
        display.textContent += button.textContent;
    }));
}

// current display value is moved to a storedValue and display is cleared when an operator button is clicked 
function initOperatorButtonEventListeners() {
    const buttons = document.querySelectorAll('button.operator');
    buttons.forEach(button => button.addEventListener('click', () => {
        if (storedValue) {  // update the stored value first if there already is one
            storedValue = operate(lastOperatorEntered, +storedValue, +display.textContent);
        }   else {            
            storedValue = display.textContent;
        }
        lastOperatorEntered = button.textContent;        
        display.textContent = "";
    }));
}

// does the math operation if there is a storedValue and a lastOperatorEntered
// displays the result and then resets storedValue and lastOperatorEntered to null and displayValue to the current result
function initEqualsButtonEventListener() {
    const button = document.querySelector('button.equals');
    button.addEventListener('click', () => {
        if (storedValue && lastOperatorEntered) {
            display.textContent = operate(lastOperatorEntered, +storedValue, +display.textContent);
            storedValue = null;
            lastOperatorEntered = null;          
        }
    })
}

function initClearButtonEventListener() {
    const button = document.querySelector('button.clear');
    button.addEventListener('click', () => {
        display.textContent = "";
        storedValue = null;
        lastOperatorEntered = null;
    })
}

function initButtonEventListeners() {
    initNumButtonEventListeners();
    initOperatorButtonEventListeners();
    initEqualsButtonEventListener();
    initClearButtonEventListener();
}

const display = document.querySelector('#display');
display.textContent = "";
initButtonEventListeners();
let storedValue = null;
let lastOperatorEntered = null;
