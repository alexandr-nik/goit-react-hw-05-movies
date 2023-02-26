import { ApiTmdbReviewMovie } from 'services/ApiTmdb/ApiTmdb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Div, Mes, P } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [noReview, setNoReview] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const getMovie = async () => {
      try {
        await ApiTmdbReviewMovie(id, {
          signal: controller.signal,
        })
          .then(results => {
            setReviewsMovie(results.data.results);
            return results.data.results;
          })
          .then(res => {
            if (!res.length) setNoReview(false);
          });
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
    return controller.abort();
  }, [id]);
  if (!reviewsMovie) return;
  return (
    <>
      {loading && <div>Loading....</div>}
      {reviewsMovie.length >= 1 &&
        reviewsMovie.map((el, index) => {
          return (
            <Div key={index}>
              <P>Author: {el.author}</P>
              <p>{el.content}</p>
            </Div>
          );
        })}

      {!noReview && <Mes>Sorry no reviews on this film</Mes>}
    </>
  );
};
export default Reviews;
