function add(num1:number, num2: number) :number {
    return num1 + num2;
} 

let result = add(1,34);

let addF = function (num1:number, num2: number) :number {
    return num1 + num2;
};

let result2 = addF(2,3);

console.log(result2);

let myFunc = (num1:number, num2:number) => {
    return num1 + num2;
};

function sum(num1:number, num2: number, num3?: number): number {
    return num1 + num2 + (num3 ? num3 : 0);
}

console.log("sum of 1, 2 is " + sum(1,2));
console.log("sum of 1, 2, 3 is " + sum(1,2,3));

function sum2(num1:number, num2: number, num3 = 0): number {
    return num1 + num2 + num3;
}

console.log("sum2 of 1, 2 is " + sum2(1,2));
console.log("sum2 of 1, 2, 3 is " + sum2(1,2,3));

function sum3(firstNumber: number, ...numbers : number[]): number {
    let sum = firstNumber;
    numbers.forEach(element => {
        sum+= element;
    });
    return sum;
}

console.log("sum3 of 1, 2 is " + sum3(1,2));
console.log("sum3 of 1, 2, 3, 4, 5 is " + sum3(1,2,3,4,5));

//Overloading
function format(value: number): string[];
function format(value: boolean): string;
function format(value): any {
  if (typeof value == "number") {
    return ["A number", "#" + value];
  }
  if (typeof value == "boolean") {
    return value ? "Yes" : "No";
  }
}

var strArray:string[] = format(234);
var str = format(true);
// str = 34; fails, str is string
