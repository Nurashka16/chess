
export const files: File[] = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;
export const shiftValues: ShiftValue[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3, -4, -5, -6, -7, -8] as const;
export type ShiftValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8;

export interface IPiece {
    color: PieceColor;
    name: PieceType
    cordinate: Cordinate;
    getPossibleMoves: () => void
}
export type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type PieceColor = 'black' | "white";
export type PieceType = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn";

export type CordinateShift = {
    rankShift: ShiftValue;
    fileShift: ShiftValue;
}

export type Cordinate = {
    file: File;
    rank: Rank;
}