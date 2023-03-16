import { useParams } from "react-router-dom";
import Zoom from "react-img-zoom";
import { Button, Card, Fab, Grid, Rating, Stack, } from "@mui/material";
import adidas from "./img/adidas.png";
import air from "./img/air.png";
import Sneakers from "./img/Sneakers.png";
import nike from "./img/nike.jpg";
import nike1 from "./img/nike1.jpg";


import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";

import "./styles.scss";

export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);
    const [color, setColor] = React.useState(0);

    const imagens = [
        adidas,
        Sneakers,
        air,
        nike,
        nike1,
    ];

    const Items = () => {
        

        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                        <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && { 
                              border: "2px solid red"}}>
                            <img src={cada} width="100%"/>
                        </Card>
                    </Grid>
                 );
        });
    }

    function anterior(){
        if(atual === 0){
            setAtual(imagens.length - 1);
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }

    React.useEffect(() => {
          let intervalo = setInterval(proximo, 3000);

          return () => clearInterval(intervalo);
       });
    
    return (
        <div className="product-details">
            Detalhes do Produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                 <Card align="center">
                    <Stack direction="row" sx={{
                        justifyContent: "space-between",
                        alignItems: "center"
                  }}> 
                        <ChevronLeft sx={{fontSize:"60px"}} onClick={() => anterior()}/>
                        {imagens.map((img, key) => (
                            <div hidden={key !== atual}>
                                <Zoom width={900} height={400} zoomScale={2} img={img}/>
                            </div>
                        ))}  
                        
                        
                        <ChevronRight sx={{fontSize:"60px"}} onClick={proximo}/>
                    </Stack>
                   
                 </Card>

            <Grid container spacing={2}>
                    
                        <Items/>
   </Grid>
                
</Grid>

                <Grid item xs={5}>
                    <div className="title">
                        Tênis Nike
                    </div>
                    
                    <div className="ref">
                        Casual | Nike
                    </div>
                    
                    <div className="reviews">
                        <Rating value={3}></Rating>
                    </div>

                    <div>
                        R$299
                    </div>

                    <div>
                        Descrição do produto
                    </div>

                    <div>
                        Tamanho
                    </div>

                    <div>
                       <p>Cor <small>{color}</small></p>
                       
                       <Fab onClick={() => setColor('Azul')} color="primary"></Fab>
                       <Fab onClick={() => setColor('Roxo')} color="secondary"></Fab>
                       <Fab onClick={() => setColor('Verde')} color="success"></Fab>
                       <Fab onClick={() => setColor('Vermelho')} color="error"></Fab>
                    </div>
                    <br/>

                    <Button className="buy" variant="contained">COMPRAR</Button>
                </Grid>

            </Grid>
        </div>
    )
}

