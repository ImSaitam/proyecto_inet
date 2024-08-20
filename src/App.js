import './App.css';
import Catalogo from './components/catalogo.js';
import Carrito from './components/Carrito.js';
import Inicio from './components/Inicio.js';
import LoginForm from './components/Login.js';
import RegisterForm from './components/register.js';
import AñadirStock from './components/AñadirStock.js';
import VerPedidos from './components/ver_pedidos.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Carrito'; // Asegúrate de importar CartProvider correctamente
import EditarProductos from './components/EditarProductos.js';

export default function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación en CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path='/verpedidos' element={<VerPedidos />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/agregarproductos' element={<AñadirStock />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/editarproductos' element={<EditarProductos />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
