import { useState } from "react";
import Footer from "./footer";
import BarraNav from "./Navbar.js";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import axios from 'axios';

export default function AñadirStock() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    code: "",
    category: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post("http://localhost:8000/products", formData, {
            headers: {
                'Authorization':  'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        setShowModal(true);
    } catch (error) {
        console.error(error);
    }
}

const handleCloseModal = () => {
  setShowModal(false);
}

  return (
    <>
      <BarraNav />
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                onChange={(event) => setFormData({...formData, name: event.target.value})}
                required
              />
            </Form.Group>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ingrese la descripción del producto"
                onChange={(event) => setFormData({...formData, description: event.target.value})}
                required
              />
            </Form.Group>
            <Form.Group controlId="precio">
              <Form.Label>Precio del producto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
                onChange={(event) => setFormData({...formData, price: event.target.value})}
                required
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>Stock del producto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el stock del producto"
                onChange={(event) => setFormData({...formData, stock: event.target.value})}
                required
              />
            </Form.Group>
            <Form.Group controlId="codigo">
              <Form.Label>Código del producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el código del producto"
                onChange={(event) => setFormData({...formData, code: event.target.value})}
                required
              />
            </Form.Group>
            <Form.Group controlId="categoria">
            <Form.Label>Categoría del producto</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingrese la categoria del producto"
                onChange={(event) => setFormData({...formData, category: event.target.value})}
                required
              />
        </Form.Group>
            <Button type="submit" variant="success" className="mt-3">
              Subir producto
            </Button>
          </Form>
        </Col>
        <Col md={6} className="bg-light p-4 rounded">
          <h2 className="text-center mb-4">Vista previa</h2>
          <ul className="list-group">
            <li className="list-group-item"><strong>Nombre:</strong> {formData.name}</li>
            <li className="list-group-item"><strong>Descripción:</strong> {formData.description}</li>
            <li className="list-group-item"><strong>Precio:</strong> ARS$ {formData.price}</li>
            <li className="list-group-item"><strong>Stock:</strong> {formData.stock}</li>
            <li className="list-group-item"><strong>Código:</strong> {formData.code}</li>
            <li className="list-group-item"><strong>Categoría:</strong> {formData.category}</li>
          </ul>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Producto subido con éxito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El producto se ha subido correctamente.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => { handleCloseModal(); window.location.reload(); }}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}