import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../hoc/RequireAuth';
import ContentPage from '../pages/ContentPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const MainRoute = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <ContentPage />
          </RequireAuth>
        }
      />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
