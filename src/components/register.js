import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../register.css'
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    return(
        <Form className='registerForm'>
            <Form.Group className='mb-3'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Correo electrónico:</Form.Label>
                <Form.Control type='email' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type='password' className='form-control' required />
            </Form.Group>
            <Button type='submit' className="btn btn-primary">
                Registrarse
            </Button>
            <Link type="button" className="btn btn-secondary" to={"/login"}>
            Volver
            </Link>
        </Form>
    );
}