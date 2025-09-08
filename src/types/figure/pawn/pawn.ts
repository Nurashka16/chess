import { type Board } from "../../../stores/chess-store";
import { Cordinate, type CordinateShift, type IPiece, type PieceColor, type PieceType, shiftValues } from '../../chess-types';


export class Pawn implements IPiece {
    color: PieceColor;
    cordinate: Cordinate;
    name: PieceType = "pawn";
    constructor(color: PieceColor, cordinate: Cordinate) {
        this.color = color;
        this.cordinate = cordinate;
    }

    getPossibleMoves(board: Board): Cordinate[] {
        const result: Cordinate[] = [];

        if (this.color == "white") {
            const shifts: CordinateShift[] = [{ rankShift: 1, fileShift: 0 }];
            if (this.cordinate.rank == 2) {
                shifts.push({ rankShift: 2, fileShift: 0 })
            }
            for (let i = 0; i < shiftValues.length; i++) { //если пустая ячейка
                const currentPiece = board.getPiece(this.cordinate.applyShift(shifts[i]));
                if (board.isEmpty(this.cordinate.applyShift(shifts[i]))) {
                    result.push(this.cordinate.applyShift(shifts[i]));//пустую ячейку
                }
                if (!board.isEmpty(this.cordinate.applyShift(shifts[i]))
                    && !!currentPiece && currentPiece.color !== this.color) {//если не пустая ячейка и фигура черного цвета
                    result.push(this.cordinate.applyShift(shifts[i]));//не пустая ячейка и фигура черного цвета
                    break
                }
            }
            //повторяется
            const shiftsDiagonally: CordinateShift[] = [{ rankShift: 1, fileShift: 1 }, { rankShift: 1, fileShift: -1 }];
            for (let i = 0; i < shiftsDiagonally.length; i++) {
                const currentPiece = board.getPiece(this.cordinate.applyShift(shiftsDiagonally[i]));
                if (!board.isEmpty(this.cordinate.applyShift(shiftsDiagonally[i]))
                    && !!currentPiece && currentPiece.color !== this.color) {//если не пустая ячейка и фигура черного цвета
                    result.push(this.cordinate.applyShift(shiftsDiagonally[i]));//не пустая ячейка и фигура черного цвета
                }
            }
        }
        if (this.color == "black") {
            const shifts: CordinateShift[] = [{ rankShift: -1, fileShift: 0 }];
            if (this.cordinate.rank == 2) {
                shifts.push({ rankShift: -2, fileShift: 0 })
            }
            for (let i = 0; i < shifts.length; i++) { //если пустая ячейка
                const currentPiece = board.getPiece(this.cordinate.applyShift(shifts[i]));
                if (board.isEmpty(this.cordinate.applyShift(shifts[i]))) {
                    result.push(this.cordinate.applyShift(shifts[i]));//пустую ячейку
                }
                if (!board.isEmpty(this.cordinate.applyShift(shifts[i]))
                    && !!currentPiece && currentPiece.color !== this.color) {//если не пустая ячейка и фигура белого цвета
                    result.push(this.cordinate.applyShift(shifts[i]));//не пустая ячейка и фигура белого цвета
                    break
                }
            }
            //повторяется
            const shiftValuesDiagonally: CordinateShift[] = [{ rankShift: -1, fileShift: 1 }, { rankShift: -1, fileShift: -1 }];
            for (let i = 0; i < shiftValuesDiagonally.length; i++) {
                const currentPiece = board.getPiece(this.cordinate.applyShift(shiftValuesDiagonally[i]));
                if (!board.isEmpty(this.cordinate.applyShift(shiftValuesDiagonally[i]))
                    && !!currentPiece && currentPiece.color !== this.color) {//если не пустая ячейка и фигура белого цвета
                    result.push(this.cordinate.applyShift(shiftValuesDiagonally[i]));//не пустая ячейка и фигура белого цвета
                }
            }
        }
        return result
    }
}