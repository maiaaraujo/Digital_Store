import React from 'react';
import styles from './style.css';
import logo from './Vector.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Footer() {

    return (
        <>
        <div className='footer-body'>
        <div className='d-flex justify-content-between align-items-start'>
                <div className='footer-one'>
                    <span className='d-flex align-items-start'>
                        <img src={logo} alt='logo' />
                        <h2>Digital Store</h2>
                        </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempod incididunt ut labore it dolore.</p>

                    <span className='footer-icone'>
                        <p><FaFacebookF/></p>
                        <p><FaTwitter/></p>
                        <p><FaInstagram/></p>
                    </span>
                </div>

                <div className='footer-container'>
                    <p className='footer-item1'><strong>Informações</strong></p>
                    <li><a href='#' className='footer-link'>Sobre Drip Store</a></li>
                    <li><a href='#' className='footer-link'>Sugurança</a></li>
                    <li><a href='#' className='footer-link'>Wishlist</a></li>
                    <li><a href='#' className='footer-link'>Blog</a></li>
                    <li><a href='#' className='footer-link'>Trabalhe Conosco</a></li>
                    <li><a href='#' className='footer-link'>Meus Pedidos</a></li>
                </div>

                <div className='footer-container'>
                    <p className='footer-item1'><strong>Informações</strong></p>
                    <li><a href='#' className='footer-link'>Camisetas</a></li>
                    <li><a href='#' className='footer-link'>Calças</a></li>
                    <li><a href='#' className='footer-link'>Bonés</a></li>
                    <li><a href='#' className='footer-link'>HeadPhones</a></li>
                    <li><a href='#' className='footer-link'>Tênis</a></li>
                </div>

                <div className='footer-container-item2'>
                    <p className='footer-item1'><strong>Contato</strong></p>
                    <p className='footer-item1'>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p className='footer-item1'>(85) 3051-3411</p>
                </div>
            </div>
            <div className='footer-container-item3'>
                <hr />
                @ 2022 Digital College
            </div>
        </div>
            
        </>



    );
}
