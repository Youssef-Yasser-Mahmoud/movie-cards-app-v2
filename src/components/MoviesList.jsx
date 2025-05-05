import MovieItem from './MovieItem';
import './MoviesList.css';
import useFetch from '../utils/useFetch';
import Spinner from './Spinner';

const url = 'https://api.themoviedb.org/3';
const path = '/discover/movie?sort_by=popularity.desc';
const apiKey = '&api_key=9813ce01a72ca1bd2ae25f091898b1c7';
const apiUrl = url + path + apiKey;

function MoviesList() {
  const [moviesList, isLoading] = useFetch(apiUrl);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='movies-container'>
      {moviesList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
