import styled from 'styled-components';
import Piece from './Chess/Piece';
import {
  ColumnType,
  PieceColor,
  PieceFigures,
  RowType,
  TileType,
} from './Chess/types/ChessTypes';
import ButtonDefault from './Button';
import { useAppDispatch, useAppSelector } from '../store';
import { movePiece, setPromotionPiece } from './Chess/chessSlice';

const variationsOfPieces = [
  { name: 'n', id: Math.random() },
  { name: 'q', id: Math.random() },
  { name: 'b', id: Math.random() },
  { name: 'r', id: Math.random() },
];

function Promotion({ color }: { color: PieceColor }) {
  const dispatch = useAppDispatch();
  const { prevTwoMoves } = useAppSelector(state => state.chess);
  const prevMove = prevTwoMoves.at(0);

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    const selectedPiece = e.currentTarget.dataset.name as Omit<
      PieceFigures,
      'p' | 'k'
    >;

    dispatch(setPromotionPiece(selectedPiece));
    const prevMoveObject = prevMove;
    const prevMoveFromObject = prevMoveObject!.from;
    const prevMoveToObject = prevMoveObject!.to;
    const selectedTile: TileType = {
      column: prevMoveFromObject[0] as ColumnType,
      row: prevMoveFromObject[1] as RowType,
      piece: { name: 'p', color: 'w' },
    };
    const attackedTile: TileType = {
      column: prevMoveToObject[0] as ColumnType,
      row: prevMoveToObject[1] as RowType,
      piece: { name: selectedPiece as PieceFigures, color: 'w' },
    };

    console.log('i am here');
    console.log(selectedPiece);
    dispatch(
      movePiece({
        selectedTile,
        attackedTile,
      })
    );
  }

  return (
    <Wrapper>
      {variationsOfPieces.map(piece => (
        <PromotionPieceButton
          key={piece.id}
          onClick={handleSubmit}
          data-name={piece.name}
        >
          <Piece
            piece={piece.name as PieceFigures}
            color={color}
            style={{ width: '100%', height: '100%' }}
          />
        </PromotionPieceButton>
      ))}
    </Wrapper>
  );
}

const PromotionPieceButton = styled(ButtonDefault)`
  width: 100%;
  height: 100%;

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

const Wrapper = styled.div`
  background-color: var(--color-gray-100);
  place-self: center;
  display: flex;
  gap: 24px;
  width: 30%;
`;

export default Promotion;
