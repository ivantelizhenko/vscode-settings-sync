import { BookStatus } from '../store/BookContext/BookContextType';

export function toggleBookStatus(status: BookStatus): BookStatus {
  return status === BookStatus.Active
    ? BookStatus.Deactivated
    : BookStatus.Active;
}
