import React from "react";

function MovieDetail({ movie }) {
  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>Genres: {movie.genre.join(", ")}</p>
      <p>Rating: {movie.rated}</p>
      <p>Year Release: {movie.year}</p>
      <p>Metacritic Rating: {movie.meta_score}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Director: {movie.director}</p>
      <p>Writer: {movie.writer}</p>
      <p>Actors: {movie.actors}</p>
      <p>Plot: {movie.plot}</p>
      <p>Language: {movie.language}</p>
      <p>Country: {movie.country}</p>
      <p>Awards: {movie.awards}</p>
      {/* Add more movie details as needed */}
    </div>
  );
}

export default MovieDetail;
