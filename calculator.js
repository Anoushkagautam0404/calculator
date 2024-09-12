document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                
                currentInput = '';
                operator = '';
                operand1 = '';
                operand2 = '';
                input.value = '';
            } else if (value === '=') {
               
                operand2 = currentInput;
                if (operand1 && operator && operand2) {
                    const result = calculate(parseFloat(operand1), operator, parseFloat(operand2));
                    input.value = result;
                    currentInput = result;
                    operand1 = result;
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
               
                if (operand1 === '') {
                    operand1 = currentInput;
                } else if (operator) {
                    operand1 = calculate(parseFloat(operand1), operator, parseFloat(currentInput));
                    input.value = operand1;
                }
                operator = value;
                currentInput = '';
            } else {
                
                currentInput += value;
                input.value = currentInput;
            }
        });
    });

    function calculate(operand1, operator, operand2) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                return 0;
        }
    }
});
