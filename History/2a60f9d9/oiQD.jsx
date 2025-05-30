import DeleteIngredient from './DeleteIngredient';

function IngredientItem({ ingredient }) {
  return (
    <div className="flex">
      <li className="font- text-lg">{ingredient}</li>
      <DeleteIngredient />
    </div>
  );
}

export default IngredientItem;
