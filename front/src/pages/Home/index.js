import React from "react";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Icones from "../../components/Icones";
import Produto from "../../components/Produto";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import OfertaEspecial from "../../components/OfertaEspecial";
import Footer from "../../components/Footer";



export default function Home () {
    
    // const [listaProdutos, setListaProdutos] = React.useState ([]);

    // React.useEffect(() => {
    //     async function buscarProdutos(){
    //       let resposta = await 
    //        fetch("https://63388a25383946bc7fe9a891.mockapi.io/digitalstoreusers")
    //       .then(res => res.json())
    //       .then(lista => {
    //         setListaProdutos(lista)
    //       });

    //     }
    // }, [])

    return (
      <div>
        <Navbar/>
        <Menu/> 
        <Carousel/>
        <ColecoesDestaque/>
        <Icones/>
        
    
    <Container>
    <Grid container spacing={3}>
        
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
    <Grid container spacing={3}>
        
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
    
    <OfertaEspecial/>
    <Footer/> 
</div>    
     )

}