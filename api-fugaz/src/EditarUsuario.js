import axios from 'axios'
import { set } from 'mongoose'
import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
function EditarUsuario() {

    const params = useParams()
    
        //hooks
        const [name_rol, setNamerol]=useState('')
        const [state_rol, setStaterol]=useState('')
        const [name_permission, setNameper]=useState('')
        const [name_user, setNameuser]=useState('')
        const [email, setEmail]=useState('')
        const [password, setPassword]=useState('')
        const [state_user, setStateuser]=useState('')
        const[date_register, setDater]=useState('')

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', {iduser: params.iduser}).then(res => {
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNamerol(datausuario.name_rol)
            setStaterol(datausuario.state_rol)
            setNameper(datausuario.name_permission)
            setNameuser(datausuario.name_user)
            setEmail(datausuario.email)
            setPassword(datausuario.password)
            setStateuser(datausuario.state_user)
            setDater(datausuario.date_register)

        })
    }, [])

    //Funciín que actualiza
    function editarUsuario() {
        //obj de actualizar
        const actualizarusuario={
            name_rol: name_rol,
            state_rol: state_rol,
            name_permission: name_permission,
            name_user: name_user,
            email: email,
            password: password,
            state_user: state_user,
            date_register: date_register,
            iduser: params.iduser
        }


        //hacer la peticion con axios 
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data)
            if (res.data && res.data.message) {
            alert(res.data.message);
            } else {
            console.log(res); // Imprime la respuesta completa para ver su estructura
            alert('Usuario actualizado');
            }
        })
        .catch(err => {
            console.log(err); // Imprime los errores en la consola para depuración
            alert('Error al procesar la solicitud');
        });
    }


    return(
        <div className='container'>
        <div className='row'>
            <h2 className='mt-4'>Editar Usuario</h2>
        </div>

        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                    <label htmlFor='name_rol' className='form-label'>Nombre del rol</label>
                    <input type='text' className='form-control' value={name_rol} onChange={(e) => {setNamerol(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='state_rol' className='form-label'>Estado del rol</label>
                    <input type='text' className='form-control' value={state_rol} onChange={(e) => {setStaterol(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name_permission' className='form-label'>Nombre del permiso</label>
                    <input type='text' className='form-control' value={name_permission} onChange={(e) => {setNameper(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name_user' className='form-label'>Nombre del Usuario</label>
                    <input type='text' className='form-control' value={name_user} onChange={(e) => {setNameuser(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Correo</label>
                    <input type='email' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Contraseña</label>
                    <input type='password' className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='state_user' className='form-label'>Estado del Usuario</label>
                    <input type='text' className='form-control' value={state_user} onChange={(e) => {setStateuser(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='date_register' className='form-label'>Fecha de registro</label>
                    <input type='date' className='form-control' value={date_register} onChange={(e) => {setDater(e.target.value)}}></input>
                </div>
                <button onClick={editarUsuario} className="btn btn-success">Actualizar Usuario</button>
            </div>
        </div>
    </div>
    )
}
export default EditarUsuario