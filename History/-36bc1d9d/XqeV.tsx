import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import {
  setActiveTime,
  setExtraSeconds,
  startTimer,
} from '../../../store/timerSlice';
import {
  addIDs,
  clearOfferDraw,
  setGameOver,
  setSide,
  toOfferDrawSend,
} from '../../../store/statusSlice';
import { openModalWindow } from '../../../store/uiSlice';
import { setBoard } from '../../../store/boardSlice';
import { SideColor } from '../../../types/StatusTypes';
import useInterval from '../../../hooks/useInterval';
import useGetGame from '../../../hooks/useGetGame';
import useRealtimeGameById from '../../../hooks/useRealtimeGameById';
import useUpdateTime from '../../../hooks/useUpdateTime';
import useAddOpponent from '../../../hooks/useAddOpponent';
import useGetPlayers from '../../../hooks/useGetPlayers';
import GameOverWindow from '../../../modals/GameOverWindow';
import Question from '../../../modals/Question';
import Buttons from '../controls/Buttons';
import Time from '../controls/Time';
import ModalWindow from '../../../../components/ModalWindow';
import Spinner from '../../../../components/Spinner';
import ChessBoard from '../board/ChessBoard';
import {
  clearIDsFromLocalStorage,
  getIDsFromLocalStorage,
  setIDsToLocalStorage,
} from '../../../utils/helpers';

function ChessEnviroment() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id: gameIdFromPath = '' } = useParams();
  const { updateTime } = useUpdateTime();
  const { addOpponent } = useAddOpponent();
  const { isGameOver, offerDraw, side, gameId } = useAppSelector(
    state => state.status
  );
  const isOpenModalWindow = useAppSelector(state => state.ui.isOpenModalWindow);
  const { time, isStartTimer } = useAppSelector(state => state.timer);
  const { data: newGame, isLoading: getGameIsLoading } =
    useGetGame(gameIdFromPath);
  const { data: playersAPI, isLoading: getPlayerIsLoading } =
    useGetPlayers(gameIdFromPath);

  useRealtimeGameById();

  // Додати другого гравця
  const needPlayer = playersAPI && Object.values(playersAPI).includes('');
  useEffect(() => {
    if (needPlayer && !gameId && !isGameOver.is) {
      const userId = nanoid();

      dispatch(addIDs({ gameId: gameIdFromPath, userId }));
      setIDsToLocalStorage(gameIdFromPath, userId);

      dispatch(startTimer());

      addOpponent({ userId });
    }
  }, [
    addOpponent,
    dispatch,
    gameId,
    gameIdFromPath,
    needPlayer,
    isGameOver.is,
  ]);

  // Якщо є gameId і гра в supabase за цим id, то беруться дані з supabase. Тільки один раз.
  const onlyOneTimeGetNewGameData = useRef<boolean>(false);
  useEffect(() => {
    if (!onlyOneTimeGetNewGameData.current) {
      if (newGame && newGame.length === 1) {
        onlyOneTimeGetNewGameData.current = true;

        const {
          sideWhite: sideWhiteAPI,
          sideBlack: sideBlackAPI,
          extraSeconds,
          board,
          timeWhite,
          timeBlack,
        } = newGame[0];

        dispatch(setActiveTime({ timeWhite, timeBlack }));
        dispatch(setExtraSeconds(extraSeconds));
        dispatch(setBoard(board));

        if (!side) {
          const id = getIDsFromLocalStorage();
          const sideBlack = sideBlackAPI.trim() === id.userId && 'b';
          const sideWhite = sideWhiteAPI.trim() === id.userId && 'w';
          const sideAPI = sideWhite || sideBlack;
          dispatch(setSide(sideAPI as SideColor));
        }
      } else if (newGame && newGame.length === 0) {
        clearIDsFromLocalStorage();
        navigate('/menu');
      }
    }
  }, [getPlayerIsLoading, dispatch, newGame, navigate, side]);

  // Якщо два гравці є, то запускати таймер:
  useEffect(() => {
    if (needPlayer === false) {
      dispatch(startTimer());
    }
  }, [needPlayer, dispatch]);

  // Таймер гравців
  useInterval(updateTime, isGameOver.is || !isStartTimer ? null : 1000);

  // Слідкування за часом
  useEffect(() => {
    if (isStartTimer && side) {
      if (time.white <= 0) {
        dispatch(setGameOver({ message: 'White time is over', type: 'win' }));
        dispatch(openModalWindow('gameOver'));
      }
      if (time.black <= 0) {
        dispatch(setGameOver({ message: 'Black time is over', type: 'win' }));
        dispatch(openModalWindow('gameOver'));
      }
    }
  }, [time.white, time.black, dispatch, isStartTimer, side]);

  // Функції модальних вікон(5)
  function handleSubmitSurrender() {
    const sideWord = side === 'w' ? 'White' : 'Black';
    dispatch(setGameOver({ message: `${sideWord} surrender`, type: 'win' }));
    dispatch(openModalWindow('gameOver'));
  }
  function handleSubmitOfferDrawSend() {
    dispatch(toOfferDrawSend());
    dispatch(openModalWindow('offerDrawGet'));
  }
  function handleSubmitOfferDrawGet() {
    dispatch(setGameOver({ message: `Draw`, type: 'draw' }));
    dispatch(openModalWindow('gameOver'));
  }
  function handleRejectOfferDrawGet() {
    dispatch(clearOfferDraw());
  }

  if (getGameIsLoading || getPlayerIsLoading) return <Spinner />;

  return (
    <Wrapper $side={side!}>
      <Time type="b" />
      <ChessBoard />
      <Time type="w" />
      {gameId && <Buttons />}
      <ModalWindow isOpen={isOpenModalWindow === 'surrender'}>
        <Question onSubmit={handleSubmitSurrender}>
          Are you sure you want to surrender?
        </Question>
      </ModalWindow>
      <ModalWindow isOpen={isOpenModalWindow === 'offerDrawSend'}>
        <Question onSubmit={handleSubmitOfferDrawSend}>
          Are you sure you want to offer the draw?
        </Question>
      </ModalWindow>
      <ModalWindow
        isOpen={isOpenModalWindow === 'offerDrawGet' && offerDraw.from !== side}
      >
        <Question
          onSubmit={handleSubmitOfferDrawGet}
          onReject={handleRejectOfferDrawGet}
        >
          Are you agree with draw?
        </Question>
      </ModalWindow>
      <ModalWindow isOpen={isOpenModalWindow === 'gameOver'}>
        <GameOverWindow />
      </ModalWindow>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $side: SideColor }>`
  --sideTransform: ${props => (props.$side === 'w' ? 'none' : 'scaleY(-1)')};

  display: grid;
  grid-template-columns: minmax(0, 1fr) 3fr 1.5fr;
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    '. timeBlack buttons'
    '. board buttons'
    '. timeWhite buttons';

  padding: 24px 64px;
  gap: 12px 32px;
  min-height: 0;

  transform: var(--sideTransform);
`;

export default ChessEnviroment;
