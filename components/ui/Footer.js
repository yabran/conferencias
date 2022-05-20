import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Codo a codo</h5>
            <p>
               Conferencias
            </p>
          </MDBCol>
          <MDBCol md="4">
           
            <ul>
              <li className="list-unstyled">
                <a href="#!">Conferencias</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Estudiantes</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Prensa</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            
            <ul>
              <li className="list-unstyled">
                <a href="#!">Terminos y condiciones</a>
              </li>
              
              <li className="list-unstyled">
                <a href="#!">Preguntas frecuentes</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacidad</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contactanos</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Fernando Vallejos </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
