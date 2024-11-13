import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const loginData = localStorage.getItem("loginData");

  if (!loginData) {
    return <Navigate to="/" />; // Redirect to login if not authenticated
  }

  return children;
};

export default ProtectedRoute;
