import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Produto from "../../components/Produto";
import Footer from "../../components/Footer";

import { Container, Grid } from "@mui/material";
import React from 'react';
import './style.css';


export default function Checkbox() {
    return (
       
      <body>
         
         <Navbar/>
         <Menu/>
     <Container className='body-check'> 
      <div className='custom-checkbox'>
          <div>
          <p><strong>Filtrar por</strong></p>
          <hr/>
          <p><strong>Marka</strong></p>
         <input id="checkbox1" type="checkbox"></input>
          <label for="checkbox1">Adiddas</label>
          </div>
          <div>
          <input id="checkbox2" type="checkbox"></input>
          <label for="checkbox2">Calenciaga</label>
          </div>
  
          <div>
          <input id="checkbox3" type="checkbox"></input>
          <label for="checkbox3">K-Swiss</label>
          </div>
  
          <div>
          <input id="checkbox4" type="checkbox"></input>
          <label for="checkbox4">Nike</label>
          </div>
          
          <div>
          <input id="checkbox5" type="checkbox"></input>
          <label for="checkbox5">Puma</label>
          </div>
  
          <div>
            <p><strong>Categorias</strong></p>
            <input id="checkbox6" type="checkbox"></input>
            <label for="checkbox6">Esporte e Lazer</label>
          </div>
  
          <div>
          <input id="checkbox7" type="checkbox"></input>
          <label for="checkbox7">Casual</label>
          </div>
  
          <div>
          <input id="checkbox8" type="checkbox"></input>
          <label for="checkbox8">Utilitário</label>
          </div>
  
          <div>
          <input id="checkbox9" type="checkbox"></input>
          <label for="checkbox9">Corrida</label>
          </div>
  
          <div>
            <p><strong>Gênero</strong></p>
            <input id="checkbox10" type="checkbox"></input>
            <label for="checkbox10">Masculino</label>
          </div>
  
          <div>
          <input id="checkbox11" type="checkbox"></input>
          <label for="checkbox11">Feminino</label>
          </div>
  
          <div>
          <input id="checkbox12" type="checkbox"></input>
          <label for="checkbox12">Unisex</label>
          </div>
          
        <div class="custom-radio1">
          <p><strong>Estado</strong></p>
          <input id="radio1" name="question" value="2" type="radio"></input>
          <label for="radio1">Novo</label>
        </div>
       
        <div class="custom-radio2">
          <input id="radio2" name="question" value="2" type="radio"></input>
          <label for="radio2">Usado</label>
        </div>
  </div>
  </Container> 

  <Container className='sapatos'>
    <Grid container spacing={1}>
        
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
    <Grid container spacing={2}>
        
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

      <Footer/>
      </body>
    );
  }