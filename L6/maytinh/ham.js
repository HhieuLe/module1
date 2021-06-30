function addition() {
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var tong = n1 + n2;
    document.getElementById('demo').innerHTML = ("Result Addition :" + tong);
}

function subtraction() {
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var hieu = n1 - n2;
    document.getElementById('demo').innerHTML = ("Result Subtraction :" + hieu);
}

function multiplication() {
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var tich = n1 * n2
    document.getElementById('demo').innerHTML = ("Result Division :" + tich);
}

function division() {
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var thuong = n1 / n2;
    document.getElementById('demo').innerHTML = ("Result Division :" + thuong);
}