import React from 'react';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
// import Produtos from '../../components/Produtos';
import { Container, Grid, Avatar } from '@mui/material';

export default function Home()
{
    return(
        <>
            {/* <Navbar/>
            <Menu/>
            <Carousel/> */}
            <ColecoesDestaque/>
            {/* <Produtos/> */}




            {/* <Grid container spacing={3}>
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
            </Grid> */}
        </>
    );
}
