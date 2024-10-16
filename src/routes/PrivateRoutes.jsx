import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return (
        // Redirect to login and pass the attempted route as state
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoutes;
