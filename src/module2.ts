//import * as points from './module1';
import { korte } from './module1';

console.log(korte.alma);


let p = new korte.ModifiablePoint(2,3);
p.x = 33;

let p2:ReadOnlyPoint = p;


console.log(JSON.stringify(p));