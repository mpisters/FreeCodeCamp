function whatIsInAName(collection, source) {
    return collection.filter(item => checkValidObject(item, source));
}

function checkValidObject(item, source){
    let properties = Object.keys(source);
    let itemKeys = Object.keys(item);
    let trueArr = [];
    for (let i = 0; i < properties.length; i++){
        let property = properties[i];
        let value = source[property];
        if (itemKeys.includes(property)){
            let itemValue = item[property];
            trueArr.push(itemValue === value);
        } else {
            trueArr.push(false);
        }
    }
    return trueArr.every(item => !!item);
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });