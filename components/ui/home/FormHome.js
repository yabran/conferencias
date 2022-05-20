import React from 'react'
import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap'

export default function FormHome() {
  return (
    <>
        
                <Container fluid style={{textAlign:'center', margin:'20px 0px'}}>
                        <h4>CONVIERTETE EN UN</h4>
                        <h1>ORADOR</h1>
                        <h6 id="subtitle-home">Anotate como orador para dar una charla ignite. Cuéntanos de qué quieres hablar!</h6>
                    
                </Container >
                <Container>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row id="row-form" style={{justifyContent:'center'}}>
                                    <Col lg={4} style={{margin:'5px 15px'}}>
                                        <Form.Control type="text" placeholder="Nombre" />
                                    
                                    </Col>
                                    <Col lg={4} style={{margin:'5px 15px'}}>
                                        <Form.Control type="text" placeholder="Apellido" />
                                    
                                    </Col>
                                
                                
                                    <Col lg={8} style={{padding:0}}>
                                    <FloatingLabel style={{margin:'20px 0px'}} controlId="floatingTextarea2" label="Sobre que quieres hablar?">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Cuentanos de qué quieres hablar!"
                                        style={{ height: '150px', width: '100%' }}
                                        />
                                    </FloatingLabel>
                                    <Form.Label >Recuerda incluir un título para tu charla.</Form.Label>

                                    </Col>
                                    
                                </Row>
                                <Row style={{justifyContent:'center'}}>
                                    <Col lg={8} style={{padding:0}}>
                                        <div className="d-grid gap-2">
                                            <Button id="button-submit" size='lg' value='Enviar' as='input' type='submit'  />
                                        </div>
                                    </Col>
                                </Row>
                                
                                
                                
                                
                            </Form.Group>

                        </Form>


                </Container>
            
            
            


        
    
    
    </>
  )
}
