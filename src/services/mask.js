const mask = (input) => {

    // input.focus();
    input.selectionStart = input.value.length;

    let numbers = [];

    function writeToInput(id, arr){
        let output = "+7 (";
        for (let i in arr) {
            if (i === '3') {
                output += ") " + arr[i];
                id.value = output;
                continue;
            }
            if (i === '6' || i === '8') {
                output += " - " + arr[i];
                id.value = output;
                continue;
            }
            output += arr[i];
            id.value = output;
        }
    }

    input.addEventListener('keydown', (event) => {
        if (event.keyCode === 8 && numbers.length !== 0) {
            event.preventDefault();
            numbers.pop();
            writeToInput(input, numbers);
        }
    });

    input.addEventListener('keypress', (event) => {

        if (/\D/g.test(event.key)) event.preventDefault();
        else {
            if (numbers.length === 10) event.preventDefault();
            else {
                event.preventDefault();
                numbers.push(event.key);
                writeToInput(input, numbers);
            }
        }
    });
}

export default mask;