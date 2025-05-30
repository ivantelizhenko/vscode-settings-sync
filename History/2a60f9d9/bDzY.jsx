function IngredientItem({ ingredient }) {
  return (
    <div>
      <li className="font- text-lg">{ingredient}</li>
      <DeleteIngredient></DeleteIngredient>
    </div>
  );
}

export default IngredientItem;
