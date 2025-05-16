import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h2>Auth Section</h2>
      <Outlet /> {/* This renders the nested route component */}
    </div>
  );
}
