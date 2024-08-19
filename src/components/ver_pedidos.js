import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import Button from 'react-bootstrap/Button';
import '../ver_pedidos.css';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function VerPedidos() {
    const [orders, setOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState({});
    
    // Obtener las órdenes cuando se monta el componente
    useEffect(() => {
        axios.get('http://localhost:8000/orders') // Ajusta la URL según tu configuración
            .then(response => {
                setOrders(response.data.orders);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    const handleStatusChange = (orderId, newStatus) => {
        setSelectedStatus(prevState => ({
            ...prevState,
            [orderId]: newStatus
        }));
    };

    const handleConfirmStatusChange = (orderId) => {
        const statusUpdate = { status: selectedStatus[orderId] };
        axios.put(`http://localhost:8000/sales/${orderId}`, statusUpdate) // Ajusta la URL según tu configuración
            .then(response => {
                console.log('Sale status updated:', response.data);
                // Puedes actualizar las órdenes aquí si es necesario
            })
            .catch(error => {
                console.error('Error updating sale status:', error);
            });
    };

    return (
        <>
            <BarraNav />
            <h2 className="title-1">Pedidos</h2>
            <div className='contenido-catalogo'>
                <Table striped bordered className='centered-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Productos</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.client_id}</td>
                                <td>
                                    {order.products.map(product => (
                                        <div key={product.product_id}>
                                            {product.name} x {product.quantity}
                                        </div>
                                    ))}
                                </td>
                                <td>{order.sale?.state || 'N/A'}</td>
                                <td className='actions-catalogo'>
                                    <ButtonGroup className="button-comprar" aria-label="">
                                        <Dropdown onSelect={(eventKey) => handleStatusChange(order.id, eventKey)}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                {selectedStatus[order.id] || 'Estado'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="En proceso">En proceso</Dropdown.Item>
                                                <Dropdown.Item eventKey="Enviado">Enviado</Dropdown.Item>
                                                <Dropdown.Item eventKey="Entregado">Entregado</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="button-carrito">
                                        <Button variant="success" onClick={() => handleConfirmStatusChange(order.id)}>Confirmar</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
}
