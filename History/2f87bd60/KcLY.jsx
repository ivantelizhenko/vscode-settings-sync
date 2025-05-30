import { useSelector } from 'react-redux';

function Username() {
  const fullName = useSelector(store => store.user);
  console.log(fullName);
  return <div className="text-sm font-semibold md:block">Ivan</div>;
}

export default Username;
