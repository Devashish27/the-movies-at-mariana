import React, { useState } from "react";
import moviesData from "../data/moviesData.json";

function MovieList() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterMovies = () => {
    return moviesData
      .flatMap((item) => item.movies)
      .filter((movie) => {
        const hasSelectedGenre =
          selectedGenres.length === 0 ||
          selectedGenres.some((genre) => movie.genre.includes(genre));
        const hasSearchTerm = movie.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return hasSelectedGenre && hasSearchTerm;
      });
  };

  const handleGenreChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedGenres(selectedOptions);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* Genre Filter Dropdown */}
      <label htmlFor="genreFilter">Filter by Genre:</label>
      <select
        id="genreFilter"
        multiple
        onChange={handleGenreChange}
        value={selectedGenres}
      >
        {/* Render options based on available genres */}
        {moviesData
          .flatMap((item) => item.movies.flatMap((movie) => movie.genre))
          .filter((genre, index, self) => self.indexOf(genre) === index)
          .map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
      </select>

      {/* Title Search Input */}
      <label htmlFor="titleSearch">Search by Title:</label>
      <input
        type="text"
        id="titleSearch"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      {/* Movie List */}
      <ul>
        {filterMovies().map((movie) => (
          <li key={movie.title}>
            {/* Display movie details here */}
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} />
            <p>Genres: {movie.genre.join(", ")}</p>
            <p>Rating: {movie.rated}</p>
            <p>Released: {movie.released}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Director: {movie.director}</p>
            <p>Writer: {movie.writer}</p>
            <p>Actors: {movie.actors}</p>
            <p>Plot: {movie.plot}</p>
            <p>Language: {movie.language}</p>
            <p>Country: {movie.country}</p>
            <p>Awards: {movie.awards}</p>
            {/* Add more movie details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
