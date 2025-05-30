import { useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setActiveTime, startTimer } from '../store/timerSlice';
import { setGameOver } from '../store/statusSlice';
import { isGameOver as isGameOverChess } from '../service/chess';
import { GameOverType } from '../types/StatusTypes';

function useRealtimeGameById() {
  const dispatch = useAppDispatch();
  const { gameId, isGameOver } = useAppSelector(state => state.status);
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
            isGameOver: isGameOverAPI,
          } = payload.new as {
            sideWhite: string;
            sideBlack: string;
            timeBlack: number;
            timeWhite: number;
            isGameOver: boolean;
          };
          console.log('Is gamove api: ', isGameOverAPI);
          console.log('Is gamove app with !: ', !isGameOver.is);

          if (isGameOverAPI && !isGameOver.is) {
            const gameOverResults = isGameOverChess();
            dispatch(
              setGameOver({
                message: gameOverResults?.message as string,
                type: gameOverResults?.type as GameOverType,
              })
            );
          }

          dispatch(setActiveTime({ timeBlack, timeWhite }));

          if (sideWhite && sideBlack && !startTimerOnce.current) {
            dispatch(startTimer());
            console.log('Start timer once');
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
