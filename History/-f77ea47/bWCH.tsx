import { useEffect, useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

function Calendar() {
  const [value, setValue] = useState<DateValueType | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <>
        <label htmlFor="date" className="text-gray-700 font-medium">
          Select a date:
        </label>
        <input
          type="date"
          id="date"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="border border-gray-300 rounded-xl p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </>
    </div>
  );
}

export default Calendar;
