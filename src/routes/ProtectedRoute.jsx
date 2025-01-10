import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const {isAuthenticated, user }= useSelector((state) => state.auth);
  const { storeName } = useParams();
  const userName = user?.displayName.replace(/\s+/g, "");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if(userName !== storeName){
    return <Navigate to="/login"/>;
  }

  return <Outlet />;
};

export default ProtectedRoute;