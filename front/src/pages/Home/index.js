import React from "react";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Produto from "../../components/Produto";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
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
        
    
    <Container>
    <Navbar/>
        <Menu/> 
        <Carousel/>
        <ColecoesDestaque/>
        <Footer/>
    </Container>
    
    
 </div>    
            
        
    )

}