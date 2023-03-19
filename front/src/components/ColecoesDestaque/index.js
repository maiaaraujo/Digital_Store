import React from "react";
import "./style.scss";
import { Container, Button, Chip } from '@mui/material';
import blusa01 from "../ColecoesDestaque/img/blusa01.svg";
import tenis01 from "../ColecoesDestaque/img/tenis01.svg";
import fone01 from "../ColecoesDestaque/img/fone01.svg";


export default function ColecaoDestaque() {

    return (
        <>
            <Container>
                <div className="segura">
                    <div className="fundo">
                        <div className="alinharItens">
                            <Chip label="30% OFF" sx={{ backgroundColor: "#E7FF86", fontWeight: "Bold" }} style={{ width: "85px", marginTop: "20px" }} />
                            <h1>Novo drop Supreme</h1>
                            <Button className="buttonRosa">Comprar</Button>
                        </div>
                        <div>
                            <img src={blusa01} className="imagens" alt="blusa com uma logo da supreme vermelha no centro da camisa" />
                        </div>
                    </div>

                    <div className="fundo">
                        <div className="alinharItens">
                            <Chip label="30% OFF" sx={{ backgroundColor: "#E7FF86", fontWeight: "Bold" }} style={{ width: "85px", marginTop: "20px" }} />
                            <h1>Coleção Adidas</h1>
                            <Button className="buttonRosa">Comprar</Button>
                        </div>
                        <div>
                            <img src={tenis01} className="imagens" alt="blusa com uma logo da supreme vermelha no centro da camisa" />
                        </div>
                    </div>

                    <div className="fundo">
                        <div className="alinharItens">
                            <Chip label="30% OFF" sx={{ backgroundColor: "#E7FF86", fontWeight: "Bold" }} style={{ width: "85px", marginTop: "20px" }} />
                            <h1>Novo Beat Bass</h1>
                            <Button className="buttonRosa">Comprar</Button>
                        </div>
                        <div>
                            <img src={fone01} className="imagens" alt="blusa com uma logo da supreme vermelha no centro da camisa" />
                        </div>
                    </div>

                    

                    
                </div>
            </Container>
        </>
    )
}