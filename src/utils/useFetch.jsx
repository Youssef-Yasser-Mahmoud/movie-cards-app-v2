import { useEffect, useState } from 'react';

function useFetch(apiUrl) {
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
  }, [apiUrl]);

  return [moviesList, isLoading];
}

export default useFetch;
