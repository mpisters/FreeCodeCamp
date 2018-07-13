let addTogether = function(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number') {
            return a + b;
        } else if(b === 'undefined'){
            return function (x) {
                return a + x;
            };
        } if (arguments.length === 1){
            return function(x){
                if (typeof x === 'number'){

                    return a + x;
                }
                return undefined;
            }
        }

    }
    return undefined;
};

console.log(addTogether(2)(3));
console.log(addTogether(2, "3"));