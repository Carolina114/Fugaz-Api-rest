import React, { useEffect, useState }  from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import AgregarVenta from './VAgregarVenta';
import axios from 'axios'
function ListaVentas() {
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
    const listaventas = datausuarios.map(venta =>{
        return(
            <div>
                <VentaIndividual venta={venta}/>
            </div>
        )
    } )

    return(
        <div>
            <h2>Lista de Ventas</h2>
            <button className="btn btn-info"
            onClick= { ()=>{window.location='agregarventa'} } 
            >
                Agregar Venta
            </button>
            {listaventas}
        </div>
    )
}
export default ListaVentas