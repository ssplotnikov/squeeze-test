import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../store/Auth/authSlice';

const RequireAuth = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  if (!token) return <Navigate to='/login' state={{ from: location }} />;

  return children;
};

export default RequireAuth;
