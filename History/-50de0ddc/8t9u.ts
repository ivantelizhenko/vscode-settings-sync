import { BookStatus } from '../../store/BookContext/BooksContextType';

// export enum FilterValues {
//   ShowAll = 'all',
//   ShowActive = BookStatus.Active,
//   ShowDeactive = BookStatus.Deactivated,
// }

export enum FilterValues {
  ShowAll = BookStatus.Active & BookStatus.Deactivated,
  ShowActive = BookStatus.Active,
  ShowDeactive = BookStatus.Deactivated,
}
