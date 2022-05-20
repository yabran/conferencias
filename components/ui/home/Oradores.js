import React from 'react'
import { Col, Row, Card, CardGroup, Container, Badge } from 'react-bootstrap'

export default function Oradores({oradores}) {
  return (
      <>
            <Container fluid style={{textAlign:'center', margin:'20px 0px'}}>
                <h4>CONOCE A LOS</h4>
                <h1>ORADORES</h1>
            
            </Container >
            
                <Container id="container-cards" style={{marginBottom:'20px'}}>
                
                <CardGroup >
                
                    {oradores.map((orador, index) => {
                        return(
                        
                        <Card key={index} className="card-home" style={{marginRight:'30px'}}>
                                <Card.Img variant="top" src={orador.photo} style={{minHeight:'450px'}}/>
                                  
                                <Card.Body>
                                {orador.tags.map((tag, index) => {
                                      switch (tag) {
                                          case 'JavaScript':
                                              return <Badge key={index} style={{marginRight:'5px', marginBottom:'10px'}} bg="warning" text="dark">{tag}{' '}</Badge>
                                              
                                            case 'React':
                                                return <Badge key={index} style={{marginRight:'5px', marginBottom:'10px'}} bg="info">{tag}</Badge>
                                            case 'Negocios':
                                                return <Badge key={index} style={{marginRight:'5px', marginBottom:'10px'}} bg="secondary" text='light'>{tag}</Badge>
                                            case 'Startups':
                                                return <Badge key={index} style={{marginRight:'5px', marginBottom:'10px'}} bg="danger" text='light'>{tag}</Badge>

                                                
                                          default:
                                              break;
                                      }
                                  })}
                                <Card.Title>{orador.name}</Card.Title>
                                <Card.Text>
                                    {orador.description}
                                </Card.Text>
                                </Card.Body>
                            
                            </Card>

                        )

                    })}
                
                </CardGroup>
            
                
                
                </Container>
       
        </>
    
  )
}
