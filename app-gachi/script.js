var total = 0; // Variable to store the total

function calculate() {
    // Get the input value
    var mathExpression = document.getElementById('mathInput').value;

    // Trim the input value to remove leading and trailing whitespaces
    var trimmedExpression = mathExpression.trim();

    // Check if the trimmed input is empty
    if (trimmedExpression === "") {
        // Display a message if the input is empty
        alert("Please input prices.");
        return; // Stop further execution if the input is empty
    }

    try {
        // Evaluate the math expression
        var result = eval(trimmedExpression);

        // Display the result
        document.getElementById('result').innerHTML = 'Result: ' + result;

        // Update calculation history
        updateHistory(trimmedExpression, result);

        // Update total
        updateTotal(result);
    } catch (error) {
        // Display an error message if there's an issue with the expression
        document.getElementById('result').innerHTML = 'Invalid expression. Please enter a valid math expression.';
    }
}


function updateHistory(expression, result) {
    // Get the history list
    var historyList = document.getElementById('historyList');

    // Create a new list item
    var listItem = document.createElement('li');

    // Set the content of the list item
    listItem.textContent = `${expression} = ${result}`;

    // Add the new item to the history list
    historyList.appendChild(listItem);
}

function updateTotal(result) {
    // Update the total
    total += result;

    // Display the total
    document.getElementById('total').innerHTML = 'Total: ' + total;
}

function inputValue(value) {
    // Get the current input value
    var currentInput = document.getElementById('mathInput').value;

    // Append the new value to the current input with a plus sign
    document.getElementById('mathInput').value = currentInput + (currentInput === '' ? '' : '+') + value;
}

function clearAll() {
    // Clear the input
    document.getElementById('mathInput').value = '';

    // Clear the result
    document.getElementById('result').innerHTML = '';

    // Clear the history list
    document.getElementById('historyList').innerHTML = '';

    // Clear the total
    total = 0;
    document.getElementById('total').innerHTML = 'Total: 0';
}

function clearData() {
    // Clear the input
    document.getElementById('mathInput').value = '';

    // Clear the result
    document.getElementById('result').innerHTML = '';
}
