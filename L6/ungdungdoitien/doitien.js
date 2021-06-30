function doitien() {
    var number = parseInt(document.getElementById("number").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var count;
    if (to == from) {
        count = number * 1 * 1;
    } else if (to == "USD" && from == "VND") {
        count = number * 1 * parseInt(23000);
    } else if (to == "VND" && from == "USD") {
        count = number * 1 / 23000
    }

    document.getElementById("demo").innerHTML = ("Result: " + count);
}