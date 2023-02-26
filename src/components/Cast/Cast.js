import { ApiTmdbCastMovie } from 'services/ApiTmdb/ApiTmdb';
import { message } from 'components/message/message';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../../image/no-image.png';
import { Img, Li, P, Ul } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [creditsMovie, setCreditstMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noCast, setNoCast] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const getMovie = async () => {
      try {
        await ApiTmdbCastMovie(id, {
          signal: controller.signal,
        })
          .then(results => {
            setCreditstMovie(results.data.cast);
            return results.data.cast;
          })
          .then(res => {
            if (!res.length) setNoCast(false);
          });
      } catch (error) {
        message(error);
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
    return controller.abort();
  }, [id]);

  return (
    <Ul>
      {loading && <div>Loading....</div>}
      {creditsMovie.length >= 1 &&
        creditsMovie.map((el, index) => {
          return (
            <Li key={index}>
              <Img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : `${noImage}`
                }
                alt={el.name || el.original_name}
              />
              <p>{el.original_name}</p>
            </Li>
          );
        })}
      {!noCast && <P>Sorry no cast on this film</P>}
    </Ul>
  );
};
export default Cast;
