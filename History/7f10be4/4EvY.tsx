import { useSchedule } from '../store/ScheduleContext';
import Container from './Container';

function List() {
  const { events } = useSchedule();

  return (
    <Container className="bg-red-300">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr className="gap-">
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map(({ title, description, date, status, id }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{description}</td>
                <td>{date}</td>
                <td>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default List;
