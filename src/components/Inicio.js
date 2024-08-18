import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import imagenEjemplo from '../img/img1.png';
import '../inicio.css';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { IoCartOutline } from "react-icons/io5";



export default function Inicio() {
  const [index, setIndex] = useState(0);


  // const products = [...Array(10)].map((_, idx) => ({
  //   id: idx + 1,
  //   title: `Producto N°${idx + 1}`,
  //   image: imagenEjemplo
  // }));


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

      
      <h2 className="title-1">Productos destacados</h2>
      <div className='contenido-inicio'>
        <Table striped bordered className='centered-table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nike Phato</td>
              <td>...........</td>
              <td>ARS $75.000</td>
              <td>Calzado</td>
              <td className='actions-inicio'>
                <ButtonGroup className="button-comprar" aria-label="">
                  <Button variant="success">Comprar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="button-carrito">
                  <Button variant="success"><IoCartOutline /></Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
            <td>Nike Phato</td>
              <td>...........</td>
              <td>ARS $75.000</td>
              <td>Calzado</td>
              <td className='actions-inicio'>
                <ButtonGroup className="button-comprar" aria-label="">
                  <Button variant="success">Comprar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="button-carrito">
                  <Button variant="success"><IoCartOutline /></Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
            <td>Nike Phato</td>
              <td>...........</td>
              <td>ARS $75.000</td>
              <td>Calzado</td>
              <td className='actions-inicio'>
                <ButtonGroup className="button-comprar" aria-label="">
                  <Button variant="success">Comprar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="button-carrito">
                  <Button variant="success"><IoCartOutline /></Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
            <td>Nike Phato</td>
              <td>...........</td>
              <td>ARS $75.000</td>
              <td>Calzado</td>
              <td className='actions-inicio'>
                <ButtonGroup className="button-comprar" aria-label="">
                  <Button variant="success">Comprar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="button-carrito">
                  <Button variant="success"><IoCartOutline /></Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
            <td>Nike Phato</td>
              <td>...........</td>
              <td>ARS $75.000</td>
              <td>Calzado</td>
              <td className='actions-inicio'>
                <ButtonGroup className="button-comprar" aria-label="">
                  <Button variant="success">Comprar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="button-carrito">
                  <Button variant="success"><IoCartOutline /></Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      
    <Footer/>
    </>
  );
}
