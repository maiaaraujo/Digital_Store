import {BrowserRouter, Routes, Route} from "react-router-dom";

import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import MeusPedidos from "./pages/MeusPedidos";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

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
         </Routes>
      </BrowserRouter>
    </div>
  )
}