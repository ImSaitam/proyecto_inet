import { Container, Row, Col } from 'react-bootstrap';
import '../Footer.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre nosotros</h5>
            <p>
              We are a company dedicated to providing the best services and products. Our mission is to exceed customer expectations.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: info@company.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/ImSaitam/proyecto_inet" className="text-light">GitHub</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light"/>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
}