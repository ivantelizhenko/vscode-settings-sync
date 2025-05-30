import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return <Button type="primary">Make priority</Button>;
}

export default UpdateOrder;
