function findErrors() {
    var input = document.getElementById('input').value;
    var errorOutput = document.getElementById('output');
    var errorMessage = document.getElementById('error-message');
    var solution = document.getElementById('solution');

    try {
        var syntaxCheck = new Function(input);
        syntaxCheck();
        errorOutput.textContent = "No syntax errors found.";
        errorMessage.textContent = "";
        solution.textContent = "";
    } catch (error) {
        errorOutput.textContent = "";
        errorMessage.textContent = "Error: " + error.message;
        solution.textContent = getSolution(error);
    }
}

function getSolution(error) {
    switch (error.name) {
        case 'SyntaxError':
            return "Please check the syntax of your Python code.";
        case 'ReferenceError':
            return "Make sure all variables are defined before use.";
        default:
            return "Unable to provide solution for this error. Please refer to Python documentation or search online for assistance.";
    }
}