import { Avatar, Container, Grid } from "@mui/material";

import camiseta from "./img/camiseta.svg";
import calça from "./img/calça.svg";
import bone from "./img/bone.svg";
import tenis from "./img/tenis.svg";
import fone from "./img/fone.svg";
import camisetaROSA from "./img/camisetaROSA.svg";
import calcaROSA from "./img/calcaROSA.svg";
import boneROSA from "./img/boneROSA.svg";
import tenisROSA from "./img/tenisROSA.svg";
import foneROSA from "./img/foneROSA.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function Icones() {

    const [ativo,setAtivo] = React.useState(0)

    const colecoes = [
  { nome: "Camisetas", imagem: camiseta, imagemAtiva: camisetaROSA},
  { nome: "Calças", imagem: calça, imagemAtiva: calcaROSA },
  { nome: "Bonés", imagem: bone, imagemAtiva: boneROSA },
  { nome: "Headphones", imagem: fone, imagemAtiva: foneROSA},
  { nome: "Tênis", imagem: tenis, imagemAtiva: tenisROSA },
];

const Sections = () => {
    return colecoes.map((cada, posicao) => {
        return (

            <Grid item className="iconeslinks" onClick={() => setAtivo(posicao)}>
                <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                        <img src={(posicao === ativo) ? cada.imagemAtiva : cada.imagem}></img>
                </Avatar>
                <Link to="">{cada.nome}</Link>
            </Grid>
        );
    }); 
}

    return (
        <>
          <div className="bgGray">
             <Container>
                    <h3 className="h3dest">Coleções em destaque</h3>
                    <Grid container  direction="row" justifyContent="center" alignItems="center"  spacing={2}> 
                        <Sections/>
                    </Grid>
             </Container>
          </div>
          
        </>
    )
}