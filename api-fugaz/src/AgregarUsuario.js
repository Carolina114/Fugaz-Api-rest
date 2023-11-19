import React, { useState } from 'react';
import axios from 'axios';
import uniquid from 'uniquid';
function AgregarUsuario() {
    //hooks
    const [name_rol, setNamerol]=useState('')
    const [state_rol, setStaterol]=useState('')
    const [name_permission, setNameper]=useState('')
    const [name_user, setNameuser]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [state_user, setStateuser]=useState('')
    const[date_register, setDater]=useState('')

    function agregarUsuario(){
        var Usuario ={
            name_rol: name_rol,
            state_rol: state_rol,
            name_permission: name_permission,
            name_user: name_user,
            email: email,
            password: password,
            state_user: state_user,
            date_register: date_register,
            iduser: uniquid()
        }
        console.log(Usuario)
        axios.post('/api/usuario/Agregarusuario', Usuario)
        .then(res => {
            if (res.data && res.data.message) {
            alert(res.data.message);
            } else {
            console.log(res); // Imprime la respuesta completa para ver su estructura
            alert('Usuario agregado correctamente');
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
                <h2 className='mt-4'>Crear Un nuevo usuario</h2>
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
                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Rol</button>
                </div>
            </div>
        </div>
    )
}
export default AgregarUsuario