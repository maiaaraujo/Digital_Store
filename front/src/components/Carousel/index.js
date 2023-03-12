import React from "react";
import './style.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import companyLogo from "./img/sneakers.png";
import ornament from "./img/ornament.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
     return(
          <>
          <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
               <section className="d-flex justify-content-evenly align-items-center">
                    <div className="text-start justify-content-end p-5">
                         <p className="fs-6 textoAmarelo">Melhores ofertas personalizadas</p>
                         <h1><strong>Queima de <br/>Estoque Nike</strong></h1>
                         <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                         <button type="button" className="buttonrosa">Ver Ofertas</button>
                    </div>
                    <div className="align-self-start">
                         <img className="swiper-slide img " src={companyLogo} alt="tenis branco" /> 
                    </div>
                    <div className="align-self-start">
                         <img className="minhaimg" src={ornament} alt="icone" /> 
                    </div>
               </section>
               
          </SwiperSlide>
          <SwiperSlide>
          <section className="d-flex justify-content-evenly align-items-center">
                    <div className="text-start justify-content-end p-5">
                         <p className="fs-6 textoAmarelo">Melhores ofertas personalizadas</p>
                         <h1><strong>Queima de <br/>Estoque Nike</strong></h1>
                         <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                         <button type="button" className="buttonrosa">Ver Ofertas</button>
                    </div>
                    <div className="align-self-start">
                         <img className="swiper-slide img " src={companyLogo} alt="tenis branco" /> 
                    </div>
                    <div className="align-self-start">
                         <img className="minhaimg" src={ornament} alt="icone" /> 
                    </div>
               </section>
          </SwiperSlide>
          <SwiperSlide>
               <section className="d-flex justify-content-evenly align-items-center">
                    <div className="text-start justify-content-end p-5">
                         <p className="fs-6 textoAmarelo">Melhores ofertas personalizadas</p>
                         <h1><strong>Queima de <br/>Estoque Nike</strong></h1>
                         <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                         <button type="button" className="buttonrosa">Ver Ofertas</button>
                    </div>
                    <div className="align-self-start">
                         <img className="swiper-slide img " src={companyLogo} alt="tenis branco" /> 
                    </div>
                    <div className="align-self-start">
                         <img className="minhaimg" src={ornament} alt="icone" /> 
                    </div>
               </section>
               </SwiperSlide>
               <SwiperSlide>
               <section className="d-flex justify-content-evenly align-items-center">
                    <div className="text-start justify-content-end p-5">
                         <p className="fs-6 textoAmarelo">Melhores ofertas personalizadas</p>
                         <h1><strong>Queima de <br/>Estoque Nike</strong></h1>
                         <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                         <button type="button" className="buttonrosa">Ver Ofertas</button>
                    </div>
                    <div className="align-self-start">
                         <img className="swiper-slide img " src={companyLogo} alt="tenis branco" /> 
                    </div>
                    <div className="align-self-start">
                         <img className="minhaimg" src={ornament} alt="icone" /> 
                    </div>
               </section>
               </SwiperSlide>
          </Swiper>

          
          </>
          );
     }
     
     