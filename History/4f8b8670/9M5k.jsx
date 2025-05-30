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
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Check ins"
        color="green"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Ocuupancy rate"
        color="green"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
    </>
  );
}

export default Stats;
