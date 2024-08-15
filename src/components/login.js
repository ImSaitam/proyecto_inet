import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { Image } from 'react-bootstrap';

export default function LoginForm() {
    return (
        <div className='login-container'>
            <div className='login-box'>
                <h5>Inicio de sesión</h5>
                <hr className="bg-light division"/>
                <div className='logo'>
                    <Image src={logo} alt="Pocho Sports Logo" />
                </div>
                <h2>Pocho Sports</h2>
                <p>Productos para Deportes al Aire Libre</p>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text' placeholder="Nombre de Usuario" autoFocus required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='password' placeholder="Contraseña" required />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </Button>
                </Form>
                <div className='register-link'>
                    <Link to={"/register"}>
                        Nuevo en Pocho Sports? Registrate aqui.
                    </Link>
                </div>
            </div>
        </div>
    );
}
