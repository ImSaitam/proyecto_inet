import axios from "axios";
import BarraNav from "./Navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";

export default function EditarProductos() {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({});

  const [showModal, setShowModal] = useState(false);

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

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const borrarProducto = async (product) => {
    try {
      const response = await axios.delete(`http://localhost:8000/products/${product.id}`, {
        headers: {
          'Authorization':  'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (product) => {
    try {
      const response = await axios.put(`http://localhost:8000/products/${product.id}`, product, {
        headers: {
          'Authorization':  'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      setEditedProduct(product); // actualizamos el estado con el producto editado
      setShowModal(true); // Mostramos el modal después de editar el producto
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BarraNav />
      <h2 className="title-1">Productos:</h2>
      <div className="contenido-catalogo">
        <Table striped bordered className="centered-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Form.Control
                    type="text"
                    value={product.name}
                    onChange={(e) => {
                      setProducts((prevProducts) => {
                        const newProducts = [...prevProducts];
                        newProducts.find((p) => p.id === product.id).name = e.target.value;
                        return newProducts;
                      });
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={product.description}
                    onChange={(e) => {
                      setProducts((prevProducts) => {
                        const newProducts = [...prevProducts];
                        newProducts.find((p) => p.id === product.id).description = e.target.value;
                        return newProducts;
                      });
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={product.category}
                    onChange={(e) => {
                      setProducts((prevProducts) => {
                        const newProducts = [...prevProducts];
                        newProducts.find((p) => p.id === product.id).category = e.target.value;
                        return newProducts;
                      });
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    value={product.price}
                    onChange={(e) => {
                      setProducts((prevProducts) => {
                        const newProducts = [...prevProducts];
                        newProducts.find((p) => p.id === product.id).price = e.target.value;
                        return newProducts;
                      });
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    value={product.stock}
                    onChange={(e) => {
                      setProducts((prevProducts) => {
                        const newProducts = [...prevProducts];
                        newProducts.find((p) => p.id === product.id).stock = e.target.value;
                        return newProducts;
                      });
                    }}
                  />
                </td>
                <td>
                  <Button variant="success" className="w-40" onClick={() => handleSubmit(product)}>Editar</Button>
                  <Button variant="danger" className="w-40 ms-2" onClick={() => borrarProducto(product)}>Borrar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Producto editado con éxito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            El producto se ha editado correctamente.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => { handleCloseModal(); window.location.reload(); }}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
}