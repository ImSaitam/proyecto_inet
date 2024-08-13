import './App.css';
import Inicio from './components/Inicio.js'
import LoginForm from './components/login.js';
import RegisterForm from './components/register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}
