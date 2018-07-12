function sentensify(str) {
    // Add your code below this line
    let newArr = str.split(/[^a-zA-Z]/);
    return newArr.join(" ");
    // Add your code above this line
}
sentensify("May-the-force-be-with-you");