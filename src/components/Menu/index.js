import {Link, useLocation} from "react-router-dom";
import "./styles.css";

export default function Menu() {
    const Location = useLocation();

    const isActive = (url) => {
        if (Location.pathname === url) {
            return "active";
        }
        return "";
    }

    return (
        <div className="menu">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/produtos" className={isActive('/produtos')}>Produtos</Link>
            <Link to="/categorias" className={isActive('/categorias')}>Categorias</Link>
            <Link to="/meus-pedidos" className={isActive('/meus-pedidos')}>Meus Pedidos</Link>
        </div>
    )
}
