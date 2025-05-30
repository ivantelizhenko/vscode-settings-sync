import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ONE_DAY_MILLISECONDS } from './constants';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const today = new Date().getTime();

  const isToday = today - ONE_DAY_MILLISECONDS > date.getTime();

  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return isToday ? timeOfTheToday : dayOfTheYear;
}
