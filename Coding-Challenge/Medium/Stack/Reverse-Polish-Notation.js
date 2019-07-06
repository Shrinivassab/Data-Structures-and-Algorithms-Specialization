/*Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stackOperands = [];
    let result;
    if (tokens.length === 1) {
        return tokens[0];
    }

    tokens.forEach((each) => {
        let asciiCode = each.charCodeAt(0);
        if (/\d/.test(each)) {
            stackOperands.push(each);
        } else {
            let firstOperand = Number(stackOperands.pop());
            let secondOperand = Number(stackOperands.pop());


            if (asciiCode === 42) {
                result = (firstOperand * secondOperand);
            } else if (asciiCode === 43) {
                result = (firstOperand + secondOperand);
            } else if (asciiCode === 45) {
                result = (secondOperand - firstOperand);
            }else if (asciiCode === 47) {
                result = Math.trunc(secondOperand / firstOperand);
            }

            stackOperands.push(result);
        }
    });
    return (Math.round(result));
};