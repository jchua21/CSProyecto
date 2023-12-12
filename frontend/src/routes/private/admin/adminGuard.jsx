import { Outlet, redirect, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdmingGuard = () => {
  const { user } = useAuth();

  return (
    <>{user.role !== "user" ? <Outlet /> : <Navigate to="/auth/login" />}</>
  );
};

export default AdmingGuard;
