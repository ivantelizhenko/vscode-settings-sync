const card =
  ' absolute top-0 left-0 h-[200px] w-full overflow-hidden text-3xl font-semibold backface-hidden duration ease ';

function Card() {
  return (
    <div className="relative h-[200px] w-full bg-red-300 perspective-[300px]">
      <div
        className={`${card} bg-purple-600 hover:transform-[rotateX(-180deg)]`}
      >
        Front side
      </div>
      <div
        className={`${card} transform-[rotateX(180deg)] bg-green-400 hover:transform-[rotateX(0deg)]`}
      >
        Back side
      </div>
    </div>
  );
}

export default Card;
