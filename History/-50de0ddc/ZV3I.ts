import { BookStatus } from '../../store/BookContext/BooksContextType';

export enum FilterValues {
  ShowAll = 'all',
  ShowActive = BookStatus.Active,
  ShowDeactive = BookStatus.Deactivated,
}

const filterToBookStatusMap = {
  [FilterValues.ShowAll]: BookStatus.Active || BookStatus.Deactivated,
  [FilterValues.ShowActive]: BookStatus.Active,
  [FilterValues.ShowDeactive]: BookStatus.Deactivated,
};
