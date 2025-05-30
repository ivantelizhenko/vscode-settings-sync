import { useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setActiveTime, setTurn, startTimer } from '../store/timerSlice';
import { SideColor } from '../types/StatusTypes';
import { setBoard, setPrevTwoMoves } from '../store/boardSlice';
import { BoardType } from '../types/BoardTypes';
import { doMove as doMoveChessAPI } from '../service/chess';

function useRealtimeGameById() {
  const dispatch = useAppDispatch();
  const gameId = useAppSelector(state => state.status.gameId);
  const prevTwoMoves = useAppSelector(state => state.board.prevTwoMoves);
  const startTimerOnce = useRef(false);

  useEffect(() => {
    if (!gameId) return;

    const channel = supabase
      .channel(`realtime:game:${gameId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'games',
          filter: `id=eq.${gameId}`,
        },
        payload => {
          console.log(payload.new);
          if (Object.keys(payload.new).length === 0) return;

          const {
            sideBlack,
            sideWhite,
            timeBlack,
            timeWhite,
            turn,
            board,
            lastMove,
          } = payload.new as {
            sideWhite: string;
            sideBlack: string;
            timeBlack: number;
            timeWhite: number;
            turn: SideColor;
            board: BoardType;
            lastMove: string;
          };

          const lastMoveAPI = JSON.parse(lastMove);

          dispatch(setActiveTime({ timeBlack, timeWhite }));
          dispatch(setTurn(turn));
          dispatch(setBoard(board));

          if (prevTwoMoves.length === 0) {
            dispatch(setPrevTwoMoves(lastMoveAPI));
          } else if (prevTwoMoves.length === 1) {
            const newPrevTwoMoves = [...prevTwoMoves, lastMoveAPI];
            dispatch(setPrevTwoMoves(newPrevTwoMoves));
          } else if (prevTwoMoves.length === 2) {
            const newPrevTwoMoves = [prevTwoMoves.at(-1), lastMoveAPI];
            dispatch(setPrevTwoMoves(newPrevTwoMoves));
          }

          doMoveChessAPI(lastMoveAPI.from, lastMoveAPI.to);

          if (sideWhite && sideBlack && !startTimerOnce.current) {
            dispatch(startTimer());
            startTimerOnce.current = true;
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [gameId, dispatch, prevTwoMoves]);
}

export default useRealtimeGameById;
