function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function fibonacciSlidingWindow(n) {
    if (n === 0) {
        return [];
    }
    let [prev, curr] = [0, 1];
    let sequence = [prev, curr];
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
        sequence.push(curr);
    }
    return sequence;
}


function fibonacciBinet(n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    let psi = (1 - Math.sqrt(5)) / 2;

    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

function fibonacciRecursion(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
    }
}

function matrixMultiply(a, b) {
    let c = [[0, 0], [0, 0]];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
}

function fibonacciMatrix(n) {
    let result = [[1, 0], [0, 1]];
    let base = [[1, 1], [1, 0]];
    while (n > 0) {
        if (n % 2 === 1) {
            result = matrixMultiply(result, base);
        }
        base = matrixMultiply(base, base);
        n = Math.floor(n / 2);
    }
    return result[0][1];
}

function fibonacciSeries(n) {
    let series = []
    for (let i = 0; i <= n; i++) {
        series.push(fibonacciMatrix(i))
    }
    return series
}
console.log(fibonacciSeries(20))