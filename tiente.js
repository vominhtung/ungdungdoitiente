function convertMoney() {
    let input = document.getElementById("input").value;

    let result;

    let source = document.getElementById("type-select-1").value;

    let target = document.getElementById("type-select-2").value;

    if (source !== target) {
        if (source == 'VND') {
            result = input / 23000;
        }
        if (source == 'USD') {
            result = input * 23000;
        } else {
            result = input;
        }
    }
    document.getElementById("result").textContent = result + target;
}

