import React, { useEffect, useState }  from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import BarraBusqueda from './BarraBusqueda';
import axios from 'axios'

function ListaUsuarios() {
    const[datausuarios, setdatausuario]=useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() =>{
        axios.get('/api/usuario/obtenerusuarios').then(res => {
            console.log(res)
            setdatausuario(res.data)
        }).catch(err =>{
            console.log(err)
        })
    } )

    const handleBusqueda = (busqueda) => {
        setSearchTerm(busqueda.toLowerCase());
        setIsSearching(true);
    };

          const filteredUsuarios = datausuarios.filter((usuario) => {
            const nombreRol = usuario.name_rol.toLowerCase();
            const nombreUsuario = usuario.name_user.toLowerCase();
            const fechaRegistro = usuario.date_register.toLowerCase();
            return (
              nombreRol.includes(searchTerm) ||
              nombreUsuario.includes(searchTerm) ||
              fechaRegistro.includes(searchTerm)
            );
    });

    //mapeo de la lista
    const listausuarios = (isSearching ? filteredUsuarios : datausuarios).map(usuario =>{
        return(
            <div key={usuario.iduser}>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    } )

    return(

        <div>
            <h2>Lista de Usuarios</h2>
            <BarraBusqueda className='search' onBuscar={handleBusqueda}/>
            <br/>
            <button className="btn btn-info"
            onClick= { ()=>{window.location='agregarusuario'} } 
            >
                Agregar Usuario
            </button>
            {listausuarios.length ? listausuarios : <p>No se encontraron resultados</p>}
        </div>
    )
}
export default ListaUsuarios