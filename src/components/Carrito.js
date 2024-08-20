import React, { useState, useContext, createContext } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import BarraNav from './Navbar';
import Footer from './footer.js';
import '../carrito.css';

// Crear el contexto del carrito
const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    const addToCart = (product) => {
        setProducts(prevProducts => {
            const existingProduct = prevProducts.find(p => p.id === product.id);
            if (existingProduct) {
                return prevProducts.map(p => 
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    };

    const clearCart = () => setProducts([]);

    return (
        <CartContext.Provider value={{ products, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default function Carrito() {
    const { products } = useCart();

    return (
      <>
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
        </>
    );
}

function CartList() {
    const { products } = useCart();

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
    const { products, clearCart } = useCart();
    const [showModal, setShowModal] = useState(false);

    const handlePurchase = () => {
        setShowModal(true); // Muestra el modal antes de realizar la compra
    };

    const confirmPurchase = async () => {
        setShowModal(false); // Oculta el modal después de confirmar

        const purchaseData = {
            products: products.map((product) => ({
                product_id: product.id,
                quantity: product.quantity,
            })),
        };

        try {
            const response = await fetch('http://localhost:8000/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify(purchaseData),
            });

            if (response.ok) {
                alert('Compra realizada con éxito');
                clearCart(); // Limpiar el carrito después de una compra exitosa
            } else {
                alert('Error al realizar la compra');
            }
        } catch (error) {
            console.error('Error en la compra:', error);
            alert('Hubo un problema con la compra');
        }
    };

    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
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
                        <Col>Total:</Col>
                        <Col>ARS {total.toFixed(2)}</Col>
                    </Row>
                    <div className="button-wrapper">
                        <Button variant="primary" className="button-compra" onClick={handlePurchase}>
                            Comprar ahora
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal de confirmación */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación de compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas realizar esta compra?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={confirmPurchase}>
                        Confirmar compra
                    </Button>
                    <Button variant="danger" className='w-100' onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
