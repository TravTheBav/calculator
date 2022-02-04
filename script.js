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

initNumButtonEventListeners();
let displayValue = ""
