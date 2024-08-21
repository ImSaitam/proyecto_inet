import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../img/img1.png';
import imagen2 from '../img/img2.jpg';
import imagen3 from '../img/img3.jpg';
import '../inicio.css';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Inicio() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:8000/products", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        setProducts(response.data.products);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    fetchProducts();
}, []);

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
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      <h2 className="title-1">Productos destacados</h2>
      <div className='contenido-inicio'>
      <Table striped bordered>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
                        {Array.isArray(products) ? (
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>ARS ${product.price}</td>
                                    <td className="actions-catalogo">
                                        <ButtonGroup aria-label="button-carrito">
                                            <Link to={"/catalogo"}><Button variant="success">
                                                Comprar
                                                <IoCartOutline />
                                            </Button>
                                            </Link>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>No hay productos disponibles</td>
                            </tr>
                        )}
                    </tbody>
        </Table>
      </div>
      
    <Footer/>
    </>
  );
}
