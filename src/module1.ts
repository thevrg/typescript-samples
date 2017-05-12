export namespace korte {    
    
    export interface ReadOnlyPoint {
        readonly x: number,
        readonly y: number
    }

    export class ModifiablePoint implements ReadOnlyPoint {
        constructor(public x: number, public y: number) {
        }
    }

    export const alma = "hello";

    export interface Vector {
        readonly x: number;
        readonly y: number;
    }
}
