let Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let name = firstAndLast.split(" ");
    this.getFullName = () => name.join(" ");
    this.getFirstName = () => name[0];
    this.getLastName = () => name[1];
    this.setFullName = (fullName) => name = fullName.split(" ");
    this.setFirstName = (firstName) => name[0] = firstName;
    this.setLastName = (lastName) => name[1] = lastName;


};

let bob = new Person('Bob Ross');

bob.setFullName("Haskell Curry")
console.log(bob.getFullName());