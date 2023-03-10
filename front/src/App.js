import {BrowserRouter, Routes, Route} from "react-router-dom";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";

function Home () {
  return (
    <div>
      <h1>Hey You</h1>
      <button>Clique aqui</button>
    </div>
  )
}

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