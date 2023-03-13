import {Button, TextField} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import "./styles.css";

export default function Navbar() {
    return(
        <div>
            Navbar

            

            <TextField label="O que você procura"/>
            
            <Button color="secondary" variant="contained">Entrar</Button>
            <ShoppingCart className="carrinho"/>
           
        </div>
    )
}