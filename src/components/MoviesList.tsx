import { MovieDetail } from "../util/movie.interface";
import MovieDetails from "./MovieDetails";

const MoviesList = (props: {movies:MovieDetail[]}) => {
  

  const content = props.movies.map((movie) => {
    return <MovieDetails movie={movie} key={movie.id} />;
  });

  return <>{content}</>;
};

export default MoviesList;
