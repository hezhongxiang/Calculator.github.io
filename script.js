let expression = "";

    function aptdisplay(value) {
        expression += value;
        updateDisplay();
    }

    function deleteOneDigit() {
        if (expression.length > 0) {
            expression = expression.slice(0, -1);
            updateDisplay();
        }
    }

    function calculate() {
        try {
            const result = eval(expression);
            expression = result.toString();
            updateDisplay();
        } catch (error) {
            alert("Invalid input. Please enter a valid expression.");
            clear();
        }
    }

    function clear() {
        expression = "";
        updateDisplay();
    }

    function reset() {
        document.getElementById("calculate-area").value="";
    }

    function updateDisplay() {
        document.getElementById("calculate-area").value = expression;
    }