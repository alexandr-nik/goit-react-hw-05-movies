import {  useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiTmdbTrendMovie } from 'services/ApiTmdb/ApiTmdb';
import ShowMovieList from '../components/ShowMovieList/ShowMovieList';

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
         <ShowMovieList results={results} location={location} />
   
  );
};
export default Home;
