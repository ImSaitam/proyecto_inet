import './App.css';
import Catalogo from './components/catalogo.js';
import Carrito from './components/Carrito.js';
import Inicio from './components/Inicio.js';
import LoginForm from './components/Login.js';
import RegisterForm from './components/register.js';
import AñadirStock from './components/AñadirStock.js';
import VerPedidos from './components/verpedidos.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Carrito';
import EditarProductos from './components/EditarProductos.js';
import ProtectedRoute from './components/ProtectedRoute.js';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/agregarproductos' element={
            <ProtectedRoute>
              <AñadirStock />
            </ProtectedRoute>
          } />
          <Route path='/editarproductos' element={
            <ProtectedRoute>
              <EditarProductos />
            </ProtectedRoute>
          } />
          <Route path='/verpedidos' element={
            <ProtectedRoute>
              <VerPedidos />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
