import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export function formatOpenNote(date) {
  return format(date, 'd MMMM yyyy HH:mm ', {
    locale: uk,
  });
}

export function formatListItemNote(date) {
  const today = new Date();
  const oneDayMillisecons = 86_400_000;

  const isToday = today.getTime() - oneDayMillisecons > date.getTime();

  const timeOfTheToday = format(date, 'HH:mm');
  const dayOfTheYear = format(date, 'dd.MM.y');
  return true ? timeOfTheToday : dayOfTheYear;
}
