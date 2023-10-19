import React from "react";

function GenreFilter({ genres, selectedGenres, onGenreChange }) {
  return (
    <div className="genre-filter">
      <label htmlFor="genreFilter">Filter by Genre:</label>
      <select
        id="genreFilter"
        multiple
        onChange={onGenreChange}
        value={selectedGenres}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        )}
      </select>
    </div>
  );
}

export default GenreFilter;
