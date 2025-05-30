import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div className="w-full">
      <Button onClick={handleClick} type="secondarySmallYellow">
        add ingredient
      </Button>
    </div>
  );
}

export default AddIngredient;
