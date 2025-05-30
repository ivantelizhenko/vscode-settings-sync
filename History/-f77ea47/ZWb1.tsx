import Datepicker from 'react-tailwindcss-datepicker';

function Calendar() {
  return (
    <div>
      <>
        <Datepicker value={value} onChange={newValue => setValue(newValue)} />
      </>
    </div>
  );
}

export default Calendar;
