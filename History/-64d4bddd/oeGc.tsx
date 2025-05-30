import { useParams, useSearchParams } from 'react-router';

function Page() {
  const { userId } = useParams();

  console.log(userId);
  return <div>Page</div>;
}

export default Page;
