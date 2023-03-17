import React from "react";
import './style.scss';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import companyLogo from "./img/sneakers.png";
import ornament from "./img/ornament.svg";
import { Button, Container } from '@mui/material';

export default function Carousel() {
     return (
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
                         <Container>
                              <section className="Carousel">
                                   <div className="alinharTexto">
                                        <p className="textoAmarelo">Melhores ofertas personalizadas</p>
                                        <h1><strong>Queima de <br />Estoque Nike</strong></h1>
                                        <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                                        <Button type="button" className="buttonrosa">Ver Ofertas</Button>
                                   </div>
                                   <div>
                                        <img src={companyLogo} className="tenisWhite" alt="tenis branco" />
                                   </div>
                                   <div>
                                        <img src={ornament} className="ornamento" alt="icone" />
                                   </div>
                              </section>
                         </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Container>
                              <section className="Carousel">
                                   <div className="alinharTexto">
                                        <p className="textoAmarelo">Melhores ofertas personalizadas</p>
                                        <h1><strong>Queima de <br />Estoque Nike</strong></h1>
                                        <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                                        <Button type="button" className="buttonrosa">Ver Ofertas</Button>
                                   </div>
                                   <div>
                                        <img src={companyLogo} className="tenisWhite" alt="tenis branco" />
                                   </div>
                                   <div>
                                        <img src={ornament} className="ornamento" alt="icone" />
                                   </div>
                              </section>
                         </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Container>
                              <section className="Carousel">
                                   <div className="alinharTexto">
                                        <p className="textoAmarelo">Melhores ofertas personalizadas</p>
                                        <h1><strong>Queima de <br />Estoque Nike</strong></h1>
                                        <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                                        <Button type="button" className="buttonrosa">Ver Ofertas</Button>
                                   </div>
                                   <div>
                                        <img src={companyLogo} className="tenisWhite" alt="tenis branco" />
                                   </div>
                                   <div>
                                        <img src={ornament} className="ornamento" alt="icone" />
                                   </div>
                              </section>
                         </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Container>
                              <section className="Carousel">
                                   <div className="alinharTexto">
                                        <p className="textoAmarelo">Melhores ofertas personalizadas</p>
                                        <h1><strong>Queima de <br />Estoque Nike</strong></h1>
                                        <p className="terceiroTexto">Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                                        <Button type="button" className="buttonrosa">Ver Ofertas</Button>
                                   </div>
                                   <div>
                                        <img src={companyLogo} className="tenisWhite" alt="tenis branco" />
                                   </div>
                                   <div>
                                        <img src={ornament} className="ornamento" alt="icone" />
                                   </div>
                              </section>
                         </Container>
                    </SwiperSlide>
               </Swiper>
          </>
     );
}

