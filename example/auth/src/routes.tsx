import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
