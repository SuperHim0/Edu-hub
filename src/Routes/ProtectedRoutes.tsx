
import {  useEffect, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJwt} from "../Slice/JwtSlice"; // replace with actual paths
import { errorNotification } from "../utility/NotificationUtil"; // replace with actual paths
import { removeUser } from "../Slice/UserSlice";

interface ProtectedRoutesProps {
        children: JSX.Element,
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  // const token = useSelector((state: any) => state.jwt);
  // const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const jwt = useSelector((state : any) => state.jwt);
  const user = useSelector((state : any) => state.user);
  
  const isAuthenticated = jwt && !user.error;

  useEffect(() => {
    if (!isAuthenticated && window.onload) {
      dispatch(removeJwt());
      dispatch(removeUser());
      errorNotification("Token is expired or invalid, please login again");
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;