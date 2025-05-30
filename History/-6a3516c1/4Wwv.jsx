import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div className="">
      {/* <input /> */}
      <Button type="secondarySmall"> Add ingredient</Button>
    </div>
  );
}

export default AddIngredient;
