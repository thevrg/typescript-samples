class Greeter {

    suffix: string;

    constructor(public prefix: string, suffix: string, private id: number) {
        this.suffix = suffix;
    }

    greet(name: string): string {
        return this.id + ": " + this.prefix + name + this.suffix;
    }
}

let g = new Greeter("Hello, dear ", "!", 12);
let greeting = g.greet("Peter");

// g.id is unaccessable

console.log(greeting);

abstract class Animal {
    constructor(public name: string) {
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Snake extends Animal {
    private _venomous:boolean;
    constructor(name: string, venomous: boolean) {
        console.log('creating Snake with name ' + name);
        super(name); 
        this._venomous = venomous;
    }
    move(distance = 5) {
        console.log("Slithering...");
        super.move(distance);
    }

    bite() {
        console.log("Snake bites...");
    }
}

class SuperSnake extends Snake {

}


let s = new SuperSnake("Sziszi", true);

s.move();
s.bite();

let a: Animal = s;

if (a instanceof Snake) {
    a.bite();
}

let s2:Snake = <Snake>a;
let s3:Snake = a as Snake;


interface ReadOnlyPoint {
    readonly x:number;
    readonly y:number;
}

class MyPoint implements ReadOnlyPoint {
    constructor(readonly x:number, readonly y:number) {
    }
}

class MyPoint2 implements ReadOnlyPoint {
    private _x:number;
    private _y:number;

    constructor (x:number, y:number) {
        this._x = x;
        this._y = y;
    }

    get x():number {
        return this._x;
    }

    get y():number {
        return this._y;
    }

    static sum(...points: MyPoint2[]) {
        let result = new MyPoint2(0,0);
        points.forEach( p => {
            p._x += p._x;
            p._y += p._y;
        })
        return result;
    }

    add(...points: MyPoint2[]) {
        points.forEach( p => {
            this._x += p._x;
            this._y += p._y;
        })
        return this;
    }
}

let p1 = new MyPoint(12,13);
let p1r:ReadOnlyPoint = p1;

// p1r.x =34; //not possible, read only
// p1.x = 34; // read only



