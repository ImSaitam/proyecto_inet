import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../register.css';
import logo from '../images/logo.png';
import { Image } from 'react-bootstrap';
import axios from 'axios';


export default function RegisterForm() {
    const [step, setStep] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        role: "client",
        country: "",
        province: "",
        party: "",
        locality:  "",
        address: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/auth/register", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            navigate("/login")
        } catch (error) {
            console.error(error);
        }
    }

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
                <Form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Nombre" onChange={(event) => setFormData({...formData, first_name: event.target.value})} autoFocus required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Apellido" onChange={(event) => setFormData({...formData, last_name: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Nombre de usuario' onChange={(event) => setFormData({...formData, username: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='email' placeholder="Correo electrónico" onChange={(event) => setFormData({...formData, email: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder="Contraseña" onChange={(event) => setFormData({...formData, password: event.target.value})} required />
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
                                <Form.Control type='text' placeholder="País de residencia" onChange={(event) => setFormData({...formData, country: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Provincia" onChange={(event) => setFormData({...formData, province: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Partido" onChange={(event) => setFormData({...formData, party: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Localidad" onChange={(event) => setFormData({...formData, locality: event.target.value})} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder="Dirección" onChange={(event) => setFormData({...formData, address: event.target.value})} required />
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
