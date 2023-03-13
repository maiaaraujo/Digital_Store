import {Button, TextField} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import "./styles.css"

export default function Navbar() {
    return(
        <div>
            Navbar

            

            <TextField label="O que você procura"/>
            
            <Button sx={{backgroundColor: pink['A200'],color:"white"}}>Entrar</Button>
            <ShoppingCart className="carrinho"/>
           
        </div>
    )
}