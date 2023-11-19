import React  from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function UsuarioIndividual({usuario}) {

    const navegar = useNavigate()

    //funcion para eliminar usuario
    function borrarusuario(iduser){
        axios.post('/api/usuario/borrarusuario', {iduser: iduser}).then(res => {
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
                    <li className="list-group-item">{usuario.iduser}</li>
                    <li className="list-group-item">{usuario.name_rol}</li>
                    <li className="list-group-item">{usuario.state_rol}</li>
                    <li className="list-group-item">{usuario.name_permission}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.passaword}</li>
                    <li className="list-group-item">{usuario.state_user}</li>
                    <li className="list-group-item">{usuario.date_register}</li>
                </ul>
                <br></br>
                <Link to={`/editarusuario/${usuario.iduser}`}><li className="btn btn-success">Editar</li></Link>
                &nbsp; 
                <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.iduser)}}>Eliminar</button>
                <hr className="mt-4"></hr>

            </div>



            </div>

        </div>
    )
}
export default UsuarioIndividual