import BookingRow from './BookingRow';
import { useBookings } from './useBookings';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Empty from '../../ui/Empty';
import Pagination from '../../ui/Pagination';

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={booking => <BookingRow key={booking.id} booking={booking} />}
        />
        <Table.Footer>
          <Pagination />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
