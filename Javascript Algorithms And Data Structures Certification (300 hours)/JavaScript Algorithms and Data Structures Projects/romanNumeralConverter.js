function convertToRoman(num) {
    const lookup = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let roman = '';
    let units = Object.entries(lookup);
    let i = 0;
    while (num > 0) {
        while (num - units[i][1] >= 0) {
            roman += units[i][0];
            num -= units[i][1]
        }
        if (i < units.length - 1){
            i++;
        }
    }
    return roman;

}

console.log(convertToRoman(36));