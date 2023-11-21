import React, { useEffect, useState }  from 'react'
import VentaIndividual from './VentaIndividual'
import axios from 'axios'
function ListaVentas() {
    const[dataventas, setdataventa]=useState([])

    useEffect(() =>{
        axios.get('/api/venta/obtenerventas'). then(res => {
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
            <h2>Lista de ventas</h2>
            {listaventas}
        </div>
    )
}
export default ListaVentas