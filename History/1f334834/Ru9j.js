import { useState } from 'react';

export default WatchedListFile(){

function WatchedList({ watched }) {
  return (  
    <ul className="list">
      {watched.map(movie => (
        <WatchedListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

function WatchedListItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{Number(movie.userRating)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );

}