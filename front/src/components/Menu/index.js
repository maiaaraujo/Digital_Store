import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categor'ias</Link>
            <Link to="/meus-pedidos">Meus Pedidos</Link>
        </>
    );
}