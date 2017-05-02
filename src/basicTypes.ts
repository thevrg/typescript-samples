
//boolean
var isActive: boolean = true;

//number
var counter: number = 0xABAB; //hex
var binary: number = 0b01101011; //binary
var octal: number = 0o0734731; //octal
var decimal: number = 987654321;
var mol: number = 6.022045E23; //scientific floating point

//string
var message: string = 'hello';
var message2: string = "hello";

//template strings
var message3: string = `Hello, the counter is ${counter}.`;
var message3: string = `Hello, the 
counter is ${counter * 34} 
and the active is ${isActive}.`;

//arrays
var numberArray: number[] = [3,4,5];
var numberArray2: Array<number> = [5,6,7];

//object
var myPoint: {x:number, y: number} = { x : 234, y: 234};

//Defining map
var ojbectWithStringKeysAndNumberValues: {[key:string] : number} 
    = {"alma": 234, "masik": 888, "harmadik": 23};

//object with optional properties
var myPoint2: {x?: number, y:number, z?:number} = {y:2};

//touple
var numberAndString: [number,string] = [123, "123"];
var num: number = numberAndString[0];
var stringValue: string = numberAndString[1];

//enum
enum Season {WINTER = 1, SPRING = 2, SUMMER = 3, AUTUMN = 4}

var season = Season.SUMMER; //type of season is number

//enum - printing the string value
console.log(typeof season);
console.log(Season[season]);

//null
var nullvar: null = null; //only null is valid
var variable = null; //implicit null type

//void - only valid value is undefined
var voidvar: void = undefined;

//never - cannot be assigned 
var nevervar: never;

//using never:
function throwException(message:string): never {
    throw message;
}

