import React, { useState } from 'react'
import { Card, CardGroup, Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap';


export default function ContentTickets() {

    const [selected, setSelected] = useState(initialData())

    const discounts=[
        {
            type:'Estudiante',
            percentage:0.8,
            color:'#7a49e5'
        },

        {
            type:'Trainee',
            percentage:0.5,
            color:'#49e5bb'
        },

        {
            type:'Junior',
            percentage:0.15,
            color:'#f2d42b'
        }
    ]

    const onChangePersonalData=e=>{
        setSelected({
            ...selected,
            [e.target.name]:e.target.value
        })
    }



    const onChangeCategory = (e) => {
        setSelected({
            ...selected,
            category: e.target.value
        })
    }

    const onChangeCant = (e) => {
        setSelected({
            ...selected,
            cant: e.target.value
        })
    }

    const onClickResumen=()=>{
        switch (selected.category) {
            case 'Estudiante':
                setSelected({...selected, total:(200 * selected.cant) - selected.cant* 200 * 0.8})
                break;
            case 'Trainee':
                setSelected({...selected, total:(200 * selected.cant) - selected.cant * 200 * 0.5})
                break;
            case 'Junior':
                setSelected({...selected, total:(200 * selected.cant) - selected.cant * 200 * 0.15})
            default:
                break;
        }
    }

    const onClear=()=>{
        setSelected(initialData())
    }




  return (
    <Container lg={8}>
        <CardGroup style={{marginTop:'20px'}}>
            {discounts.map((discount, index) => {
                return(

                    <Card key={index}  style={{margin:'20px', border:`2px solid ${discount.color}`}}>
                        <Card.Title style={{textAlign:'center', padding:'10px'}}>
                            {discount.type}
                        </Card.Title>
                        <Card.Body style={{textAlign:'center'}}>
                            Tiene un descuento de
                            <h2 style={{marginTop:'20px'}}>{discount.percentage*100}%</h2>
                            <h6 style={{marginTop:'20px', color:'#c9c3c3'}}>*presentar documentacion</h6>
                        </Card.Body>

                    </Card>

                )
            })}
            
        </CardGroup>

        <Container fluid style={{textAlign:'center', margin:'20px 0px'}}>
                <h4>VENTA</h4>
                <h1>VALOR DE TICKET: 200$</h1>
            
        </Container >

        <Form>
                            <Form.Group className="mb-3" controlId="formBasicText">
                            <Row className="mb-3" lg={8} style={{justifyContent:'center'}}>
                                <Form.Group style={{marginRight:'20px !important'}}  as={Col} controlId="formGridText">
                                
                                <Form.Control  type="text" name='firstName' value={selected.firstName} placeholder="Nombre" onChange={onChangePersonalData}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridText">
                                
                                <Form.Control type="text" name='lastName' placeholder="Apellido" value={selected.lastName} onChange={onChangePersonalData}/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3" lg={8} style={{justifyContent:'center'}}>
                                <Form.Group as={Col} className="mb-3" type='email' style={{boxSizing:'border-box', padding:'0'}} controlId="formGridEmail">
                                    <Form.Control type='email' name='email' placeholder="Correo" value={selected.email} onChange={onChangePersonalData}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3"  lg={8} style={{justifyContent:'center'}}>
                                <Form.Group style={{marginRight:'20px !important'}}  as={Col} controlId="formGridText">
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control  value={selected.cant} onChange={onChangeCant} min={1} type="number" placeholder=""  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Select onChange={onChangeCategory} value={selected.category} aria-label="Default select example">
                                        
                                        <option value="Estudiante">Estudiante</option>
                                        <option value="Trainee">Trainee</option>
                                        <option value="Junior">Junior</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3" lg={8} style={{justifyContent:'center'}}>
                                <Form.Group className="mb-3 mt-3" type='email' style={{boxSizing:'border-box', padding:'0'}} controlId="formGridEmail">
                                    <h5 style={{backgroundColor:'#bedef7',fontWeight:'bold' , padding:'30px'}}>Total a pagar: ${selected.total}</h5>
                                </Form.Group>
                            </Row>
                                   
                                <Row style={{justifyContent:'center'}}>
                                    <Form.Group style={{marginRight:'20px !important'}}  as={Col} controlId="formGridText">
                                        <div className="d-grid gap-2">
                                            <Button id="button-submit" size='lg' value='Borrar' as='input' onClick={onClear}  />
                                        </div>
                                    </Form.Group>
                                    <Form.Group style={{marginRight:'20px !important'}}  as={Col} controlId="formGridText">
                                        <div className="d-grid gap-2">
                                            <Button id="button-submit" size='lg' onClick={onClickResumen} value='Resumen' as='input'  />
                                        </div>
                                    </Form.Group>
                                </Row>
                                
                                
                                
                                
                                
                            </Form.Group>

                        </Form>
    </Container>
  )
}

function initialData() {
    return {
        firstName:'',
        lastName:'',
        email:'',
        cant: 1,
        category:'Estudiante',
        total:0
    }
}
