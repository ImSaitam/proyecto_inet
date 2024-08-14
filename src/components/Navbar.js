import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function BarraNav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to={"/"}>
        <Navbar.Brand>
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Nombre
        </Navbar.Brand>
        </Link>
        <Dropdown as={ButtonGroup}>
            <Link to={"/carrito"}>
              <Button variant="success">
                  <FiShoppingCart className='carrito-icon' />
              </Button>
            </Link>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
            </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
