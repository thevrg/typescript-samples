const PI: number = 3.14159265;
// PI = 34; fails...

const myPointConst = {x: 3, y: 4};
//myPointConst = {x: 1, y:34};

myPointConst.x = 1;

let myArray = ["elso","masodik","harmadik","negyedik"];

//array destruction
let [,second,,fourth]= myArray;
console.log(`second: ${second}, fourth: ${fourth}`)

//object destruction
let myObject = {x: 23, y: 99, z: 66};

let {x:x2,z} = myObject;

console.log("x2: " + x2 + ", z: " + z);

