import { useParams, useSearchParams } from 'react-router';

function Page() {
  const app = useParams();
  console.log(app.g);
  return <div>Page</div>;
}

export default Page;
