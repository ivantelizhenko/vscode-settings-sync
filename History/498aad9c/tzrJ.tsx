const card =
  ' absolute top-0 left-0 h-52 w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic';
const card2 =
  ' absolute top-0 left-0 h-52 w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic';
function Card() {
  return (
    <div className="relative h-52 w-full bg-red-300">
      <div className="card__side card__side--front absolute top-0 left-0 h-52 w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic">
        Front side
      </div>
      <div className="card__side card__side--back absolute top-0 left-0 h-52 w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic">
        Back side
      </div>
    </div>
  );
}

export default Card;
