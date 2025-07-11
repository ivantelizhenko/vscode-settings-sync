import DeleteIngredient from './DeleteIngredient';

function IngredientItem({ ingredient }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-2">
      <li className="text-lg">{ingredient}</li>
      <DeleteIngredient />
    </div>
  );
}

export default IngredientItem;
