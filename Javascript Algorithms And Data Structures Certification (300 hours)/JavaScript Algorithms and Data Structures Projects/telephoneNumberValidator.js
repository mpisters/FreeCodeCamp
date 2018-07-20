function telephoneCheck(str) {
    let allNumbers = str.replace(/[^0-9]/g, "");
    if (!(/[0-9\-()]/.test(str)) || str.charAt(0) === '-' || str.indexOf("?") !== -1) {
        return false;
    }
    let newStr = str.replace(/ /g, "").replace(/-/g, "");
    console.log(newStr);
    if (allNumbers.length === 10 || allNumbers.length === 11) {
        if (allNumbers.length === 11 && parseInt(allNumbers.charAt(0)) === 1) {
            return validateStr(newStr, true);
        } else if (allNumbers.length === 10) {
            return validateStr(newStr, false);
        }
        return false;
    }
    return false;

}

function validateStr(checkStr, hasOne) {
    let isValid = false;
    for (let i = 0; i < checkStr.length; i++) {
        let number = parseInt(checkStr.charAt(i));
        if (hasOne) {
            if (checkStr.charAt(1) === '(' && checkStr.charAt(5) === ')') {
                isValid = true;
            }
        }
        if (checkStr.charAt(0) === '(' && checkStr.charAt(4) === ')') {
            isValid = true;
        }

        console.log("isValid: ", isValid)
        if (isNaN(number) && !isValid) {
            return false;
        }

    }
    return true;
}


console.log(telephoneCheck("(555)5(55?)-5555"));