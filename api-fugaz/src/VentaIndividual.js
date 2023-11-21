import React  from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function VentaIndividual({venta}) {

    const navegar = useNavigate()

    //funcion para eliminar usuario
    function borrarventa(idsale){
        axios.post('/api/venta/borrarventa', {idsale: idsale}).then(res => {
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
                    <li className="list-group-item">{venta.idsale}</li>
                    <li className="list-group-item">{venta.shipping_cost}</li>
                    <li className="list-group-item">{venta.total_sale}</li>
                    <li className="list-group-item">{venta.document}</li>
                    <li className="list-group-item">{venta.address}</li>
                    <li className="list-group-item">{venta.city}</li>
                    <li className="list-group-item">{venta.phone}</li>
                    <li className="list-group-item">{venta.order_status}</li>
                    <li className="list-group-item">{venta.Method_payment}</li>
                    <li className="list-group-item">{venta.data_order}</li>
                    <li className="list-group-item">{venta.deliver_data}</li>
                    <li className="list-group-item">{venta.order_cost}</li>
                    <li className="list-group-item">{venta.amount}</li>
                    <li className="list-group-item">{venta.unit_price}</li>
                    <li className="list-group-item">{venta.sobtotal}</li>
                    <li className="list-group-item">{venta.name}</li>
                    <li className="list-group-item">{venta.size}</li>
                    <li className="list-group-item">{venta.color}</li>
                    <li className="list-group-item">{venta.photo}</li>
                    <li className="list-group-item">{venta.sale_price}</li>
                </ul>

                <Link to={`/editarventa/${venta.idsale}`}><li className="btn btn-sucess">Editar</li></Link>
                &nbsp; 
                <button className="btn btn-danger" onClick={()=>{borrarventa(venta.idsale)}}>Eliminar</button>
                <hr className="mt-4"></hr>

            </div>



            </div>

        </div>
    )
}
export default VentaIndividual