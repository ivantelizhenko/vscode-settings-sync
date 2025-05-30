import { format } from 'date-fns';
import { ckb, uk } from 'date-fns/locale';
import { ONE_DAY_MILLISECONDS } from './constants';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const todayHour = new Date().getHours();
const todayMS = ONE_DAY_MILLISECONDS/24* 


  // const isToday = today > dateGetTime + ONE_DAY_MILLISECONDS;


  // const timeOfTheToday = format(date, 'HH:mm');
  // const dayOfTheYear = format(date, 'dd.MM.y');
  // return isToday ? timeOfTheToday : dayOfTheYear;
  return new Date()
}
