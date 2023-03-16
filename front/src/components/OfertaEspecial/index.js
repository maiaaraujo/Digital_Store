import React from 'react';
import tenis01 from './img/Laye1.svg';
import elipse from './img/Ellipse11.svg';
import './style.css';

export default function OfertaEspecial() {
    return (
        <>
            <section className="d-flex align-items-center justify-content-start OFmargem">
                <div className="OFsobreporImg">
                    <img src={elipse} className='OFedicaoelipse'/>
                    <img src={tenis01} className="OFedicaotenis01"/>
                </div>

                <div className="OFalinharItens">
                    <p className="OFcorRosa">Oferta Especial</p>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p className="OFtextoPequeno"> lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumvvlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    <button type='button' className="OFbuttonRosa">Ver Oferta</button>
                </div>
            </section>
        </>
    )
}

