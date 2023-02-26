import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './Pages/Home';
import MenuLayout from './components/MenuLayout/MenuLayout';
import NotFound from './Pages/NotFound';
import Movie from './Pages/Movie';
const MovieCard = lazy(() => import('./components/MovieCard/MovieCard'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/:id" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
