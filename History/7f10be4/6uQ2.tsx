import { useSchedule } from '../store/ScheduleContext';

function List() {
  const { events } = useSchedule();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ title, description, date, status }) => (
            <tr>
              <td>{title}</td>
              <td>{description}</td>
              <td>{date}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
