import React, { useState } from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function Header() {

  const [onHover, setOnHover] = useState(false);

  const hoverOcurred=()=>{
    setOnHover(true);
  }

  const blurOcurred=()=>{
    setOnHover(false);
  }

  return (
    <Row style={{color:'white', margin:'0',width:'100%', height:'600px', backgroundImage:'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)), url("/assets/hawaii.jpg")', backgroundSize:'cover', backgroundPosition:'center',}}>
        <Col md={12} lg={6}>
        
        
        </Col>
        <Col md={0} lg={6} style={{display:'flex', alignItems:'center', justifyContent:'flex-end', textAlign:'right'}}>
            
                <Row style={{width:'100%', marginRight:'20%', flexDirection:'column'}}>
                    <Col>
                    <h1>Conf Bs As</h1>
                    <p style={{fontSize:'1.3rem'}}>Bs As llega por primera vez a Argentina. Un evento 
                        para compartir con nuestra comunidad el conocimiento 
                        y experiencia de los expertos que estan creando el 
                        futuro de internet. Ven a conocer a los miembros del evento, 
                        a otros estudiantes de Codo a Codo y oradores de primer nivel 
                        que tenemos para ti. Te esperamos!
                    </p>
                    </Col>
                    <Col className="mt-2">
                        <Button type="button" onMouseOver={hoverOcurred} onMouseOut={blurOcurred}  variant={onHover?"primary":"outline-primary"} style={{marginRight:'10px', color:'white', borderColor:'white', marginTop:'10px', transition:"all 0.8s ease-out"}}>Quiero ser orador</Button>
                        <Link href="/tickets">
                          
                          <Button  id="button-header" type="button" variant="success" style={{marginTop:'10px'}} >Comprar tickets</Button>
                        </Link>

                        

                    </Col>
                </Row>
            
            
       
        </Col>
    </Row>
  )
}
