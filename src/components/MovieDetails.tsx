import { MovieDetail } from "../util/movie.interface";

const MovieDetails = (props: {movie:MovieDetail}) => {
  return (
    <div key={props.movie.id} className="movie-container">
      <h2>{props.movie.title}</h2>
      {props.movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
      )}
      <p>{props.movie.release_date.toString()}</p>
    </div>
  );
};

export default MovieDetails;
