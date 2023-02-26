import { ApiTmdbId } from 'services/ApiTmdb/ApiTmdb';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Averege,
  Box,
  ButtonBack,
  H3,
  P,
  StyleNavLink,
  Ul,
  Wrapper,
} from './MovieCard.styled';
import noImage from '../../image/no-image.png';
import { message } from 'components/message/message';
const MovieCard = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const goBack = () => navigate(backLink);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovie() {
      try {
        await ApiTmdbId(id, {
          signal: controller.signal,
        }).then(results => setCurrentMovie(results.data));
      } catch (error) {
        message('error');
        throw new Error(error);
      }
    }
    getMovie();
    return controller.abort();
  }, [id]);
  if (!currentMovie.id) return;

  return (
    <Box>
      <ButtonBack type="button" onClick={goBack}>
        &lArr; Back
      </ButtonBack>
      <H3>{currentMovie.title}</H3>
      <Wrapper>
        <div>
          <img
            src={
              currentMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`
                : `${noImage}`
            }
            alt={currentMovie.title || currentMovie.original_name}
            width="300px"
            heigth="300px"
          />
        </div>
        <div>
          <Averege> Averege: {currentMovie.vote_average}</Averege>
          <p>{currentMovie.overview}</p>
        </div>
      </Wrapper>
      <P>Genres</P>
      <Ul>
        {currentMovie.genres.map(el => {
          return <li key={el.id}>-{el.name}-</li>;
        })}
      </Ul>
      <P>Additional information</P>
      <StyleNavLink to="Cast" state={{ from: backLink }}>
        Cast
      </StyleNavLink>
      <StyleNavLink to="reviews" state={{ from: backLink }}>
        Reviews
      </StyleNavLink>
      <Outlet />
    </Box>
  );
};
export default MovieCard;
