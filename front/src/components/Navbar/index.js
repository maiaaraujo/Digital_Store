import {Button, TextField} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import "./styles.css"
import Vector from "./Vector.png";

export default function Navbar() {
    return(
        <div>
            <img className="Vector" src={Vector}/>
            <h1 className="logo">Digital Store</h1>
            <TextField className="input" label="O que você procura"/>
            
            <Button className="botao" sx={{backgroundColor: 
            pink['A200'],color:"white"}}>Entrar</Button>
            <ShoppingCart className="carrinho"/>
           
        </div>
    )
}