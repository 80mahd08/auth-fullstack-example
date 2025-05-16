import { useNavigate } from "react-router-dom";
import { isAuth } from "./Routes";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (await !isAuth()) {
        navigate("/auth/login");
      }
    };
    checkAuth();
  }, []);
  return (
    <div>
      hello
      <button
        onClick={async () => {
          const res = await fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            credentials: "include",
          });
          if (res.ok) {
            navigate("/auth/login");
          }
        }}
      >
        logout
      </button>{" "}
    </div>
  );
}

export default App;
