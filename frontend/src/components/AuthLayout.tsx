import { Link, Outlet } from "react-router-dom";
import { isAuth } from "../Routes";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (await isAuth()) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="auth-layout">
      <ul>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
        <li>
          <Link to="/auth/register">Register</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
