import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ redirectPath = "/login", children }) => {
  const isLogin = localStorage.getItem("email");
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

export default AuthRoute;
