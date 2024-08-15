import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../register.css';
import logo from '../images/logo.png';
import { Image } from 'react-bootstrap';

export default function RegisterForm() {
    const [step, setStep] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleNextStep = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStep(2);
            setIsAnimating(false);
        }, 150);
    };

    const handlePreviousStep = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStep(1);
            setIsAnimating(false);
        }, 150);
    };

    const handleNavigateToLogin = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/login');
        }, 150);
    };

    return (
        <div className='register-container'>
            <div className={`register-box ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <h5>Crear cuenta</h5>
                <hr className="bg-light division"/>
                <div className='logo'>
                    <Image src={logo} alt="Pocho Sports Logo" />
                </div>
                <h2>Pocho Sports</h2>
                <p>Productos para Deportes al Aire Libre</p>
                <Form>
                    {step === 1 && (
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Nombre" autoFocus required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Apellido" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='email' placeholder="Correo electrónico" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder="Contraseña" required />
                            </Form.Group>
                            <Button type='button' className="btn btn-primary" onClick={handleNextStep}>
                                Siguiente
                            </Button>
                            <div className='register-link'>
                                <Link to={"/login"} onClick={handleNavigateToLogin}>Ya tengo cuenta</Link>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="País de residencia" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Provincia" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Partido" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Localidad" required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Dirección" required />
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
            </div>
        </div>
    );
}
