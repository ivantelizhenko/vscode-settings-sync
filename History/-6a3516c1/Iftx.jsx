import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div>
      <input className="input w-full" />
      <Button type="secondarySmallYellow"> Add ingredient</Button>
    </div>
  );
}

export default AddIngredient;
