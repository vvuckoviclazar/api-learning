import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../templates/snipets/MovieCard";

const Movies = () => {
  const [movieName, setMovieName] = useState("Lord of the rings");
  const [movieData, setMovieData] = useState({});

  const searchMovieByTitle = () => {
    axios
      .get(
        `${import.meta.env.VITE_OMDBAPI_URL}?t=${movieName}&apikey=${
          import.meta.env.VITE_OMDBAPI_KEY
        }`
      )
      .then((response) => setMovieData(response.data));
  };

  useEffect(() => {
    searchMovieByTitle();
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          onInput={(e) => setMovieName(e.currentTarget.value)}
        />
        <button onClick={searchMovieByTitle} type="button">
          Search movie
        </button>
      </form>

      <MovieCard movie={movieData} />
    </>
  );
};

export default Movies;
