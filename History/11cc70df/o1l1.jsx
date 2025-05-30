import Button from '../../ui/Button';

function ChangeIngredients() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <Button type="secondarySmall" onClick={handleClick}>
      Change ingredients
    </Button>
  );
}

export default ChangeIngredients;
