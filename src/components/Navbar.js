import '../Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CarritoNavBar from './CarritoNavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BarraNav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const isSeller = user && user.User.role === 'seller';

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to={"/"} className='text-decoration-none'><Navbar.Brand>Pocho Sports</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className='text-decoration-none text-secondary ms-5'>Inicio</Link>
            <Link to={"/catalogo"} className='text-decoration-none text-secondary ms-5'>Catalogo</Link>
            {isSeller && (
              <Link to={"/agregarproductos"} className='text-decoration-none text-secondary ms-5'>Añadir productos</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CarritoNavBar />
    </Navbar>
  );
}