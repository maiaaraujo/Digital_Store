import './style.css';
import { Avatar, Container, Grid } from '@mui/material';

import blusa from "./img/blusa.svg";
import fone from "./img/fone.svg";
import tenis from "./img/tenis.svg";
import calça from "./img/calça.svg";
// import KSwiss from "./img/KSwiss.png";
// import Line from "./img/Line.png";


export default function ColecoesDestaque (){

    const roupas = [
        { nome: "Blusa", imagem: blusa },
        { nome: "Calça", imagem: calça },
        { nome: "Calça", imagem: calça },
        { nome: "Fone", imagem: fone },
        { nome: "Tênis", imagem: tenis },
    ];

    const Sections = () => {
        return roupas.map((cada) => {
            return (

                <Grid item>
                    <Avatar sx={{bgcolor:"white", height:"104px", width: "104px"}}>
                        <img src={cada.imagem}></img>
                    </Avatar>
                    <p>{cada.nome}</p>
                </Grid>
            );
        });
    }

    return (
        <>
        <div className="bg">
            <Container>
                <h3>Coleções em destaque</h3>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Sections/>
                </Grid>
            </Container>
        </div>
    </>
    )
}

            {/* <div className="col02">                
                <img id='calça' src={calça} alt=''/>
                <p>Calças</p>
            </div>

            <div className="col03">
                <img id='calça' src={calça} alt=''/>
                <p>Bónes</p>
            </div>

            <div className="col04">
                <img id='head' src={head} alt=''/>
                <p>Headphones</p>
            </div>

            <div className="col05">
                <img id='tenis' src={tenis} alt=''/>
                <p>Tênis</p>
            </div>
        </div>
      
        <h1>Produtos em alta</h1>
        <a>Ver todos<img id='Line' src={Line} alt=''/></a>
        <div className="row">
            <div className="col">
                <p>30% OFF</p>
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

        <div className="col">
                <p>30% OFF</p>
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
               <img id='KSwiss' src={KSwiss} alt=''/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

        </div>

        </>
    )
} */};