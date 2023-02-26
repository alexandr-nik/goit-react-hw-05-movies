import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { message } from 'components/message/message';
import SearchBar from 'components/SearchBar/SearchBar';
import { ApiTmdbSearchMovie } from 'services/ApiTmdb/ApiTmdb';
const ShowMovieList = lazy(() =>
  import('../components/ShowMovieList/ShowMovieList')
);

const Movie = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const location = useLocation();
 
  const [searchParams, setSearchParams] = useSearchParams();

  const submitQuery = q => {
    setSearchParams({ q });
   
  };

  useEffect(() => {
    const query = searchParams.get('q')) 
     
    if (!query) return;
    const controller = new AbortController();
    async function getMovie() {
      try {
        await ApiTmdbSearchMovie(query, {
          signal: controller.signal,
        }).then(results => {
          if (results.data.total_results === 0) {
            message('films not found');
          }
          setSearchMovie(results.data.results);
        });
      } catch (error) {
        message(error);
        throw new Error(error);
      }
    }
    getMovie();
    return controller.abort();
  }, [searchParams]);
  return (
    <>
      <SearchBar submitQuery={submitQuery} />
      <Suspense fallback={<div>Loading....</div>}>
        {searchMovie.length >= 1 && (
          <ShowMovieList results={searchMovie} location={location} />
        )}
      </Suspense>
    </>
  );
};
export default Movie;
