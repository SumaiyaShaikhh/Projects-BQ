const text = "Error Generator in Js"

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function cal(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return sub(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return div(a, b);
    } else {
        return "Error: Enter a valid operator!";
    }
}

console.log(cal(7, 4, "+"));   
console.log(cal(5, 3, "-"));   
console.log(cal(2, 8, "*"));   
console.log(cal(9, 3, "/"));   
console.log(cal(4, 2, "x")); 
