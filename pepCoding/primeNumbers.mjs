import { prime2 } from "./primeNumber.mjs"

const primeNumbersPrimeCheck = function (num) {
    let prime = []
    for (let i = 2; i <= num; i += 2) {
        if (prime2(i)) {
            prime.push(i)
        }
    }
    return prime
}

const primeNumbersFlagCheck = function (num) {
    let prime = []
    for (let j = 2; j <= num; j++) {
        let isPrime = true;
        for (let i = 2; i * i <= j; i++) {
            if (j % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prime.push(j);
        }
    }
    return prime;
}
