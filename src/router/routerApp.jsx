import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "../App";
import PaginaUno from "../pages/PaginaUno.jsx";
import PaginaDos from "../pages/PaginaDos.jsx";


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        // Rutas con NavBar y Footer
        <Route element={<App />}>
          <Route path="/" element={<PaginaUno/>} />
        </Route>
        // Rutas sin NavBar y Footer
        <Route path="/PaginaDos" element={<PaginaDos />} />
      </Routes>
    </BrowserRouter>
  );
}