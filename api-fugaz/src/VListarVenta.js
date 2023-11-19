import React, { useEffect, useState }  from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'
function ListaUsuarios() {
    const[datausuarios, setdatausuario]=useState([])

    useEffect(() =>{
        axios.get('/api/usuario/obtenerusuarios').then(res => {
            console.log(res)
            setdatausuario(res.data)
        }).catch(err =>{
            console.log(err)
        })
    } )

    //mapeo de la lista
    const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    } )

    return(
        <div>
            <h2>Lista de Usuarios</h2>
            {listausuarios}
        </div>
    )
}
export default ListaUsuarios