import styled from 'styled-components';
import Piece from './Chess/Piece';
import { PieceColor, PieceFigures, PieceType } from './Chess/types/ChessTypes';
import ButtonDefault from './Button';
import { useAppDispatch, useAppSelector } from '../store';
import { setPromotionPiece } from './Chess/chessSlice';

const variationsOfPieces: { name: Omit<PieceFigures, 'p' | 'k'>; id: number } =
  [
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
    const prevMoveObject = prevMove!.from.split('');
    console.log(prevMoveObject);
    const selectedTile = {
      column: prevMoveObject[0],
      row: prevMoveObject[1],
      piece: 'p',
    };
    dispatch(
      movePiece({
        selectedTile,
        attackedTile: prevMove?.to,
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
