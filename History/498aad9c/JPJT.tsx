function Card() {
  return (
    <div className="relative flex h-[300px] w-3/4 items-center justify-center bg-red-300">
      <div className="bg-green-50">напис</div>
      <button className="btn btn-soft btn-info absolute right-5 bottom-2">
        Show answer
      </button>
    </div>
  );
}

export default Card;
