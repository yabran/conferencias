import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';




export default function NavbarIndex() {
  return (
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
            <Link href='/'>
            
                <Navbar.Brand bg='dark' variant='dark' href="#home" style={{display:'flex', alignItems:'center'}}>
                                        <Image
                                            src='/assets/codoacodo.png'
                                            width="130"
                                            height="70"
                                            className="d-inline-block align-top"
                                            alt="codo a codo logo"
                                        />
                                        Conf Bs As
                </Navbar.Brand>
            
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
            <div style={{width:'30%'}}></div>
            <Nav style={{textAlign:'center'}}>
                    <Nav.Link href="" active>La conferencia</Nav.Link>
                    <Nav.Link href="#link">Los oradores</Nav.Link>
                    <Nav.Link href="#link">El lugar y la fecha</Nav.Link>
                    <Nav.Link href="#link">Conviertete en orador</Nav.Link>
                    <Nav.Link href="#link" style={{color:'#059862'}}>Comprar ticket</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
    </Container>
  </Navbar>
            
            
      
      
        )
}



{/* <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' style={{ height:'100px'}}>
               <Container>
                        <Navbar.Brand bg='dark' variant='dark' href="#home" style={{display:'flex', alignItems:'center'}}>
                            <Image
                                src='/assets/codoacodo.png'
                                width="130"
                                height="70"
                                className="d-inline-block align-top"
                                alt="codo a codo logo"
                            />
                            Conf Bs As
                        </Navbar.Brand>
                        

                    
                    <Navbar.Toggle  aria-controls='responsive-navbar-nav'/>

                        <Navbar.Collapse id="responsive-navbar-nav" >
                            
                            <Nav className='me-auto'>
                                <Nav.Link href="#home" active>La conferencia</Nav.Link>
                                <Nav.Link href="#link">Los oradores</Nav.Link>
                                <Nav.Link href="#link">El lugar y la fecha</Nav.Link>
                                <Nav.Link href="#link">Conviertete en orador</Nav.Link>
                                <Nav.Link href="#link" style={{color:'#059862'}}>Comprar ticket</Nav.Link>
                                
                            </Nav>
                            

                        </Navbar.Collapse>
                        
                </Container>
                

            </Navbar> */}
