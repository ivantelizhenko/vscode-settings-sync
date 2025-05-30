import { useParams } from 'react-router-dom';

function ListItem() {
  const params = useParams();
  console.log(params);

  return <div>List item {params}</div>;
}

export default ListItem;
