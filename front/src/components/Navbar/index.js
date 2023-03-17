import {Button, Grid, InputAdornment, TextField,} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { pink } from "@mui/material/colors";
import Vector from "./Vector.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./styles.css";

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
                <TextField className="input"
                InputProps={{
                endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,}} 
                        sx={{
                            width: 560,
                            marginLeft: 3,
                        }}
                        label="Pesquisar produto..."/>
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