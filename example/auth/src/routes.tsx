import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
