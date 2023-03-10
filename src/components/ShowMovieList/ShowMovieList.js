import PropTypes  from 'prop-types';
import { CustomLink, H3, Img, Li, Ul } from './ShowMovies.styled';
import noImage from '../../image/no-image.png';

const ShowMovieList = ({ results, location }) => {
  return (
    <Ul>
      {results.length >= 1 &&
        results.map(item => {
          return (
            <Li key={item.id}>
              <CustomLink to={`/movie/${item.id}`} state={{ from: location }}>
                <H3>{item.title || item.original_name}</H3>
                <Img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : `${noImage}`
                  }
                  alt={item.title || item.original_name}
                />
              </CustomLink>
            </Li>
          );
        })}
    </Ul>
  );
};
export default ShowMovieList;

ShowMovieList.propTypes={
  results: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_name: PropTypes.string,
}),),
location: PropTypes.shape({
  pathname: PropTypes.string.isRequired,
})
}