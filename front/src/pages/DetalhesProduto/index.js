import { useParams } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import adidas from "./img/adidas.png";
import air from "./img/air.png";
import Sneakers from "./img/Sneakers.png";
import nike from "./img/nike.jpg";
import nike1 from "./img/nike1.jpg";

import React from "react";

export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);

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
                        <Card onClick={() => setAtual(posicao)}>
                            <img src={cada} width="100%"/>
                        </Card>
                    </Grid>
                
            );
        });
    }

    return (
        <div>
            Detalhes do Produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                 <Card align="center">
                    <img width="400px" src={imagens[atual]}/>
                 </Card>


                   <Grid container spacing={2}>
                    
                        <Items/>


                    </Grid>
                
                </Grid>

                

                <Grid item xs={5}>
                Informações
                </Grid>

            </Grid>
        </div>
    )
}

