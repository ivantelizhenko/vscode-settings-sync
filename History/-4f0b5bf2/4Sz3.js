export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numItemsPacked = [...items.filter(item => item.packed === true)].length;
  const percentage =
    numItems > 0 ? Math.round((numItemsPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼You have ${numItems} items on your list and you already packed
        ${numItemsPacked} (${percentage}%)
         `}
      </em>
    </footer>
  );
}
