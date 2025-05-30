export function Loader() {
  return <p className="loader">Loading...</p>;
}

export function ErrorMessage({ message }) {
  return <p className="error">⛔️{message}</p>;
}

export function MessageRated({ rating }) {
  return <p>You rated with movie {rating}⭐️</p>;
}
