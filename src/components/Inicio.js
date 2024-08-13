import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Inicio() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <img
          alt=""
          src="/img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Nombre
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}