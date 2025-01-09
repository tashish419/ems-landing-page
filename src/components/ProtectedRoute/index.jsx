// import { useSelector } from "react-redux";
// import { Navigate, useParams } from "react-router-dom";

// const ProtectedRoute = ({children}) => {
//     const { isAuthenticated, user } = useSelector(state => state.auth);
//     const { storeName } = useParams();

//     if(!isAuthenticated){
//         return <Navigate to="/login" />
//     }

//     if(user.displayName !== storeName){
//         return <Navigate to="/login" />
//     }

//     return children;
// }

// export default ProtectedRoute;
