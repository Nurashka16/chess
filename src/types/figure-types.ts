import { shiftValues, type Cordinate, type CordinateShift, type IPiece, type PieceColor, type PieceType } from "./chess-types";

const getShiftValuesDiagonally = () => {
    const cordinates: CordinateShift[] | undefined = [];
    for (let i = 0; i < 8; i++) {
        cordinates.push({ rankShift: shiftValues[i], fileShift: shiftValues[i] });
        cordinates.push({ rankShift: shiftValues[i], fileShift: shiftValues[-i] });
        cordinates.push({ rankShift: shiftValues[-i], fileShift: shiftValues[i] });
        cordinates.push({ rankShift: shiftValues[-i], fileShift: shiftValues[-i] });
    }
    return cordinates;
}
const getShiftValuesVerticallyHorizontally = () => {
    const cordinates: CordinateShift[] | undefined = [];
    for (let i = 0; i < 8; i++) {
        cordinates.push({ rankShift: shiftValues[i], fileShift: 0 });
        cordinates.push({ rankShift: 0, fileShift: shiftValues[i] });
    }
    return cordinates;
}

export class Rook implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "rook";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        return getShiftValuesVerticallyHorizontally();
    }
}
export class Knight implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "knight";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        return [{ rankShift: -1, fileShift: 2 }, { rankShift: 1, fileShift: 2 },
        { rankShift: 2, fileShift: 1 }, { rankShift: 2, fileShift: -1 },
        { rankShift: 1, fileShift: -2 }, { rankShift: -1, fileShift: -2 },
        { rankShift: -2, fileShift: -1 }, { rankShift: -2, fileShift: 1 }];
    }
}
export class Bishop implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "bishop";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        return getShiftValuesDiagonally()
    }
}
export class Queen implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "king";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        const cordinates: CordinateShift[] | undefined = [];
        cordinates.push(...getShiftValuesDiagonally());
        cordinates.push(...getShiftValuesVerticallyHorizontally());
        return cordinates;
    }
}
export class King implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "king";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        return [{ rankShift: 1, fileShift: 0 }, { rankShift: 2, fileShift: 0 },
        { rankShift: -1, fileShift: 0 }, { rankShift: -2, fileShift: 0 },
        { rankShift: 0, fileShift: 1 }, { rankShift: 0, fileShift: 2 },
        { rankShift: 0, fileShift: -1 }, { rankShift: 0, fileShift: -2 }];
    }
}
export class Pawn implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "pawn";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(): CordinateShift[] {
        //     const cordinates: CordinateShift[] | undefined = [];
        // if(cordinates)
        return [
        //     { rankShift: 1, fileShift: 0 }, { rankShift: 2, fileShift: 0 },
        // { rankShift: -1, fileShift: 0 }, { rankShift: -2, fileShift: 0 },
        { rankShift: 0, fileShift: 1 }, { rankShift: 0, fileShift: 2 },
        { rankShift: 0, fileShift: -1 }, { rankShift: 0, fileShift: -2 }];
    }
}