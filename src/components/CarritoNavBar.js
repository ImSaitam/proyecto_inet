import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import { IoCartOutline } from "react-icons/io5";
import '../CarritoNavBar.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CarritoNavBar() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  if (!token) {
    return (
      <Dropdown className="carrito">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <IoCartOutline />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu-end carrito-dropdown'>
        <p className='text-carrito mt-2'>Productos:</p>
        <hr className="bg-light division-login"/>
          <Link to={"/login"} className='text-login ms-4 text-decoration-none d-inline'>Iniciar sesión</Link><p className='d-inline text-login'>para acceder al carrito</p> 
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <Dropdown className="carrito">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <IoCartOutline />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-menu-end carrito-dropdown'>
        {/* contenido del carrito */}
        <p className='text-carrito mt-2'>Productos:</p>
        <hr className="bg-light division"/>
        {/* resto del contenido del carrito */}
        <Link to={"/carrito"}><Button className='checkout-button' variant='success'>Finalizar compra</Button></Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}