import type { Board } from "../../../stores/chess-store";
import { getShiftValuesDiagonally, type Cordinate, type CordinateShift, type IPiece, type PieceColor, type PieceType } from "../../chess-types";

export class Bishop implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "bishop";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(board: Board): Cordinate[] {
        const shifts: CordinateShift[] = getShiftValuesDiagonally();
        const result: Cordinate[] = []
        for (let i = 0; i < shifts.length; i++) {
            const piece = board.getPiece(this.cordinate.applyShift(shifts[i]))
            if (!!piece) {
                result.push(this.cordinate.applyShift(shifts[i]))
            }
        }
        return result
    }
}
