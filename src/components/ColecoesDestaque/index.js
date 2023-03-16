import './reset.css';
import './style.css';
import { Avatar, Grid } from '@mui/material';

//importação das imgs
import Supreme from "./img/Supreme.png";
import Adidas from "./img/Adidas.png";
import Fone from "./img/Fone.png";
import blusa from "./img/blusa.png";
import calça from "./img/calça.png";
import head from "./img/head.png";
import tenis from "./img/tenis.png";
import KSwiss from "./img/KSwiss.png";
import Line from "./img/Line.png";


export default function ColecoesemDestaque(){

    const roupas = [
        { nome: "blusa", img: blusa },
        { nome: "calça", img: calça },
        { nome: "calça", img: calca },
        { nome: "head", img: head },
        { nome: "tenis", img: tenis },
    ];

    const Sections = () => {
        return roupas.map((cada)) => {
            return (

                <Grid item>
                    <Avatar sx={{bgcolor:"white", height:"104px", width: "104px"}}
                </Grid>
            )
        }
    }























    return(
        <>
      
        <h1>Coleções em destaque</h1>

        <div className="row">
            <div className="col">
                <img id='blusa' src={blusa} alt=''/>
                <p>Camisetas</p>
            </div>
            
            <div className="col02">                
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
}