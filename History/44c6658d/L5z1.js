import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ONE_HOUR_MILLISECONDS } from './constants';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const today = new Date();
  const dateInMilliseconds = new Date(date).getTime();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const calculationMillisecondsToday =
    (hours + minutes / 60).toFixed(2) * ONE_HOUR_MILLISECONDS;

  const isToday = today - calculationMillisecondsToday < dateInMilliseconds;

  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return isToday ? timeOfTheToday : dayOfTheYear;
}
