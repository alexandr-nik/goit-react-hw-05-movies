import axios from 'axios';

const TMDBKey = 'api_key=40daafed88aae402f7e38ef56db50663';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/trending/all/day?api_key=40daafed88aae402f7e38ef56db50663
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/search/movie?query=cat&api_key=40daafed88aae402f7e38ef56db50663

export const ApiTmdbId = async id => {
  return await axios.get(`movie/${id}?${TMDBKey}`).then(data => data);
};

export const ApiTmdbTrendMovie = async () => {
  return await axios.get(`trending/movie/week?${TMDBKey}`).then(data => data);
};

export const ApiTmdbSearchMovie = async query => {
  return await axios
    .get(`search/movie?query=${query}&${TMDBKey}&language=en-US&page=1`)
    .then(data => data);
};

export const ApiTmdbCastMovie = async id => {
  return await axios.get(`movie/${id}/credits?${TMDBKey}`).then(data => data);
};

export const ApiTmdbReviewMovie = async id => {
  return await axios.get(`movie/${id}/reviews?${TMDBKey}`).then(data => data);
};
