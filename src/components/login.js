import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo.png';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const params = new URLSearchParams();
        params.append('username', formData.username);
        params.append('password', formData.password);

        try {
            const response = await axios.post("http://localhost:8000/auth/login", params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            localStorage.setItem('token', response.data.access_token);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
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
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text' placeholder="Nombre de Usuario" onChange={(event) => setFormData({...formData, username: event.target.value})} autoFocus required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='password' placeholder="Contraseña" onChange={(event) => setFormData({...formData, password: event.target.value})} required />
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
