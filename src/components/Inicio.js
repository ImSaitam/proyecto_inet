import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import imagenEjemplo from '../img/img1.png';
import '../inicio.css';

export default function Inicio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <BarraNav />
      <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenEjemplo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera promocion</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenEjemplo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segunda promocion</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenEjemplo}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tercera promocion</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="title-1">Calzado destacado</h2>

      <div className="slider-container mt-4">
        <div className="slider">
          {[...Array(10)].map((_, idx) => (
            <Card key={idx} className="slider-card">
              <Card.Img variant="top" src={imagenEjemplo} />
              <Card.Body>
                <Card.Title>Calzado N°1{idx + 1}</Card.Title>
                <div className="botones-card"> 
                <Button variant="primary" clasName="gotoButton">Conseguilo</Button>
                <Button variant="secondary" className="carrito">🛒</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <h2 className="title-1">Camisetas destacadas</h2>
      <div className="slider-container mt-4">
        <div className="slider">
          {[...Array(10)].map((_, idx) => (
            <Card key={idx} className="slider-card">
              <Card.Img variant="top" src={imagenEjemplo} />
              <Card.Body>
                <Card.Title>Camiseta N°{idx + 1}</Card.Title>
                <div className="botones-card"> 
                <Button variant="primary" clasName="gotoButton">Conseguilo</Button>
                <Button variant="secondary" className="carrito">🛒</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
