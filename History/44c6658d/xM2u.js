import { format } from 'date-fns';
import { ckb, uk } from 'date-fns/locale';
import { ONE_DAY_MILLISECONDS, ONE_HOUR_MILLISECONDS } from './constants';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const calculation = (hours + (minutes / 100) * 60) * ONE_HOUR_MILLISECONDS;
  console.log((minutes / 100) * 60);
  const todayMS = ONE_DAY_MILLISECONDS / 24;

  // const isToday = today > dateGetTime + ONE_DAY_MILLISECONDS;

  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return true ? timeOfTheToday : dayOfTheYear;
}
