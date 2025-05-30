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

  const calculation =
    (hours + Math.trunc(minutes / 60)) * ONE_HOUR_MILLISECONDS;
  console.log(hours + Math.trunc(minutes / 60));
  // const isToday = today > dateGetTime + ONE_DAY_MILLISECONDS;

  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return true ? timeOfTheToday : dayOfTheYear;
}
