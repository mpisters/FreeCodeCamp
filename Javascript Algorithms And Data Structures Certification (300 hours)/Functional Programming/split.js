function splitify(str) {
    // Add your code below this line
    let withoutspaces = str.split(" ").join();
    return withoutspaces.split(/[^a-zA-Z]/);
    // Add your code above this line
}
console.log(splitify("Hello World,I-am code"));