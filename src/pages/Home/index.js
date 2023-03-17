import React from 'react';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import Produtos from '../../pages/Produtos';
import { Container, Grid, Avatar } from '@mui/material';
import Produto from '../../components/Produto';
import Footer from '../../components/Footer';
export default function Home()
{
    return(
 <>
            <Navbar/>
            <Menu/>
            <Carousel/>  
            <ColecoesDestaque/>

        <Container>

            <h3>Produtos em Alta</h3>

            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Produto />
                </Grid>
                <Grid item md={3}>
                    <Produto />
                </Grid>
                <Grid item md={3}>
                    <Produto />
                </Grid>
                <Grid item md={3}>
                    <Produto />
                </Grid>
                <Grid item md={3}>
                    <Produto />
                </Grid>

                <Grid item md={3}>
                    <Produto />
                </Grid>
                
                <Grid item md={3}>
                    <Produto />
                </Grid>
                
                <Grid item md={3}>
                    <Produto />
                </Grid>
                
            </Grid> 
        </Container>
            <Footer />
 </>

    );
}
