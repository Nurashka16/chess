import { makeAutoObservable } from "mobx";
import type { Cordinate, IPiece } from "../types/chess-types";

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

export class ChessStore {
    board: Map<Cordinate, IPiece> = new Map();
    selectedPiece: IPiece | null = null;
    possibleMoves: Cordinate[] | null = null;

    constructor() {
        makeAutoObservable(this);
        this.initialBoard()
    }
    initialBoard() {
        this.board.set({ file: "A", rank: 1 }, { name: "rook", color: "black", cordinate: { file: "A", rank: 1 } })
        this.board.set({ file: "B", rank: 1 }, { name: "knight", color: "black", cordinate: { file: "B", rank: 1 } })
        this.board.set({ file: "C", rank: 1 }, { name: "bishop", color: "black", cordinate: { file: "C", rank: 1 } })
        this.board.set({ file: "D", rank: 1 }, { name: "queen", color: "black", cordinate: { file: "D", rank: 1 } })
        this.board.set({ file: "E", rank: 1 }, { name: "king", color: "black", cordinate: { file: "E", rank: 1 } })
        this.board.set({ file: "F", rank: 1 }, { name: "bishop", color: "black", cordinate: { file: "F", rank: 1 } })
        this.board.set({ file: "G", rank: 1 }, { name: "knight", color: "black", cordinate: { file: "G", rank: 1 } })
        this.board.set({ file: "H", rank: 1 }, { name: "rook", color: "black", cordinate: { file: "H", rank: 1 } })

        for (const file of files) {
            this.board.set({ file: file, rank: 2 }, { name: "pawn", color: "black", cordinate: { file: file, rank: 2 } })
        }
        for (const file of files) {
            this.board.set({ file: file, rank: 7 }, { name: "pawn", color: "white", cordinate: { file: file, rank: 7 } })
        }
        this.board.set({ file: "A", rank: 8 }, { name: "rook", color: "black", cordinate: { file: "A", rank: 8 } })
        this.board.set({ file: "B", rank: 8 }, { name: "knight", color: "black", cordinate: { file: "B", rank: 8 } })
        this.board.set({ file: "C", rank: 8 }, { name: "bishop", color: "black", cordinate: { file: "C", rank: 8 } })
        this.board.set({ file: "D", rank: 8 }, { name: "queen", color: "black", cordinate: { file: "D", rank: 8 } })
        this.board.set({ file: "E", rank: 8 }, { name: "king", color: "black", cordinate: { file: "E", rank: 8 } })
        this.board.set({ file: "F", rank: 8 }, { name: "bishop", color: "black", cordinate: { file: "F", rank: 8 } })
        this.board.set({ file: "G", rank: 8 }, { name: "knight", color: "black", cordinate: { file: "G", rank: 8 } })
        this.board.set({ file: "H", rank: 8 }, { name: "rook", color: "black", cordinate: { file: "H", rank: 8 } })
    }
    //выбор пешки
    setSelectedPiece(cordinate: Cordinate) {
        //есть ли фигура на данной кординате
        const piece = this.board.get(cordinate);
        piece.

            //если нет фигуры и ранее выбранной тоже(нажатие в пустоту)
            if(!piece && !this.selectedPiece) {
            return
        }
        //если нет ранее выбранной тоже,но есть фигура
        if (!this.selectedPiece && !!piece) {
            this.selectedPiece = piece;
            this.setPossibleMoves(cordinate, piece)
        }
        //если есть ранее выбранная и фигура
        if (!!this.selectedPiece && !!piece) {
            //выбранная ранее фишка

            // если цвет совпадает
            if (piece.color == this.selectedPiece.color) {
                this.selectedPiece.cordinate = cordinate;
                this.setPossibleMoves(cordinate, piece!)
            }
            // если цвет не совпадает
            else {
                this.movePiece()
            }
        }


    }
    setPossibleMoves(cordinate: Cordinate, figure: IPiece) {
        if (figure.name = "rook") {
            this.board
        }
    }
    //двигаем пешки
    movePiece() {

    }
};
