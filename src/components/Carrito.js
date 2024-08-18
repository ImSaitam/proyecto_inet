import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import BarraNav from './Navbar';
import Footer from './footer.js';
import '../carrito.css';

// Create a context for the cart
const CartContext = React.createContext();

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
      const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      setTotal(totalPrice);



      //----------------------------------------------esto estaba para probarlo de manera estatica jeje lo dejo por las dudas.--------------------------------------
      //   const [products, setProducts] = useState([
      //     { name: "Nike Mercurial", quantity: 1, price: 78999 },
      //     { name: "Adidas Predator", quantity: 2, price: 65999 },
      //     { name: "Puma Future", quantity: 1, price: 59999 },
      //     { name: "New Balance Furon", quantity: 3, price: 70999 },
      //     { name: "Umbro Velocita", quantity: 1, price: 67999 },
      //     { name: "Mizuno Morelia", quantity: 1, price: 73999 },
      //     { name: "Reebok Classic", quantity: 2, price: 58999 }
      // ]);

      // const [total, setTotal] = useState(0);

      // useEffect(() => {
      //     calculateTotal(products);
      // }, [products]);

      // const calculateTotal = (products) => {
      //     const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      //     setTotal(totalPrice);
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    };

    return (
      <CartContext.Provider value={{ products, setProducts, total, calculateTotal }}>
        <BarraNav />
        <Container className="mt-5">
          <Row>
            <Col md={8}>
              <h2>Mi carrito</h2>
              <CartList />
            </Col>
            <Col md={4}>
              <h2>Resumen</h2>
              <Summary />
            </Col>
          </Row>
        </Container>
        <Footer />
      </CartContext.Provider>
    );
}

function CartList() {
    const { products } = useContext(CartContext);

    return (
      <div className="cart-container">
        {products.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          products.map((product, index) => (
            <Card key={index} className="mb-3 product-card">
              <Card.Body>
                <Row>
                  <Col>{product.name}</Col>
                  <Col>Cantidad: {product.quantity}</Col>
                  <Col>ARS {product.price.toFixed(2)}</Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    );
}

function Summary() {
  const { products, total } = useContext(CartContext);

  return (
    <Card>
      <Card.Body className='summary-container'>
        <h4>Detalle del precio:</h4>
        {products.map((product, index) => (
          <Row key={index}>
            <Col>{product.name} x {product.quantity}</Col>
            <Col>ARS {(product.price * product.quantity).toFixed(2)}</Col>
          </Row>
        ))}
        <hr />
        <Row>
          <Col>Subtotal:</Col>
          <Col>ARS {total.toFixed(2)}</Col>
        </Row>
        <Row>
          <Col>Descuento:</Col>
          <Col>-ARS 0.00</Col>
        </Row>
        <hr />
        <p>*Impuestos incluidos</p>
        <Row>
          <Col>Total:</Col>
          <Col>ARS {total.toFixed(2)}</Col>
        </Row>
        <div className="button-wrapper">
                <Button variant="primary" className="button-compra">Comprar ahora</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
