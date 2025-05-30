import { HiOutlineBriefcase } from 'react-icons/hi2';
import Stat from './Stat';

function Stats({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.length;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat />
      <Stat />
      <Stat />
    </>
  );
}

export default Stats;
