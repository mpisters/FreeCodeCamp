function sumPrimes(num) {
    let arrPrimes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            arrPrimes.push(i);
        }
    }
    return arrPrimes.reduce((a, b) => a + b, 0);
}

function isPrime(number) {
    if (number === 2){
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(sumPrimes(977));