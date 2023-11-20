import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import VListarVenta from './VListarVenta'
import VAgregarVenta from './VAgregarVenta';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img src={logo} alt="" width="30" height="24"></img>
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
                <a className="nav-link" href="VListarVenta">Listar Venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="VAgregarVenta">Agregar venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Listar Compras</a>
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
          <Route path='/vlistaventa' element={<VListarVenta />} exact></Route>
          <Route path='/vagregarventa' element={<VAgregarVenta />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
