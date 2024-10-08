import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar.js';
import Footer from './footer.js';
import '../ver_pedidos.css';
import { Button, Dropdown, Table } from 'react-bootstrap';

export default function VerPedidos() {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [selectedOrderType, setSelectedOrderType] = useState('pendientes'); // Estado para almacenar el tipo de pedido seleccionado

  // Obtener las órdenes cuando se monta el componente
  useEffect(() => {
    axios.get('http://localhost:8000/orders', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
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

  const handleConfirmStatusChange = (id) => {
    const statusUpdate = { status: selectedStatus[id] };
    axios.put(`http://localhost:8000/sales/${id}`, statusUpdate, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        console.log('Sale status updated:', response.data);
        window.location.reload()
      })
      .catch(error => {
        console.error('Error updating sale status:', error);
      });
  };

  const handleOrderTypeChange = (eventKey) => {
    setSelectedOrderType(eventKey);
  };

  const filteredOrders = orders.filter(order => {
    if (selectedOrderType === 'pendientes') {
      return order.sale?.status === 'En proceso de armado' || order.sale?.status === 'Empaquetado' || order.sale?.status === 'Despachado';
    } else if (selectedOrderType === 'entregados') {
      return order.sale?.status === 'Entregado';
    } else if (selectedOrderType === 'anulados') {
      return order.sale?.status === 'Anulado';
    } else {
      return true;
    }
  });

  return (
    <>  
      <div className="page-container">
      <div className="content-wrap">
        <BarraNav />
        <h2 className="title-1">
          <Dropdown onSelect={handleOrderTypeChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedOrderType ? selectedOrderType.charAt(0).toUpperCase() + selectedOrderType.slice(1) : 'Pedidos'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="pendientes">Pedidos pendientes</Dropdown.Item>
              <Dropdown.Item eventKey="entregados">Pedidos entregados</Dropdown.Item>
              <Dropdown.Item eventKey="anulados">Pedidos anulados</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </h2>
        <div className="contenido-catalogo">
          <Table striped bordered className="centered-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>DNI</th>
              <th>Productos</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.client_fullname}</td>
                <td>{order.client_dni}</td>
                <td>
                  {order.products.map(product => (
                    <div key={product.product_id}>
                      {product.name} x {product.quantity}
                    </div>
                  ))}
                </td>
                <td>{order.sale?.status || 'N/A'}</td>
                <td className="actions-catalogo">
                  <div className="d-flex flex-column">
                    <Dropdown onSelect={(eventKey) => handleStatusChange(order.id, eventKey)} className="mb-2">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedStatus[order.id] || 'Estado'}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="En proceso de armado">En proceso de armado</Dropdown.Item>
                        <Dropdown.Item eventKey="Empaquetado">Empaquetado</Dropdown.Item>
                        <Dropdown.Item eventKey="Despachado">Despachado</Dropdown.Item>
                        <Dropdown.Item eventKey="Entregado">Entregado</Dropdown.Item>
                        <Dropdown.Item eventKey="Anulado">Anulado</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="success" onClick={() => handleConfirmStatusChange(order.id)}>Confirmar</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
