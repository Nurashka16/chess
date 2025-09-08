import { files, type Board } from "../../../stores/chess-store";
import { getShiftValuesVerticallyHorizontally, type Cordinate, type CordinateShift, type IPiece, type PieceColor, type PieceType, type Rank } from "../../chess-types";

export class Rook implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "rook";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(board: Board): Cordinate[] {
        const shifts: CordinateShift[] = getShiftValuesVerticallyHorizontally();
        const result: Cordinate[] = []
        for (let i = 0; i < shifts.length; i++) {
            const piece = board.getPiece(this.cordinate.applyShift(shifts[i]))
            if (!!piece) {
                result.push(piece.cordinate)
            }
        }
        return result
    }
}