import './reset.css';
import './style.css';

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
    return(
        <>

        <h2>Coleções em destaque</h2>

        <section className="row">
            <div className="col1">
                <div className='OFF'>
                    <p>30% OFF</p>
                </div>
                <h1>Novo drop Supreme</h1>
                <h3>Comprar</h3>
                <img id='Supreme' src={Supreme} alt='se fude'/>
            </div>
            
            <div className="col2">                
                <div className='OFF'>
                    <p>30% OFF</p>
                </div>
                <h1>Coleção Adidas </h1>
                <h3>Comprar</h3>
                <img id='Adidas' src={Adidas} alt='se fude'/>
            </div>

            <div className="col3">
                <div className='OFF'>
                    <p>30% OFF</p>
                </div>
                <h1>Novo Beats Bass</h1>
                <h3>Comprar</h3>
                <img id='Fone' src={Fone} alt='se fude'/>
            </div>
        </section>
      
        <h1>Coleções em destaque</h1>
        <div className="row">
            <div className="col">
                <img id='blusa' src={blusa} alt='se fude'/>
                <p>Camisetas</p>
            </div>
            
            <div className="col">                
                <img id='calça' src={calça} alt='se fude'/>
                <p>Calças</p>
            </div>

            <div className="col">
                <img id='calça' src={calça} alt='se fude'/>
                <p>Bónes</p>
            </div>

            <div className="col">
                <img id='head' src={head} alt='se fude'/>
                <p>Headphones</p>
            </div>

            <div className="col">
                <img id='tenis' src={tenis} alt='se fude'/>
                <p>Tênis</p>
            </div>
        </div>
      
        <h1>Produtos em alta</h1>
        <a>Ver todos<img id='Line' src={Line} alt='se fude'/></a>
        <div className="row">
            <div className="col">
                <p>30% OFF</p>
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

        <div className="col">
                <p>30% OFF</p>
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
                <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

            <div className="col">
               <img id='KSwiss' src={KSwiss} alt='se fude'/>
                <p>K-Swiss V8 - Masculino</p>
                <p>$200$100</p>
            </div>

        </div>

        </>
    )
}