import Stat from './Stat';

function Stats({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.length;

  return (
    <>
      <Stat title="Bookings" color="blue" icon={<Hi}/>
      <Stat />
      <Stat />
      <Stat />
    </>
  );
}

export default Stats;
