import React from "react";
import Carousel from "../../components/Carousel";
import OfertaEspecial from "../../components/OfertaEspecial";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";



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
        <Carousel/>
    
    <Container>
      
      <OfertaEspecial/>
    </Container>
    
    
 </div>    
            
        
    )

}