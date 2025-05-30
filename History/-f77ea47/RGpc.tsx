import { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

function Calendar() {
  const [value, setValue] = useState<DateValueType | null>(null);

  return (
    <div>
      <>
        <Datepicker value={value} onChange={newValue => setValue(newValue)} />
      </>
    </div>
  );
}

export default Calendar;
