// the global variable
let globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    let newArr = title.toLowerCase().split(" ").filter(String);
    return newArr.join("-");

}
// Add your code above this line

let winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"