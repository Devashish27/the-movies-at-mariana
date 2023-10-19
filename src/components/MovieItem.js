import React from "react";

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      {/* Add more movie details as needed */}
    </div>
  );
}

export default MovieItem;
