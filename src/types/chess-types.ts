import { files, type Board } from "../stores/chess-store";


export const shiftValues: ShiftValue[] = [0, 1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5, -6, -7] as const;
export type ShiftValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1 | -2 | -3 | -4 | -5 | -6 | -7;

export interface IPiece {
    color: PieceColor;
    name: PieceType
    cordinate: Cordinate;
    getPossibleMoves: (board: Board) => Cordinate[]
}
export type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type PieceColor = 'black' | "white";
export type PieceType = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn";

export type CordinateShift = {
    rankShift: ShiftValue;
    fileShift: ShiftValue;
}

export class Cordinate {
    readonly file: File;
    readonly rank: Rank;

    constructor(file: File, rank: Rank) {
        this.file = file;
        this.rank = rank;
    }
    public applyShift(shift: CordinateShift):Cordinate {
        const rank: Rank = this.rank + shift.rankShift;
        const file: File = files[files.indexOf(this.file) + shift.fileShift];
        return new Cordinate(rank, file)
    }
}
export const getShiftValuesDiagonally = () => {

    const cordinates: CordinateShift[] = [];
    for (let i = 1; i < 8; i++) {
        cordinates.push({ rankShift: shiftValues[i], fileShift: shiftValues[i] });
        cordinates.push({ rankShift: shiftValues[i], fileShift: shiftValues[i + 8] });
        cordinates.push({ rankShift: shiftValues[i + 8], fileShift: shiftValues[i] });
        cordinates.push({ rankShift: shiftValues[i + 8], fileShift: shiftValues[i + 8] });
    }
    return cordinates
};

export const getShiftValuesVerticallyHorizontally = () => {
    const cordinates: CordinateShift[] = [];
    for (let i = 1; i < 8; i++) {
        cordinates.push({ rankShift: shiftValues[i], fileShift: 0 });
        cordinates.push({ rankShift: 0, fileShift: shiftValues[i] });
        cordinates.push({ rankShift: shiftValues[i + 8], fileShift: 0 });
        cordinates.push({ rankShift: 0, fileShift: shiftValues[i + 8] });
    }
    return cordinates;
}