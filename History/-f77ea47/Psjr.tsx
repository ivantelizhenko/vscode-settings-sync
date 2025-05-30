import Datepicker from 'react-tailwindcss-datepicker';

function Calendar() {
  const [value, setValue] = useState();

  return (
    <div>
      <>
        <Datepicker value={value} onChange={newValue => setValue(newValue)} />
      </>
    </div>
  );
}

export default Calendar;
