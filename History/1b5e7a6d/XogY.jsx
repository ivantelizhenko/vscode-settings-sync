import Button from '../../ui/Button';
import IngredientItem from './IngredientItem';

function IngredientsList() {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-200/20 backdrop-blur-sm">
      <div>
        <ul className="">
          {arr.map(item => (
            <IngredientItem key={item} ingredient={item} />
          ))}
        </ul>
        <Button to="/cart" type="primary">
          Back
        </Button>
      </div>
    </div>
  );
}

export default IngredientsList;
