
function sumFibs(num) {
    let f1 = 0;
    let f2 = 1;
    let sum = 0;
    if (num < 1){
        return sum;
    }

    for( let i = 1; f2 <= num; i++){
        if (f2 % 2 !== 0 && f2 <= num) {
            sum += f2;
        }
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    return sum;
}


console.log(sumFibs(75025));
