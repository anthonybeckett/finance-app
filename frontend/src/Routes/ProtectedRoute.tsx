import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Context/useAuth";

type ProtectedRouteProps = { children: React.ReactNode };

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
}: ProtectedRouteProps): JSX.Element => {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

    return isLoggedIn() ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
