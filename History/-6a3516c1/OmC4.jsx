import Button from '../../ui/Button';

function AddIngredient() {
  function handleClick() {
    console.log('hey');
  }

  return (
    <div>
      <input className="w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-2 md:py-2" />
      <Button type="secondarySmallYellow"> Add ingredient</Button>
    </div>
  );
}

export default AddIngredient;
