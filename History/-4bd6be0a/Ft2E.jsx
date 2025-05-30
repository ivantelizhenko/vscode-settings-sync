import { useParams } from 'react-router-dom';

function ListItem() {
  const { id } = useParams();

  return <div>List item {id}</div>;
}

export default ListItem;
