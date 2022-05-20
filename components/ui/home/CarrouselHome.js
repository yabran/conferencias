import React from 'react'
import { Row, Col, Carousel,  } from 'react-bootstrap'

export default function CarrouselHome({images}) {
  return (
    <Row style={{}}>
        <Col>
        <Carousel style={{marginBottom:'20px', }}>
            
                {images.map((image,index) => {

                    return(
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="First slide"
                                style={{minHeight:'450px', maxHeight:'450px'}}
                            />
                        </Carousel.Item>
                    )

                })}

                
                
                
            
        </Carousel>

        </Col>
        <Col style={{backgroundColor:'#212529', color:'white',  height:'450px', }}>
                <h2 style={{padding:'20px'}}>Bs As - Octubre</h2>
                <p id="carousel-text"style={{padding:'20px', lineHeight:'1.5cm',}}>Buenos Aires es la provincia y localidad mas grande del estado de Argentina,
                    en los Estados Unidos Honolulu es la más sureña de entre las principales ciudades estadounidenses.
                    Aunque el nombre de Honolulu se refiere al área urbana en la costa sureste de la isla Oahu,
                    la ciudad y el condado de Honolulu han formado una ciudad- condado consolidada
                    que cubre toda la ciudad (aproximadamente 600km2 de superficie)

                </p>

        
        </Col>
    </Row>
  )
}
