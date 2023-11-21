import React  from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function CompraIndividual({compra}) {

    const navegar = useNavigate()

    //funcion para eliminar usuario
    function borrarcompra(idbuy){
        axios.post('/api/compra/borrarcompra', {idbuy: idbuy}).then(res => {
            console.log(res.data[0])
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        } )
    }




    return(
        <div className="conteiner">
            <div className="row">

            <div className="col-sm-6 offset-3">
                <ul className="list-group">
                    <li className="list-group-item">{compra.idbuy}</li>
                    <li className="list-group-item">{compra.buy_date}</li>
                    <li className="list-group-item">{compra.price_total}</li>
                    <li className="list-group-item">{compra.payment_methods}</li>
                    <li className="list-group-item">{compra.quantity}</li>
                    <li className="list-group-item">{compra.subtotal}</li>
                    <li className="list-group-item">{compra.name_category}</li>
                    <li className="list-group-item">{compra.name_input}</li>
                    <li className="list-group-item">{compra.stock}</li>
                    <li className="list-group-item">{compra.unit_price}</li>
                    <li className="list-group-item">{compra.status_input}</li>
                    <li className="list-group-item">{compra.type}</li>
                    <li className="list-group-item">{compra.full_name}</li>
                    <li className="list-group-item">{compra.document}</li>
                    <li className="list-group-item">{compra.rut}</li>
                    <li className="list-group-item">{compra.legal_representative_name}</li>
                    <li className="list-group-item">{compra.phone}</li>
                    <li className="list-group-item">{compra.address}</li>
                    <li className="list-group-item">{compra.statuspro}</li>
                </ul>

                <Link to={`/editarcompra/${compra.idbuy}`}><li className="btn btn-sucess">Editar</li></Link>
                &nbsp; 
                <button className="btn btn-danger" onClick={()=>{borrarcompra(compra.idbuy)}}>Eliminar</button>
                <hr className="mt-4"></hr>

            </div>



            </div>

        </div>
    )
}
export default CompraIndividual