import { files, type Board } from "../../stores/chess-store";
import type { Cordinate, CordinateShift, IPiece, PieceColor, PieceType, Rank } from "../chess-types";

export class King implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "king";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }
    getPossibleMoves(board: Board): Cordinate[] {
        const shifts: CordinateShift[] = [{ rankShift: 1, fileShift: 0 }, { rankShift: 2, fileShift: 0 },
        { rankShift: -1, fileShift: 0 }, { rankShift: -2, fileShift: 0 },
        { rankShift: 0, fileShift: 1 }, { rankShift: 0, fileShift: 2 },
        { rankShift: 0, fileShift: -1 }, { rankShift: 0, fileShift: -2 }];
        const result: Cordinate[] = [];

        for (let i = 0; i < shifts.length; i++) {
            const piece = board.getPiece(this.cordinate.applyShift(shifts[i]))
            if (!!piece) {
                result.push(piece.cordinate)
            }
        }

        return result
    }
} 
