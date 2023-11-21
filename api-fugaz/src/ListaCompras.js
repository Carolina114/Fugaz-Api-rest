import React, { useEffect, useState }  from 'react'
import CompraIndividual from './CompraIndividual'
import axios from 'axios'
function ListaCompras() {
    const[datacompras, setdatacompra]=useState([])

    useEffect(() =>{
        axios.get('/api/compra/obtenercompras'). then(res => {
            console.log(res)
            setdatacompra(res.data)
        }).catch(err =>{
            console.log(err)
        })
    } )

    //mapeo de la lista
    const listacompras = datacompras.map(compra =>{
        return(
            <div>
                <CompraIndividual compra={compra}/>
            </div>
        )
    } )

    return(
        <div>
            <h2>Lista de Compras</h2>
            <button className="btn btn-info"
            onClick= { ()=>{window.location='agregarcompra'} } 
            >
                Agregar Compra
            </button>
            {listacompras}
        </div>
    )
}
export default ListaCompras