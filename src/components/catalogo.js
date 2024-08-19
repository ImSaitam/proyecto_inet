import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from "./Navbar";
import Footer from "./footer.js";
import Button from "react-bootstrap/Button";
import "../catalogo.css";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Catalogo() {
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

  const calzados = products.filter((product) => product.category === "Calzado");
  const camisetas = products.filter(
    (product) => product.category === "Camisetas"
  );

  return (
    <>
      <BarraNav />
      <h2 className="title-1">Calzados</h2>
      <div className="contenido-catalogo">
        <Table striped bordered className="centered-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(calzados) ? (
              calzados.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>ARS ${product.price}</td>
                  <td className="actions-catalogo">
                    <ButtonGroup className="button-comprar" aria-label="">
                      <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                      <Button variant="success">
                        <IoCartOutline />
                      </Button>
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
      <h2 className="title-1">Camisetas</h2>
      <div className="contenido-catalogo">
        <Table striped bordered className="centered-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(camisetas) ? (
              camisetas.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>ARS ${product.price}</td>
                  <td className="actions-catalogo">
                    <ButtonGroup className="button-comprar" aria-label="">
                      <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                      <Button variant="success">
                        <IoCartOutline />
                      </Button>
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
      <Footer />
    </>
  );
}
