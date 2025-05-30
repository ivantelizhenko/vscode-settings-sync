import DeleteIngredient from './DeleteIngredient';

function IngredientItem({ ingredient }) {
  return (
    <div className="mb-2 flex items-center">
      <li className="font- text-lg">{ingredient}</li>
      <DeleteIngredient />
    </div>
  );
}

export default IngredientItem;
