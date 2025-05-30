import DeleteIngredient from './DeleteIngredient';

function IngredientItem({ ingredient }) {
  return (
    <div className="flex items-center justify-center space-x-2 space-y-2">
      <li className="font- text-lg">{ingredient}</li>
      <DeleteIngredient />
    </div>
  );
}

export default IngredientItem;
