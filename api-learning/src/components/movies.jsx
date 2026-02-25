import { useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movieName, setMovieName] = useState();

  const searchMovieByTitle = () => {
    axios
      .get(
        `${import.meta.env.VITE_OMDBAPI_URL}?t=${movieName}&apikey=${
          import.meta.env.VITE_OMDBAPI_KEY
        }`
      )
      .then((response) => console.log(response));
  };

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
    </>
  );
};

export default Movies;
