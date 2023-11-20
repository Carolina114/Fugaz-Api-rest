import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import AgregarCompra from './AgregarCompra';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaCompras from './ListaCompras';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Crud Fugaz Retro</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Listar Usuarios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarUsuario">Agregar usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AppV">Listar Ventas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AppV">Agregar Venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AppV">Listar Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AppV">Agregar producto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="listaCompra">Lista Compras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarCompra">Agregar compra</a>
              </li>
            </ul>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios />} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />} exact></Route>
          <Route path='/editarusuario/:iduser' element={<EditarUsuario />} exact ></Route>
         
          <Route path='/agregarcompra' element={<AgregarCompra />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
