import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import { IoCartOutline } from "react-icons/io5";
import '../CarritoNavBar.css';
import { Button, Image } from "react-bootstrap";
import art1 from "../images/botin1.png";
import { Link } from 'react-router-dom';

export default function CarritoNavBar() {
    return (
        <Dropdown className="carrito">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              <IoCartOutline />
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu-end carrito-dropdown'>
              <p className='text-carrito mt-2'>Productos:</p>
              <hr className="bg-light division"/>
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#dbdbdb', borderRadius: '.5em', margin: '1em' }}>
                <Image src={art1} className="product-image" fluid />
                <p className="mt-4 product-amount" >x 1</p>
                <p className="mt-4 product-name">Umbro Class</p>
                <p className="mt-4 product-price">$25999.99</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#dbdbdb', borderRadius: '.5em', margin: '1em' }}>
                <Image src={art1} className="product-image" fluid />
                <p className="mt-4 product-amount" >x 1</p>
                <p className="mt-4 product-name">Umbro Class</p>
                <p className="mt-4 product-price">$25499.99</p>
              </div>
              <hr className="bg-light division"/>
              <div className="text-end">
                <Link to={"/carrito"}>
                    <Button variant="success" className="mt-2 me-3">Finalizar compra</Button>
                </Link>
              </div>
              </Dropdown.Menu>
            </Dropdown>
    );
}