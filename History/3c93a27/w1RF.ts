import { useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setActiveTime, setTurn, startTimer } from '../store/timerSlice';
import { SideColor } from '../types/StatusTypes';
import { setBoard } from '../store/boardSlice';

function useRealtimeGameById() {
  const dispatch = useAppDispatch();
  const gameId = useAppSelector(state => state.status.gameId);
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

          dispatch(setActiveTime({ timeBlack, timeWhite }));
          dispatch(setTurn(turn));
          console.log(lastMove);
          dispatch(setBoard(board));

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
  }, [gameId, dispatch]);
}

export default useRealtimeGameById;
