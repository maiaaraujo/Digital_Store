import React from "react";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Produto from "../../components/Produto";
import { Grid } from "@mui/material";


export default function Home () {
    return (
  <div>
        <Navbar/>
        <Menu/> 
        Página de Home 
        <Carousel/>
        <ColecoesDestaque/>
    <Grid container>
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
 </div>    
            
        
    )

}