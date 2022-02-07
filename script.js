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
    if (num2 == 0) {
        return "ERROR: DIVIDE BY 0"
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let val;
    switch(operator) {
        case '+':
            val = addNums(num1, num2);
            break;
        case '-':
            val = subtractNums(num1, num2);
            break;
        case 'x':
            val = multiplyNums(num1, num2);
            break;
        case '÷':
            val = divideNums(num1, num2);
            break;
    }
    if (val == "ERROR: DIVIDE BY 0") {
        return val;
    }
    return val.toFixed(4);
}

// the display is updated when each num button is clicked
function initNumButtonEventListeners() {
    const buttons = document.querySelectorAll('button.num');
    buttons.forEach(button => button.addEventListener('click', () => {
        if (noError()) {
            display.textContent += button.textContent;
        }
    }));
}

// current display value is moved to a storedValue and display is cleared when an operator button is clicked 
function initOperatorButtonEventListeners() {
    const buttons = document.querySelectorAll('button.operator');
    buttons.forEach(button => button.addEventListener('click', () => {
        if (noError()) {
            if (storedValue) {  // update the stored value first if there already is one
                storedValue = operate(lastOperatorEntered, +storedValue, +display.textContent);
            }   else {            
                storedValue = display.textContent;
            }
            lastOperatorEntered = button.textContent;        
            display.textContent = "";
        }        
    }));
}

// does the math operation if there is a storedValue and a lastOperatorEntered
// displays the result and then resets storedValue and lastOperatorEntered to null and displayValue to the current result
function initEqualsButtonEventListener() {
    const button = document.querySelector('button.equals');
    button.addEventListener('click', () => {
        if (noError()) {
            if (storedValue && lastOperatorEntered) {
                display.textContent = operate(lastOperatorEntered, +storedValue, +display.textContent);
                storedValue = null;
                lastOperatorEntered = null;          
            }
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

function noError() {
    if (display.textContent == "ERROR: DIVIDE BY 0") {
        return false;
    }
    return true;
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
