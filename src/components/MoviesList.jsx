import { useState } from 'react';
import { useEffect } from 'react';
import MovieItem from './MovieItem';
import './MoviesList.css';

const url = 'https://api.themoviedb.org/3';
const path = '/discover/movie?sort_by=popularity.desc';
const apiKey = '&api_key=9813ce01a72ca1bd2ae25f091898b1c7';
const apiUrl = url + path + apiKey;

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchingMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(apiUrl);
        const data = await res.json();
        setMoviesList(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchingMovies();
  }, []);
  return (
    <div className="movies-container">
      {moviesList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
