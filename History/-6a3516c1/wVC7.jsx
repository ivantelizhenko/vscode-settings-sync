import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div className="bg-red-200">
      <input />
      <Button onClick={handleClick} type="secondarySmallYellow">
        add ingredient
      </Button>
    </div>
  );
}

export default AddIngredient;
