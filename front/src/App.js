import {BrowserRouter, Routes, Route} from "react-router-dom";

import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import MeusPedidos from "./pages/MeusPedidos";
import DetalhesProduto from "./pages/DetalhesProduto";

import "./index.css";


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element= {<Home/>} />
           <Route path="/produtos" element={<Produtos/>} />
           <Route path="/categorias" element={<Categorias/>} />
           <Route path="/meus-pedidos" element={<MeusPedidos/>} />
           <Route path="/produtosx" element={<DetalhesProduto/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}