import { format } from 'date-fns';
import { ckb, uk } from 'date-fns/locale';
import { ONE_DAY_MILLISECONDS } from './constants';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const today = new Date().getTime();
  const dateGetTime = new Date(date).getTime();
  const isToday = today > dateGetTime + ONE_DAY_MILLISECONDS;
  console.log(today);
  console.log(dateGetTime + ONE_DAY_MILLISECONDS);
  console.log(isToday);
  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return isToday ? timeOfTheToday : dayOfTheYear;
}
