import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <Button onClick={handleClick} type="secondarySmallYellow">
      add ingredient
    </Button>
  );
}

export default AddIngredient;
