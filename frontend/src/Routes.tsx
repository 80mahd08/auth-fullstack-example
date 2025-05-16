import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import { useLocation } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export const isHe = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};

export const isAuth = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/me", {
      credentials: "include",
    });
    return res.ok;
  } catch {
    return false;
  }
};
