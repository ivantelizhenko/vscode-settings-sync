import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <input />
      <Button onClick={handleClick} type="secondarySmallYellow">
        add ingredient
      </Button>
    </div>
  );
}

export default AddIngredient;
