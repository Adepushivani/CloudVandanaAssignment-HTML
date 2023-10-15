// Calc.js
function Solve(value) {
    document.getElementById('res').value += value;
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    var currentValue = document.getElementById('res').value;
    document.getElementById('res').value = currentValue.slice(0, -1);
}

function Result() {
    var expression = document.getElementById('res').value;
    try {
        var result = eval(expression);
        document.getElementById('res').value = result;
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
}
