import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Function from "./pages/Functions";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Function />
            </div>
          }
        />
        <Route path="/function" element={<Function />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
