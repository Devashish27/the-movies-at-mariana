import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data and update 'movies' state
    // Example: fetch('moviesData.json')
    fetch("moviesData.json") // Assuming moviesData.json is in the public folder
      .then((response) => response.json())
      .then((data) => setMovies(data)); // Set movies state with the fetched data
  }, []);

  return (
    <div>
      <h1>Movies@Mariana Tek</h1>
      {/* Add genre filter and search components */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
