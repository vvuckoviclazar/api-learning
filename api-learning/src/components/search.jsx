import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../templates/SearchResults";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = () => {
    axios
      .get(
        `${import.meta.env.VITE_OMDBAPI_URL}?s=${searchTerm}&apikey=${
          import.meta.env.VITE_OMDBAPI_KEY
        }`
      )
      .then((response) => setMovies(response.data.Search))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form className="bg-dark text-white">
        <Container className="p-5">
          <Form.Group className="mb-1" controlId="formBasicTerm">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              onInput={(e) => setSearchTerm(e.currentTarget.value)}
              type="text"
              placeholder="Enter movie title"
            />
          </Form.Group>
          <Button onClick={searchMovies} variant="primary" type="button">
            Search
          </Button>
        </Container>
      </Form>
      <SearchResults movies={movies} />
    </>
  );
};

export default Search;
