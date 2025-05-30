import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice, removeIngredients } = item;
  const ingredientsLast = ingredients.filter(item => {
    for (const el of removeIngredients) return item !== el;
  });
  console.log(`Re: ${removeIngredients}`);
  console.log(removeIngredients);
  console.log(ingredientsLast);
  console.log(`Cu: ${ingredientsLast}`);

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredientsLast.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
