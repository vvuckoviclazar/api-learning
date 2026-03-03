const MovieCard = ({ movie }) => {
  return (
    <div className="col-3 text-white">
      <img className="w-50" src={movie.Poster} />
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
