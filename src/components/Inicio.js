import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import imagenEjemplo from '../img/img1.png';
import '../inicio.css';
import Pagination from 'react-bootstrap/Pagination';



export default function Inicio() {
  const [index, setIndex] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const products = [...Array(10)].map((_, idx) => ({
    id: idx + 1,
    title: `Producto N°${idx + 1}`,
    image: imagenEjemplo
  }));

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIdx = (activePage - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIdx, startIdx + itemsPerPage);

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
          {selectedProducts.map((product) => (
            <Card key={product.id} className="slider-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="botones-card"> 
                  <Button variant="primary" className="gotoButton">Conseguilo</Button>
                  <Button variant="secondary" className="carrito">🛒</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev
          onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)}
        />
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={idx + 1 === activePage}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(activePage < totalPages ? activePage + 1 : totalPages)}
        />
      </Pagination>
      <Footer/>
    </>
  );
}
