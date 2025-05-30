import { useSearchParams } from 'react-router';

function Page() {
  const app = useSearchParams();
  console.log(app.g);
  return <div>Page</div>;
}

export default Page;
