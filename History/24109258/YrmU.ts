import { Chess, Square } from 'chess.js';

const chess = new Chess();

export function showPossibleMovesForPiece(column: string, row: string) {
  const code = column + row;
  const possibleMoves = chess.moves({ square: code as Square, verbose: true });

  const result = possibleMoves.map(move => {
    return {
      from: move.from,
      to: move.to,
      name: move.san,
      attackedPiece: move.captured || null,
    };
  });

  return result;
}

export function doMove(codeFrom: string, codeTo: string, promotion?: string) {
  const move = codeFrom + codeTo;
  const moveWithPromotion = move + '=' + promotion;

  chess.move(promotion ? moveWithPromotion : move);
}

export function showPrevMove() {
  const history = chess.history({ verbose: true });

  if (history.length > 1) {
    const firstPrevMove = history[history.length - 1];
    const secondPrevMove = history[history.length - 2];

    const prevTwoMoves = [
      {
        from: firstPrevMove.from,
        to: firstPrevMove.to,
        piece: firstPrevMove.piece,
      },
      {
        from: secondPrevMove.from,
        to: secondPrevMove.to,
        piece: secondPrevMove.piece,
      },
    ];
    return prevTwoMoves;
  }
  if (history.length > 0) {
    const { from, to, piece } = history[history.length - 1];

    const prevMove = [{ from, to, piece }];
    return prevMove;
  }

  return [];
}

export function showTileColor(code: string) {
  const color = chess.squareColor(code as Square);
  return color;
}

export function showGame() {
  console.log(chess.ascii());
}

export function getCurretnTurn() {
  return chess.turn();
}

export function fixPromotion(from: string, to: string, promotion: string) {
  const move = from + to + '=' + promotion;
  chess.undo();
  chess.move(move);
}

// export function isEnPassant() {
//   const history = chess.history({ verbose: true });
//   const firstPrevMove = history[history.length - 1];
//   return chess.move(firstPrevMove).isEnPassant();
// }

export function getGameOverReason(chess: Chess): string | null {
  if (!chess.isGameOver()) return null;

  const checks: [() => boolean, string][] = [
    [() => chess.isCheckmate(), 'Мак'],
    [() => chess.isStalemate(), 'Пат'],
    [() => chess.isDrawByFiftyMoves(), 'Нічия через правило 50 кроків'],
    [() => chess.isThreefoldRepetition(), 'Нічия через триразове повторення'],
    [() => chess.isInsufficientMaterial(), 'Нічия через нестачу матеріалу'],
    [() => chess.isDraw(), 'Нічия'],
  ];

  const found = checks.find(([predicate]) => predicate());

  return found ? found[1] : false;
}
