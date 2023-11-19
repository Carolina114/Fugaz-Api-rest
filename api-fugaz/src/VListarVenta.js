import React, { useEffect, useState }  from 'react'
import VentaIndividual from './VentaIndividual'
import axios from 'axios'
function ListaVentas() {
    const[dataventas, setdataventa]=useState([])

    useEffect(() =>{
        axios.get('/api/venta/obtenerventas').then(res => {
            console.log(res)
            setdataventa(res.data)
        }).catch(err =>{
            console.log(err)
        })
    } )

    //mapeo de la lista
    const listaventas = dataventas.map(venta =>{
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