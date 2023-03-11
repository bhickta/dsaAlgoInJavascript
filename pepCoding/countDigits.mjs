function digits(num) {
    let [number, counter, revDigit, digit] = [num, 0, [], []];
    while (number) {
        revDigit.push(number % 10);
        number = Math.floor(number / 10);
        counter++;
    }
    let div = Math.pow(10, counter - 1);
    while (div >= 1) {
        digit.push(Math.floor(num / div));
        num = num % div;
        div /= 10;
    }
    return [counter, digit, revDigit ];
}
console.log(digits(205))