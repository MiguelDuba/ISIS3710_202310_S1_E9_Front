import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ChevronLeft, ChevronRight, StarFill } from 'react-bootstrap-icons';
import './InfoAcudiente.css';

function InfoAcudiente() {

    const items = [
                <div className="reseniaCard ">
                    <div className='userInfo' >
                        <div class="rounded-circle">
                            <img src="https://image3.photobiz.com/40/6_20200320132439_17431604_xlarge.jpg" alt="Imagen"></img>
                        </div>
                        <div className="userInfoTop">
                            <h5>Brooklyn Simmons</h5>
                            <h5>Acudiente</h5>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div class="row">
                            <div class="col-md-auto margin-top: 5px">
                                <p><b>Excelente Niñera</b></p>
                            </div>
                            <div class="col">
                                5
                            </div>
                            <div class="col">
                                <StarFill className="star-icon"/>
                            </div>
                        </div>
                        <p>Estoy muy agradecida por la experiencia de trabajar con esta familia. Desde el primer día me hicieron sentir parte de su hogar y confiaron en mí</p>
                    </div>
                </div>,
                <div className="reseniaCard ">
                    <div className='userInfo' >
                        <div class="rounded-circle">
                            <img src="https://image3.photobiz.com/40/6_20200320132439_17431604_xlarge.jpg" alt="Imagen"></img>
                        </div>
                        <div className="userInfoTop">
                            <h5>Brooklyn Simmons</h5>
                            <h5>Acudiente</h5>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div class="row">
                            <div class="col-md-auto margin-top: 5px">
                                <p><b>Excelente Niñera</b></p>
                            </div>
                            <div class="col">
                                5
                            </div>
                            <div class="col">
                                <StarFill className="star-icon"/>
                            </div>
                        </div>
                        <p>Estoy muy agradecida por la experiencia de trabajar con esta familia. Desde el primer día me hicieron sentir parte de su hogar y confiaron en mí</p>
                    </div>
                </div>,
                <div className="reseniaCard ">
                    <div className='userInfo' >
                        <div class="rounded-circle">
                            <img src="https://image3.photobiz.com/40/6_20200320132439_17431604_xlarge.jpg" alt="Imagen"></img>
                        </div>
                        <div className="userInfoTop">
                            <h5>Brooklyn Simmons</h5>
                            <h5>Acudiente</h5>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div class="row">
                            <div class="col-md-auto margin-top: 5px">
                                <p><b>Excelente Niñera</b></p>
                            </div>
                            <div class="col">
                                5
                            </div>
                            <div class="col">
                                <StarFill className="star-icon"/>
                            </div>
                        </div>
                        <p>Estoy muy agradecida por la experiencia de trabajar con esta familia. Desde el primer día me hicieron sentir parte de su hogar y confiaron en mí</p>
                    </div>
                </div>,
                <div className="reseniaCard ">
                    <div className='userInfo' >
                        <div class="rounded-circle">
                            <img src="https://image3.photobiz.com/40/6_20200320132439_17431604_xlarge.jpg" alt="Imagen"></img>
                        </div>
                        <div className="userInfoTop">
                            <h5>Brooklyn Simmons</h5>
                            <h5>Acudiente</h5>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div class="row">
                            <div class="col-md-auto margin-top: 5px">
                                <p><b>Excelente Niñera</b></p>
                            </div>
                            <div class="col">
                                5
                            </div>
                            <div class="col">
                                <StarFill className="star-icon"/>
                            </div>
                        </div>
                        <p>Estoy muy agradecida por la experiencia de trabajar con esta familia. Desde el primer día me hicieron sentir parte de su hogar y confiaron en mí</p>
                    </div>
                </div>,
            <div className="reseniaCard ">
                <div className='userInfo' >
                    <div class="rounded-circle">
                        <img src="https://image3.photobiz.com/40/6_20200320132439_17431604_xlarge.jpg" alt="Imagen"></img>
                    </div>
                    <div className="userInfoTop">
                        <h5>Brooklyn Simmons</h5>
                        <h5>Acudiente</h5>
                    </div>
                </div>
                <div className='infoDiv'>
                    <div class="row">
                        <div class="col-md-auto margin-top: 5px">
                            <p><b>Excelente Niñera</b></p>
                        </div>
                        <div class="col">
                            5
                        </div>
                        <div class="col">
                            <StarFill className="star-icon"/>
                        </div>
                    </div>
                    <p>Estoy muy agradecida por la experiencia de trabajar con esta familia. Desde el primer día me hicieron sentir parte de su hogar y confiaron en mí</p>
                </div>
            </div>,
        ];
        
    const responsive = {
        0: { items: 1 },
        800: { items: 2 },
        1200: { items: 3 }
  };

  const renderPrevButton = ({ isDisabled }) => (
    <button
      className={`alice-carousel prev-btn ${isDisabled ? 'disabled' : ''}`}
      onClick={() => console.log('Previous button clicked')}
    >
      <ChevronLeft className='caret-left'/>
    </button>
  );

  const renderNextButton = ({ isDisabled }) => (
    <button
      className={`alice-carousel next-btn ${isDisabled ? 'disabled' : ''}`}
      onClick={() => console.log('Next button clicked')}
    >
      <ChevronRight className='caret-right'/>
    </button>
  );

  const renderDotsItem = ({ isActive }) => (
    <span className={`dot ${isActive ? '__custom' : ''}`} />
  );
        
    return (
        <div class="container">
            <div style={{ justifyContent: 'center'}}>
                <h1 style={{ margin: '50px' }}>Conoce nuev@s niñer@s</h1>
                <h6 style={{ margin: '40px' }}>Busca y encuentra ofertas de servicios de niñera que se 
                    adapten mejor a tus necesidades y, al mismo tiempo, revisa 
                    las reseñas de otros clientes que han trabajado con ellas.</h6>
            </div>
            <AliceCarousel
                items={items}
                responsive={responsive}
                autoPlay
                autoPlayInterval={4000}
                infinite
                dotsDisabled={false}
                renderDotsItem={renderDotsItem}
                buttonsDisabled={false}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />

        </div>
    )
}

export default InfoAcudiente