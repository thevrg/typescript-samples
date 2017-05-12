
interface Point {
    readonly x: number;
    y: number;
    z?: number; 
    print(): void;
}

let p: Point = {x: 1, y: 2, print: () => {
    console.log("printing: x=" + this.x + ", y=" + this.y);
}};

p.y = 222;
// p.x = 34; does not complie, readonly

p.print();


interface Shape { color: string; penWidth: number|string;}
interface PenStroke { penWidth: number|string; }

interface Square extends Shape, PenStroke {
    sideLength: number;
    penWidth: number;
}

let square: Square = {
  color: "blue",
  sideLength: 10,
  penWidth: 5.0
}
