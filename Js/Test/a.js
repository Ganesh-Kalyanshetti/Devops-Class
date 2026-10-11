let obj = {

    name: ["nkdl", 579320],
    age: 20,
    class: "A"
}

console.log("nvbd", obj)
// console.log(obj.name)


// obj.name="karthik20"


console.log("keys", Object.keys(obj));
console.log("Values", Object.values(obj));
console.log("This is entrires", Object.entries(obj));
Object.seal(obj)

Object.freeze(obj)
obj.dance = "vbjk"
obj.name = "nvnd"
delete obj.name;
console.log("This is after entrires", Object.entries(obj));
console.log("Is this sealed : ", Object.isSealed(obj));

console.log(Object.isFrozen(obj));

console.log("Now Maths");

console.log(Math.sqrt(2));
console.log(Math.sqrt(4));

console.log("This is cuberoot ", Math.cbrt(16));
// console.log(int(9.8));

console.log(Math.floor(9.8));
console.log(Math.ceil(9.8));
console.log("This is random ceil", Math.ceil(Math.random() * 10000));
console.log("This is random ", Math.floor(Math.random() * 10000));

// let otp = Math.floor(Math.random() * 10000)
// {
//     alert("Your otp is prmto " + otp)
//     alert(`This is otp ${otp}`)
//     prompt("Is this okay", otp, "Or we need to change")
// }

// alert("Your otp is " + otp)

