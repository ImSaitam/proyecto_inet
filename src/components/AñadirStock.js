import Footer from './footer';
import BarraNav from './Navbar.js';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function AñadirStock() {
  return (
    <>
      <BarraNav />
      <Form>
        <Row>
          <Col className='ms-3' md={6}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre del producto" 
                onChange={(e) => document.getElementById('nombre-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control as="textarea" placeholder="Ingrese la descripción del producto" 
                onChange={(e) => document.getElementById('descripcion-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Form.Group controlId="precio">
              <Form.Label>Precio del producto</Form.Label>
              <Form.Control type="number" placeholder="Ingrese el precio del producto" 
                onChange={(e) => document.getElementById('precio-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>Stock del producto</Form.Label>
              <Form.Control type="number" placeholder="Ingrese el stock del producto" 
                onChange={(e) => document.getElementById('stock-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Form.Group controlId="codigo">
              <Form.Label>Código del producto</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el código del producto" 
                onChange={(e) => document.getElementById('codigo-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Form.Group controlId="categoria">
              <Form.Label>Categoría del producto</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la categoría del producto" 
                onChange={(e) => document.getElementById('categoria-preview').innerText = e.target.value} 
              />
            </Form.Group>
            <Button variant='success' className='mt-3'>Subir producto</Button>
          </Col>
          <Col md={5}>
            <h2>Vista previa del producto</h2>
            <p>Nombre del producto: <span id="nombre-preview"></span></p>
            <p>Descripción del producto: <span id="descripcion-preview"></span></p>
            <p>Precio del producto: $<span id="precio-preview"></span></p>
            <p>Stock del producto: <span id="stock-preview"></span></p>
            <p>Código del producto: <span id="codigo-preview"></span></p>
            <p>Categoría del producto: <span id="categoria-preview"></span></p>
          </Col>
        </Row>
      </Form>
      <Footer />
    </>
  );
}