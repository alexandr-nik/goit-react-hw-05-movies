import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiTmdbTrendMovie } from 'services/ApiTmdb/ApiTmdb';
const ShowMovieList = lazy(() =>
  import('../components/ShowMovieList/ShowMovieList')
);
const Home = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const controller = new AbortController();
    const getTrendMovie = async () => {
      try {
        await ApiTmdbTrendMovie({
          signal: controller.signal,
        }).then(results => setResults(results.data.results));
      } catch (error) {
        throw new Error(error);
      }
    };
    getTrendMovie();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowMovieList results={results} location={location} />
    </Suspense>
  );
};
export default Home;
