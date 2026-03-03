import Container from "react-bootstrap/esm/Container";
import MovieCard from "./snipets/MovieCard";

const SearchResults = ({ movies }) => {
  return (
    <div className="bg-dark">
      <Container className="d-flex flex-wrap ">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </Container>
    </div>
  );
};

export default SearchResults;
