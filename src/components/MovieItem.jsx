import './MovieItem.css';

function MovieItem({ movie }) {
  return (
    <div className="movie-card">
      <img 
        className="movie-poster" 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.title}
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-overview">{movie.overview}</p>
        <div className="movie-stats">
          <div className="movie-rating">
            <span>Rating:</span>
            <span className="movie-rating-value">{movie.vote_average}</span>
          </div>
          <div className="movie-popularity">
            <span>Votes:</span>
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
