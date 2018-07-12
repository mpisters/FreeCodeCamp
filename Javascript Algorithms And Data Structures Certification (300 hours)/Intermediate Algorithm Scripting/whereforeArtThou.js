function whatIsInAName(collection, source) {
    // What's in a name?
    // Only change code below this line

    let newObj = collection.filter(item => checkValidObject(item, source));
    console.log(property, value, newObj)

    // Only change code above this line
    return newObj;
}

function checkValidObject(item, source){
    let trueArr = [];
    let properties = source.length > 0 ?  Object.keys(source) : null;
    console.log("the properties", properties);
    let values = [];
    for (let i = 0; i < properties.length; i++){
        let value = source[i].properties[i];
        values.push(value);
    }
    let itemKeys = Object.keys(item);
    let validProperties = properties ? properties.map(item => itemKeys.indexOf(item) !== 0) : null;//.every(item => !!item):null;
    console.log("valid" , validProperties)

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });