const card =
  ' absolute top-0 left-0 h-[520px] w-full overflow-hidden text-3xl font-semibold backface-hidden perspective-dramatic ';

function Card() {
  return (
    <div className="relative h-52 w-full bg-red-300">
      <div
        className={`${card} bg-purple-600 hover:transform-[rotateY(-180deg)]`}
      >
        Front side
      </div>
      <div
        className={`${card} transform-[rotateY(180deg)] bg-green-400 hover:transform-[rotateY(0deg)]`}
      >
        Back side
      </div>
    </div>
  );
}

export default Card;
