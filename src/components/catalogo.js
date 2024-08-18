import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Navbar';
import Footer from './footer.js';
import Button from 'react-bootstrap/Button';
import '../catalogo.css';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { IoCartOutline } from "react-icons/io5";


export default function Catalogo() {
    return (
        <>
        <BarraNav />
            <h2 className="title-1">Calzados</h2>
            <div className='contenido-catalogo'>
            <Table striped bordered className='centered-table'>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>  </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Nike Phato</td>
                <td>...........</td>
                <td>ARS $75.000</td>
                <td>Calzado</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Nike Phato</td>
                <td>...........</td>
                <td>ARS $75.000</td>
                <td>Calzado</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Nike Phato</td>
                <td>...........</td>
                <td>ARS $75.000</td>
                <td>Calzado</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Nike Phato</td>
                <td>...........</td>
                <td>ARS $75.000</td>
                <td>Calzado</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Nike Phato</td>
                <td>...........</td>
                <td>ARS $75.000</td>
                <td>Calzado</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
            </tbody>
            </Table>
        </div>
        <h2 className="title-1">Camisetas</h2>
            <div className='contenido-catalogo'>
            <Table striped bordered className='centered-table'>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>  </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Camiseta boca</td>
                <td>...........</td>
                <td>ARS $91.200</td>
                <td>Camiseta</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Camiseta boca</td>
                <td>...........</td>
                <td>ARS $91.200</td>
                <td>Camiseta</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Camiseta boca</td>
                <td>...........</td>
                <td>ARS $91.200</td>
                <td>Camiseta</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Camiseta boca</td>
                <td>...........</td>
                <td>ARS $91.200</td>
                <td>Camiseta</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
                <tr>
                <td>Camiseta boca</td>
                <td>...........</td>
                <td>ARS $91.200</td>
                <td>Camiseta</td>
                <td className='actions-catalogo'>
                    <ButtonGroup className="button-comprar" aria-label="">
                    <Button variant="success">Comprar</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="button-carrito">
                    <Button variant="success"><IoCartOutline /></Button>
                    </ButtonGroup>
                </td>
                </tr>
            </tbody>
            </Table>
        </div>
        <Footer />
        </>
    );
}