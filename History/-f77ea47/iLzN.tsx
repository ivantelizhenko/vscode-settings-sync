import { useEffect, useState } from 'react';

function Calendar() {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-2 w-64">
      <input
        type="date"
        id="date"
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Calendar;
