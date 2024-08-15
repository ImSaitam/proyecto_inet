import './App.css';
import Catalogo from './components/catalogo.js';
import Carrito from './components/Carrito.js';
import Inicio from './components/Inicio.js';
import LoginForm from './components/Login.js';
import RegisterForm from './components/Register.js';
import AñadirStock from './components/AñadirStock.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element={<Inicio />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/añadirstock' element={<AñadirStock />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}
