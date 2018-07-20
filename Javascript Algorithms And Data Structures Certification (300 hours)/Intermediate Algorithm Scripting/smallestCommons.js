function smallestCommons(arr){
    const par1 = arr[0];
    const par2 = arr[1];
    let isDividable = false;
    let range = false;
    let number = 1;
    let count = 0;
    const start = par1 >= par2 ? par2 : par1;
    const end = par1 >= par2 ? par1 : par2;
    while(!isDividable){
        // noprotect
        let diff1 = number % par1;
        let diff2 = number % par2;

        if (number % par1 === 0 && number % par2 === 0 && diff1 === diff2 ){
            for(let i = start; i < end; i++){
                if (number % i === diff1){
                    range = true;
                } else {
                    range = false;
                    break;
                }
            }
            if (range){
               isDividable = true;
            }
        }
        count++;
        number = end * count;
    }
    return number - end;
}

console.log(smallestCommons([23,18]));