import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/Data";

const PrivateRoute = ({ children }) => {
  const Authobj = useContext(AuthContext);
  let { user } = Authobj;
  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};
export default PrivateRoute;