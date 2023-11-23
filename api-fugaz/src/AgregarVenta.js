import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uniquid from 'uniquid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ciudadesColombia = [
    'Bogotá',
'Medellín',
'Cali',
'Barranquilla',
'Cartagena',
'Cúcuta',
'Bucaramanga',
'Ibagué',
'Santa Marta',
'Valledupar',
'Villavicencio',
'Pereira',
'Manizales',
'Pasto',
'Montería',
'Neiva',
'Popayán',
'Armenia',
'Riohacha',
'Tunja',
'Quibdó',
'Florencia',
'Mocoa',
'San Andrés',
'Sincelejo',
'Mitú',
'Puerto Carreño',
  ];
const metodoPago = [
    'Bancolombia',
    'Daviplata',
    'Nequi',
  ];
const tallas = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
  ];

function AgregarVenta() {
    //hooks

    const [shipping_cost, setShippingcost]=useState('')
    const [total_sale, setTotalsale]=useState('')
    const [document, setDocument]=useState('')
    const [address, setAddress]=useState('')
    const [city, setCity]=useState('')
    const [phone, setPhone]=useState('')
    const [order_status, setOrderstatus]=useState('')
    const [Method_payment, setMethodpayment]=useState('')
    const [date_order, setDateorder]=useState('')
    const [deliver_date, setDeliverdate]=useState('')
    const [order_cost, setOrdercost]=useState('')
    const [amount, setAmount]=useState('')
    const [unit_price, setUnitprice]=useState('')
    const [subtotal, setSubtotal]=useState('')
    const [name, setName]=useState('')
    const [size, setSize]=useState('')
    const [color, setColor]=useState('')
    const [photo, setPhoto]=useState('')
    const [sale_price, setSaleprice]=useState('')
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [metododePago, setmetododePago] = useState('');
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    
   /* useEffect(() => {
        setStock(quantity); // Actualiza el stock con la cantidad ingresada
    }, [quantity]);

    

    useEffect(() => {
        if (quantity && stock) {
            const availableStatus = parseInt(quantity) <= parseInt(stock) ? 'disponible' : 'agotado';
            setStatusinput(availableStatus);
        }
    }, [quantity, stock]);

    useEffect(() => {
        const subtotalValue = quantity && unit_price ? quantity * parseFloat(unit_price) : 0;
        setSubtotal(subtotalValue);
      }, [quantity, unit_price]);
      

    useEffect(() => {
        const total = subtotal ? subtotal : 0;
        setPricetotal(total);
    }, [subtotal]);*/

    function agregarVenta(){
        var Venta ={
            shipping_cost: shipping_cost,
            total_sale: total_sale,
            document: document,
            address: address,
            city: ciudadSeleccionada,
            phone: phone,
            order_status: order_status,
            Method_payment: metododePago,
            date_order: date_order,
            deliver_date: deliver_date,
            order_cost: order_cost,
            amount: amount,
            unit_price: unit_price,
            subtotal: subtotal,
            name: name,
            size: tallaSeleccionada,
            color: color,
            photo: photo,
            sale_price: sale_price,
            idsale: uniquid()

            
        }
        console.log(Venta)
        axios
        .post('/api/venta/Agregarventa', Venta)
        .then((res) => {
            if (res.data && res.data.message) {
            toast.error(res.data.message);
            } else {
            console.log(res); // Imprime la respuesta completa para ver su estructura
            toast.success('Venta agregada correctamente');
            }
        })
        .catch(() => {
             // Imprime los errores en la consola para depuración
            toast.error('Error al procesar la solicitud');
        });
    }

    return(
    <div className='container'>
         <div className='row'>
            <h2 className='mt-4'>Crear una nueva Venta</h2>
         </div>

         <div className='row'>
            <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='shipping_cost' className='form-label'>Costo de compra</label>
                        <input type='number' className='form-control' value={shipping_cost} onChange={(e) => { setShippingcost(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='total_sale' className='form-label'>Venta total</label>
                        <input type='number' className='form-control' value={total_sale} onChange={(e) => { setTotalsale(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='document' className='form-label'>Documento</label>
                        <input type='text' className='form-control' value={document} onChange={(e) => { setDocument(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Dirección</label>
                        <input type='text' className='form-control' value={address} onChange={(e) => { setAddress(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
          <label htmlFor='city' className='form-label'>
            Ciudad
          </label>
          <select
            className='form-select'
            value={ciudadSeleccionada}
            onChange={(e) => setCiudadSeleccionada(e.target.value)}
          >
            <option value=''>Selecciona una ciudad</option>
            {ciudadesColombia.map((ciudad) => (
              <option key={ciudad} value={ciudad}>
                {ciudad}
              </option>
            ))}
          </select>
        </div>
                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>Teléfono</label>
                        <input type='text' className='form-control' value={phone} onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>
                    <Form.Group className='mb-3'>
                        <Form.Label>Estado del Pedido</Form.Label>
                        <Form.Check type='switch' id='custom-switch' value={order_status} onChange={(e) => { setOrderstatus(e.target.value) }}/>
                    </Form.Group>
                    <div className='mb-3'>
                        <label htmlFor='Method_payment' className='form-label'>Método de pago</label>
                        <select 
                        className='form-select' 
                        value={metodoPago} 
                        onChange={(e) => { setmetododePago(e.target.value) }}>
                            <option value=''>Selecciona un método de pago</option>
                            {metodoPago.map((metododePago) => (
                                <option key={metododePago} value={metododePago}>
                                    {metododePago}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date_order' className='form-label'>Fecha del pedido</label>
                        <input type='date' className='form-control' value={date_order} onChange={(e) => { setDateorder(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='deliver_date' className='form-label'>Fecha de entrega</label>
                        <input type='date' className='form-control' value={deliver_date} onChange={(e) => { setDeliverdate(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='order_cost' className='form-label'>Costo del pedido</label>
                        <input type='number' className='form-control' value={order_cost} onChange={(e) => { setOrdercost(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='amount' className='form-label'>Cantidad</label>
                        <input type='number' className='form-control' value={amount} onChange={(e) => { setAmount(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='unit_price' className='form-label'>Precio unitario</label>
                        <input type='number' className='form-control' value={unit_price} onChange={(e) => { setUnitprice(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='subtotal' className='form-label'>Subtotal</label>
                        <input type='number' className='form-control' value={subtotal} onChange={(e) => { setSubtotal(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size' className='form-label'>Talla</label>
                        <select type='text' className='form-control' value={size} onChange={(e) => { setSize(e.target.value) }}>
                            <option value=''>Selecciona una talla</option>
                            {tallas.map((talla) => (
                                <option key={talla} value={talla}>
                                    {talla}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='color' className='form-label'>Color</label>
                        <input type='text' className='form-control' value={color} onChange={(e) => { setColor(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='photo' className='form-label'>Foto</label>
                        <input type='file' accept="image/*" className='form-control' value={photo} onChange={(e) => { setPhoto(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='sale_price' className='form-label'>Precio de venta</label>
                        <input type='number' className='form-control' value={sale_price} onChange={(e) => { setSaleprice(e.target.value) }}></input>
                    </div>
                    <button onClick={agregarVenta} className="btn btn-success">Guardar venta</button>
                    <ToastContainer position='bottom-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            </div>
        </div>
    )
}
export default AgregarVenta