import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthLayout from "./components/AuthLayout";

export default function RoutesComponent() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
