const calculatorScreen = document.querySelector('.calculator-screen');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let previousInput = '';
    let operation = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operation = null;
                calculatorScreen.value = '0';
            } else if (value === '=') {
                if (previousInput && currentInput && operation) {
                    calculate();
                    operation = null;
                    previousInput = '';
                }
            } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
                if (currentInput) {
                    if (previousInput && operation) {
                        calculate();
                    } else {
                        previousInput = currentInput;
                    }
                    operation = value;
                    currentInput = '';
                }
            } else {
                if (operation && !previousInput) {
                    previousInput = currentInput;
                    currentInput = '';
                }
                currentInput += value;
                calculatorScreen.value = currentInput;
            }
        });
    });

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        calculatorScreen.value = currentInput;
    }