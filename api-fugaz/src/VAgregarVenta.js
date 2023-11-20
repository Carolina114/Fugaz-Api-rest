import React, { useState } from 'react';
import axios from 'axios';
import uniquid from 'uniquid';
import App from './App';
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
    const [name, setname] = useState('')
    const [size, setsize] = useState('')
    const [color, setcolor] = useState('')
    const [photo, setphoto] = useState('')
    const [sale_price, setsale_price] = useState('')



    function agregarVenta() {
        const Venta = {
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
        axios.post('/api/venta/vagregarventa', Venta)
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
                        <label htmlFor='shipping_cost' className='form-label'>Costo de compra</label>
                        <input type='number' className='form-control' value={shipping_cost} onChange={(e) => { setshipping_cost(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='total_sale' className='form-label'>Venta total</label>
                        <input type='number' className='form-control' value={total_sale} onChange={(e) => { settotal_sale(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='document' className='form-label'>Documento</label>
                        <input type='text' className='form-control' value={document} onChange={(e) => { setdocument(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Dirección</label>
                        <input type='text' className='form-control' value={address} onChange={(e) => { setaddress(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='city' className='form-label'>Ciudad</label>
                        <input type='text' className='form-control' value={city} onChange={(e) => { setcity(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>Teléfono</label>
                        <input type='text' className='form-control' value={phone} onChange={(e) => { setphone(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='order_status' className='form-label'>Estado del Pedido</label>
                        <input type='text' className='form-control' value={order_status} onChange={(e) => { setorder_status(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Method_payment' className='form-label'>Método de pago</label>
                        <input type='text' className='form-control' value={Method_payment} onChange={(e) => { setMethod_payment(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date_order' className='form-label'>Fecha del pedido</label>
                        <input type='date' className='form-control' value={date_order} onChange={(e) => { setdate_order(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='deliver_date' className='form-label'>Fecha de entrega</label>
                        <input type='date' className='form-control' value={deliver_date} onChange={(e) => { setdeliver_date(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='order_cost' className='form-label'>Costo del pedido</label>
                        <input type='number' className='form-control' value={order_cost} onChange={(e) => { setorder_cost(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='amount' className='form-label'>Cantidad</label>
                        <input type='number' className='form-control' value={amount} onChange={(e) => { setamount(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='unit_price' className='form-label'>Precio unitario</label>
                        <input type='number' className='form-control' value={unit_price} onChange={(e) => { setunit_price(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='subtotal' className='form-label'>Subtotal</label>
                        <input type='number' className='form-control' value={subtotal} onChange={(e) => { setsubtotal(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size' className='form-label'>Talla</label>
                        <input type='text' className='form-control' value={size} onChange={(e) => { setsize(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='color' className='form-label'>Color</label>
                        <input type='text' className='form-control' value={color} onChange={(e) => { setcolor(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='photo' className='form-label'>Foto</label>
                        <input type='text' className='form-control' value={photo} onChange={(e) => { setphoto(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='sale_price' className='form-label'>Precio de venta</label>
                        <input type='number' className='form-control' value={sale_price} onChange={(e) => { setsale_price(e.target.value) }}></input>
                    </div>
                    <button onClick={agregarVenta} className="btn btn-success">Guardar Venta</button>
                </div>

            </div>
        </div>
    )
}
export default AgregarVenta