function steamrollArray(arr) {
    let newArr = arr.map(item => isArray(item));
    return getImprovedArr(newArr, true);
}

function isArray(item) {
    if (item.constructor === Array) {
        let newItem = getImprovedArr(item);
        for (let i = 0; i < newItem.length; i++) {
            console.log("item 1 - 2", item);
            if (newItem[i].constructor === Array) {
                return isArray(newItem[i])
            } else {
                newItem[i] = item;
            }
        }
    }
    return item;
}

function getImprovedArr(arr, last = false) {
    if (arr.constructor === Array) {
        let multipleArr = arr.map(item => item.constructor === Array).length > 1;
        if (multipleArr) {
            let newArr = arr.reduce((a, b) => a + b);
            return getImprovedArr(newArr, last)
        } else {
            return arr.map((item) => {
                if (item.constructor === Array) {
                    if (item.length > 1) {
                        return item;
                    }
                    return item[0];
                }
                return item;
            });
        }
    }
    return last ? arr.replace(",", "").split('') : arr;
}

/* Second solution to the problem. This one is simpler */

function steamrollArray(arr) {
    let strArr = arr.join("").replace("[object Object]", "#").replace(",", "");
    let newArr = strArr.split("").map((item) => {
        if (item === "#") {
            return {};
        } else if (/\d/.test(item)) {
            return parseInt(item);
        }
        return item;
    });
    return newArr;
}