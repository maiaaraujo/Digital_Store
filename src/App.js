import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import"./index.css";
import ColecoesDestaque from "./components/ColecoesDestaque";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
