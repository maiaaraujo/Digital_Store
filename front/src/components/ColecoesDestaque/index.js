import { Avatar, Container, Grid } from '@mui/material';

import blusa from "./img/blusa.svg";
import fone from "./img/fone.svg";
import tenis from "./img/tenis.svg";
import calça from "./img/calça.svg";
import boné from "./img/boné.png";
import tenis02 from "./img/tenis02.png";
import Produto from '../Produto';


export default function ColecoesDestaque (){

    const roupas = [
        { nome: "Camisetas", imagem: blusa },
        { nome: "Bonés", imagem: boné },
        { nome: "Calças", imagem: calça },
        { nome: "Headphones", imagem: fone },
        { nome: "Tênis", imagem: tenis },
    ];

    const Sections = () => {
        return roupas.map((cada, index) => {
            return (

                <Grid key={index} item>
                    <Avatar sx={{bgcolor:"white", height:"104px", width: "104px"}}>
                        <img src={cada.imagem}></img>
                    </Avatar>
                    <p>{cada.nome}</p>
                </Grid>
            );
        });
    }

    return (
        <>
        <div className="bg">
            <Container>
                <h3>Coleções em destaque </h3>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Sections/>
                </Grid>
            </Container>
        </div>
    </>
    )
}

    <Container>
         <Grid container spacing={3}>

            <Grid item xs={3}>
                <Produto />
            </Grid>
                
             <Grid item md={3}>
                <Produto/>
             </Grid>
            
             <Grid item md={3}>
                <Produto/>
             </Grid>
                
             <Grid item md={3}> 
                <Produto/>
             </Grid>

             <Grid item md={3}> 
                <Produto/>
             </Grid>

             <Grid item md={3}> 
                <Produto/>
             </Grid>

             <Grid item md={3}> 
                <Produto/>
             </Grid>

             <Grid item md={3}> 
                <Produto/>
             </Grid>

        </Grid>
    </Container>

