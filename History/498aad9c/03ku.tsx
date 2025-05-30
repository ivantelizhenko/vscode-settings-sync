const card =
  ' absolute top-0 left-0 h-52 w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic';

function Card() {
  return (
    <div className="relative h-52 w-full bg-red-300">
      <div className={`${card} `}>Front side</div>
      <div className={`${card} `}>Back side</div>
    </div>
  );
}

export default Card;
