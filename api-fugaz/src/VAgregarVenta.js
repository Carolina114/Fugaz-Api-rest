import React, { useState } from 'react';
import axios from 'axios';
import uniquid from 'uniquid';
function AgregarVenta() {
    //hooks
    const [shipping_cost, setshipping_cost] = useState('')
    const [total_sale, settotal_sale] = useState('')
    const [document, setdocument] = useState('')
    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [phone, setphone] = useState('')
    const [order_status, setorder_status] = useState('')
    const [Method_payment, setMethod_payment] = useState('')
    const [date_order, setdate_order] = useState('')
    const [deliver_date, setdeliver_date] = useState('')
    const [order_cost, setorder_cost] = useState('')
    const [amount, setamount] = useState('')
    const [unit_price, setunit_price] = useState('')
    const [subtotal, setsubtotal] = useState('')
    const [name, setnamer] = useState('')
    const [size, setsize] = useState('')
    const [color, setcolor] = useState('')
    const [photo, setphoto] = useState('')
    const [sale_price, setsale_price] = useState('')

    function agregarVenta() {
        var Venta = {
            shipping_cost: shipping_cost,
            total_sale: total_sale,
            document: document,
            address: address,
            city: city,
            phone: phone,
            order_status: order_status,
            Method_payment: Method_payment,
            date_order: date_order,
            deliver_date: deliver_date,
            order_cost: order_cost,
            amount: amount,
            unit_price: unit_price,
            subtotal: subtotal,
            name: name,
            size: size,
            color: color,
            photo: photo,
            sale_price: sale_price,
            idsale: uniquid()
        }
        console.log(Venta)
        axios.post('/api/venta/Agregarventa', Venta)
            .then(res => {
                if (res.data && res.data.message) {
                    alert(res.data.message);
                } else {
                    console.log(res); // Imprime la respuesta completa para ver su estructura
                    alert('Venta agregada correctamente👜');
                }
            })
            .catch(err => {
                console.log(err); // Imprime los errores en la consola para depuración
                alert('Error al procesar la solicitud');
            });
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Crear Una nueva Venta</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='name_rol' className='form-label'>Nombre del rol</label>
                        <input type='text' className='form-control' value={name_rol} onChange={(e) => { setNamerol(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='state_rol' className='form-label'>Estado del rol</label>
                        <input type='text' className='form-control' value={state_rol} onChange={(e) => { setStaterol(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name_permission' className='form-label'>Nombre del permiso</label>
                        <input type='text' className='form-control' value={name_permission} onChange={(e) => { setNameper(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name_user' className='form-label'>Nombre del Usuario</label>
                        <input type='text' className='form-control' value={name_user} onChange={(e) => { setNameuser(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Correo</label>
                        <input type='email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Contraseña</label>
                        <input type='password' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='state_user' className='form-label'>Estado del Usuario</label>
                        <input type='text' className='form-control' value={state_user} onChange={(e) => { setStateuser(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date_register' className='form-label'>Fecha de registro</label>
                        <input type='date' className='form-control' value={date_register} onChange={(e) => { setDater(e.target.value) }}></input>
                    </div>
                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Rol</button>
                </div>
            </div>
        </div>
    )
}
export default AgregarUsuario