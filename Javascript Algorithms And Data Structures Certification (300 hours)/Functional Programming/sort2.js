var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Add your code below this line
    let newArr = [];
    let newArr2 = [...arr];
    return newArr2.sort().concat(newArr);


    // Add your code above this line
}
nonMutatingSort(globalArray);