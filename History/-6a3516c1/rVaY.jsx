import Button from '../../ui/Button';
import AddItem from './AddItem';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <input />
      <AddItem />
    </div>
  );
}

export default AddIngredient;
