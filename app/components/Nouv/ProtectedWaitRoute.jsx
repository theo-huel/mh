// components/ProtectedWaitRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedWaitRoute = ({ children }) => {
    const hasRegistered = sessionStorage.getItem("hasRegistered");

    if (!hasRegistered) {
        // Redirection vers la page d'accueil si pas autorisé
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedWaitRoute;
