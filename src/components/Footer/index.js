import React from 'react';
import styles from './style.css';
import logo from './logodsc.png';
import 'bootstrap/dist/css/bootstrap.css';


export default function Footer() {

    return (      
    <div className='footer-body'>
        <div className='footer-one'>
            <span className="d-flex"><img src={logo} alt='logo' /><h2 className='name-footer'>Digital Store</h2></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempod incididunt ut labore it dolore.</p>
            
            <a href='#' className='footer-link'>
            <p>colocar as redes aqui</p>
            </a>
        </div>

        <div className='footer-container'>
            <p className='footer-item1'><strong>Informações</strong></p>
            <li>
                <a href='#' className='footer-link'>Sobre Drip Store</a>    
            </li>
            <li>
                <a href='#' className='footer-link'>Sugurança</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Wishlist</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Blog</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Trabalhe Conosco</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Meus Pedidos</a>
            </li>
        </div>

        <div className='footer-container-item1'>
        <p className='footer-item1'><strong>Informações</strong></p>
            <li>
                <a href='#' className='footer-link'>Camisetas</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Calças</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Bonés</a>
            </li>
            <li>
                <a href='#' className='footer-link'>HeadPhones</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Tênis</a>
            </li>
        </div>

        <div className='footer-container-item2'>
        <p className='footer-item1'><strong>Contato</strong></p>
            <p className='footer-item1'>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p className='footer-item1'>(85) 3051-3411</p>
        </div>

        
        <div className='footer-container-item3'>
            <hr />
            @ 2022 Digital College
        </div>            
    </div>
    
  );
}
