import Stat from './Stat';

function Stats({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.length;

  return (
    <>
      <Stat title="Bookings" color="blue" />
      <Stat />
      <Stat />
      <Stat />
    </>
  );
}

export default Stats;
