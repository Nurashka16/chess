import { makeAutoObservable } from "mobx";
import { type Cordinate, type File, type IPiece, type PieceColor, Cordinate } from '../types/chess-types';
import { Rook } from "../types/figure/rook/rook";
import { Pawn } from "../types/figure/pawn/pawn";

export const files: File[] = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;
class User {
    public name: string;
    public color: PieceColor;
    public lostPiece: number = 0;//или сколько всего есть

    constructor(color: PieceColor, name: string) {
        this.color = color;
        this.name = name
    }
    setFigure() {
        this.lostPiece += 1;
    }
}

export class Board {
    private readonly map: Map<Cordinate, IPiece> = new Map();

    public constructor(pieces: IPiece[]) {
        pieces.forEach((piece) => {
            this.map.set(piece.cordinate, piece)
        })
    }
    public isEmpty(cordinate: Cordinate) {
        return !!this.map.get(cordinate)
    }
    public getPiece(cordinate: Cordinate) {
        return this.map.get(cordinate)
    }

}
export class ChessStore {
    board: Board;
    selectedPiece: IPiece | null = null;
    possibleMoves: Cordinate[] | null = null;

    constructor() {
        makeAutoObservable(this);
        const pieces: IPiece[] = this.createPieces();
        this.board = new Board(pieces);
    }

    //выбор пешки
    setSelectedPiece(cordinate: Cordinate) {
        //есть ли фигура на данной кординате
        const piece = this.board.getPiece(cordinate);

        //если нет пешки и ранее выбранной тоже, то нажатие в пустоту
        if (!piece && !this.selectedPiece) {
            return
        }
        //если нет ранее выбранной тоже,но есть пешка, простое нажатие на пешку делает ее активной
        if (!this.selectedPiece && !!piece) {
            this.selectedPiece = piece;
            this.board.getPiece(piece.cordinate)?.getPossibleMoves()
        }
        else {
            //если есть ранее выбранная пешка, но нажал на пустую клетку, то перемещаем ее туда вызов setPosible и Move
            if (!!this.selectedPiece && !piece)
                this.selectedPiece = { ...this.selectedPiece, cordinate: cordinate };


            //если есть ранее выбранная пешка и нажал на другую пешку(!!this.selectedPiece && !!piece)
            else {
                this.board.getPiece(piece.cordinate)
            }
        }


    }
    //доступные шаги

    //двигаем пешки
    movePiece() {

    }

    private createPieces() {
        const pieces: IPiece[] = [];
        pieces.push(
            new Rook("black", { file: "A", rank: 1 }),
            new Knight("black", { file: "B", rank: 1 }),
            new Bishop("black", { file: "C", rank: 1 }),
            new Queen("black", { file: "D", rank: 1 }),
            new King("black", { file: "E", rank: 1 }),
            new Bishop("black", { file: "F", rank: 1 }),
            new Knight("black", { file: "G", rank: 1 }),
            new Rook("black", { file: "H", rank: 1 }))
        files.forEach((file) => {
            pieces.push(new Pawn("black", { file: file, rank: 2 }))
        });

        files.forEach((file) => {
            pieces.push(new Pawn("white", { file: file, rank: 7 }))
        });
        pieces.push(
            new Rook("white", { file: "A", rank: 8 }),
            new Knight("white", { file: "B", rank: 8 }),
            new Bishop("white", { file: "C", rank: 8 }),
            new Queen("white", { file: "D", rank: 8 }),
            new King("white", { file: "E", rank: 8 }),
            new Bishop("white", { file: "F", rank: 8 }),
            new Knight("white", { file: "G", rank: 8 }),
            new Rook("white", { file: "H", rank: 8 }))
        return pieces
    }

};
