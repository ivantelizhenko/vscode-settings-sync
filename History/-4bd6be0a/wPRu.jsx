import { useParams } from 'react-router-dom';

function ListItem() {
  const params = useParams();

  return <div>List item {params}</div>;
}

export default ListItem;
