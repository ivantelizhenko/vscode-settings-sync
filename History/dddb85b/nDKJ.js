
export async function getBookings({ filter, sortBy }) {
  from('bookings')
  .select(
    'id,created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName,email)'
  );

  const { data, error } = await ;

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }

  return data;
}
