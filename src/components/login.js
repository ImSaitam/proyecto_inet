import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
    return(
        <div className='centerForm'>
            <Form className='loginForm'>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type='text' autoFocus required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' required />
                </Form.Group>
                <Button type="submit" className="btn btn-primary">
                    Iniciar sesión
                </Button>
                <Link type="submit" className="btn btn-secondary" to={"/register"}>
                    Registrarse
                </Link>
            </Form>
        </div>
    );
}