import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterForm() {

    const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

    return(
        <Form className='registerForm'>
            {step === 1 && (
                <>
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
            <Button type='button' className="btn btn-primary" onClick={handleNextStep}>
                Siguiente
            </Button>
            <Link variant="link" to={"/login"} className='mini-link'>Ya tengo cuenta</Link>
                </>
            )}
            {step === 2 && (
                <>
                            <Form.Group className='mb-3'>
                <Form.Label>País de residencia:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Provincia:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Partido:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Localidad:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control type='text' className='form-control' required />
            </Form.Group>
            <Button type='submit' className="btn btn-primary">
                Registrarse
            </Button>
            <Button type='button' className="btn btn-secondary" onClick={handlePreviousStep}>
                Atrás
            </Button>
                </>
            )}
        </Form>
    );
}