import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import { IoCartOutline } from "react-icons/io5";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useCart } from './Carrito';
import '../CarritoNavBar.css'; // Para agregar tus estilos personalizados

export default function CarritoNavBar() {
    const { products } = useCart();

    const calculateTotal = () => {
        return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    return (
        <Dropdown className="carrito me-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <IoCartOutline /> ({products.length})
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-end carrito-dropdown'>
                <p className='text-carrito mt-2'>Productos:</p>
                <hr className="bg-light division"/>
                {products.map((product, index) => (
                    <div key={index} className="product-item mb-3 p-2">
                        <Row>
                            <Col xs={5}>
                                <h4 className="mb-0">{product.name}</h4>
                            </Col>
                            <Col xs={3}>
                                <h4 className="mb-0">x{product.quantity}</h4>
                            </Col>
                            <Col xs={2} className="text-end">
                                <h4 className="">${product.price}</h4>
                            </Col>
                        </Row>
                    </div>
                ))}
                <hr className="bg-light division mb-3"/>
                <Row className="total-section mb-3">
                    <Col xs={6}>
                        <h4 className="mb-0">Total:</h4>
                    </Col>
                    <Col xs={6} className="text-end">
                        <p className="total-price mb-0">${calculateTotal()}</p>
                    </Col>
                </Row>
                <Link to={"/carrito"}>
                    <Button className='checkout-button w-100' variant='success'>Finalizar compra</Button>
                </Link>
            </Dropdown.Menu>
        </Dropdown>
    );
}
