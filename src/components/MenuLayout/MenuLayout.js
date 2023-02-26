import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Div, Main, Footer } from './MenuLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const MenuLayout = () => {
  return (
    <>
      <Div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </Div>
      <Main>
        <Suspense fallback={<>Loading........</>}>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer />
      <Footer>Copyright © 2023 </Footer>
    </>
  );
};
export default MenuLayout;
