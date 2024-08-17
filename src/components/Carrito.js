import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import BarraNav from './Navbar';
import Footer from './footer.js';

export default function Carrito() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      axios.get('/api/products')
        .then(response => {
          setProducts(response.data);
          calculateTotal(response.data);
        })
        .catch(error => {
          console.error('Error fetching the products:', error);
        });
    }, []);
  
    const calculateTotal = (products) => {
      const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
      setTotal(totalPrice);
    };
  
    return (
    <>
    <BarraNav/>      
    <Container fluid className="bg-light text-dark min-vh-100">
      <Row className="h-100">
        <Col lg={8}>
          <h2>Mi carrito</h2>
          {products.map(product => (
            <Card key={product.id} className="bg-light text-dark mb-3">
              <Card.Body className="d-flex">
                <div className="w-100">
                  <h5 className="mb-1">{product.name}</h5>
                  <p className="text-muted">{product.description}</p>
                  <span className="badge bg-primary">-100 %</span>
                  <span className="ml-2 text-muted text-decoration-line-through">
                    USD {product.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-2">Gratis</span>
                  <p className="mt-2 mb-0">
                    <small className="text-muted">
                      Reembolsable de forma automática
                    </small>
                  </p>
                </div>
                <div className="ml-auto">
                  <Button variant="link" className="text-dark">Eliminar</Button>
                  <Button variant="link" className="text-dark">Mover a lista de deseos</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col lg={4} className="d-flex">
          <Card className="bg-light text-dark p-3 w-100" style={{ minHeight: '75vh' }}>
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h4>Resumen de juegos y aplicaciones</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Precio</span>
                  <span>USD {total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Descuento por oferta</span>
                  <span>-USD {total.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>USD 0.00</span>
                </div>
              </div>
              <Button variant="primary" className="mt-3">
                Ir a pantalla de compra
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
      <Footer/>
      </>

    );
  }