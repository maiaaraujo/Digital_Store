import {Button, Grid, TextField,} from "@mui/material";
import { pink } from "@mui/material/colors";
import "./styles.css"
import Vector from "./Vector.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
    return(
        <div className="navbar">
            <Grid container>
                <Grid item>
                    <img className="Vector" src={Vector}/>
                </Grid>
               
                <Grid item>
                     <h1 className="logo">Digital Store</h1>
                </Grid>
               
                <Grid item>
                   <TextField className="input" label="Pesquisar produto..." variant="filled" />
                </Grid>
                
                <Grid item>
                <Button className="botao1" variant="text">Cadastre-se</Button>
                </Grid>

                <Grid item>
                   <Button className="botao" sx={{backgroundColor: 
                   pink['A200'],color:"white"}}>Entrar</Button>
                </Grid>

                <Grid item>
                    <ShoppingCartOutlinedIcon className="carrinho"/>
                </Grid>
          </Grid>
        </div>
    )
}