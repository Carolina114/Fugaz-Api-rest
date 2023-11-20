import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uniquid from 'uniquid';
import App from './App';

function AgregarCompra() {
// AgregarCompra.js

const [buy_date, setBuyDate] = useState('');
const [price_total, setPriceTotal] = useState(0); 
const [payment_methods, setPaymentMethod] = useState('');

const [quantity, setQuantity] = useState(0);
const [subtotal, setSubtotal] = useState(0);

const [input_categories_name, setCategoryName] = useState('');

const [inputs_name, setInputName] = useState('');
const [inputs_stock, setStock] = useState(0);
const [inputs_unit_price, setUnitPrice] = useState(0);  
const [inputs_status, setStatus] = useState(false);

const [type, setType] = useState('');

const [natural_full_name, setFullName] = useState('');
const [natural_document, setDocument] = useState('');
const [empresa_rut, setRut] = useState('');
const [empresa_legal_representative_name, setLegalRepresentativeName] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');
const [statuspro, setStatusPro] = useState(false);


    useEffect(() => {
        setStock(quantity); // Actualiza el stock con la cantidad ingresada
    }, [quantity]);

    useEffect(() => {
        const subtotalValue = quantity && inputs_unit_price ? quantity * parseFloat(inputs_unit_price) : 0;
        setSubtotal(subtotalValue);
      }, [quantity, inputs_unit_price]);
      

    useEffect(() => {
        const total = subtotal ? subtotal : 0;
        setPriceTotal(total);
    }, [subtotal]);

    


    function agregarCompra() {
        const Compra = {
          buy: {
            buy_date,
            price_total,
            payment_methods
          },
          purchase_details: {
            quantity,
            subtotal
          },
          input_categories: {
            name: input_categories_name
          },
          inputs: {
            name: inputs_name,
            stock: inputs_stock,
            unit_price: inputs_unit_price,
            status: inputs_status
          },
          type,
          natural: {
            full_name: natural_full_name,
            document: natural_document,
            phone: phone,
            address: address,
            statuspro: statuspro
          },
          empresa: {
            rut: empresa_rut,
            legal_representative_name: empresa_legal_representative_name,
            phone: phone,
            address: address,
            statuspro: statuspro
          },
          idcompra: uniquid(),
        };
    
        console.log(Compra);
        
        axios.post('/api/compra/AgregarCompra', Compra)
          .then((res) => {
            if (res.data && res.data.message) {
              alert(res.data.message);
            } else {
              console.log(res); // Imprime la respuesta completa para ver su estructura
              alert('Compra agregada correctamente');
            }
          })
          .catch((err) => {
            console.log(err); // Imprime los errores en la consola para depuración
            alert('Error al procesar la solicitud');
          });
      }

      return (
        <div className="container">
          <div className="row">
            <h2 className="mt-4">Crear una nueva compra</h2>
          </div>
      
          <div className="row">
            <div className="col-sm-6 offset-3">
              <div className="mb-3">
                <label htmlFor="buy_date">Fecha de compra</label>
                <input 
                  type="date" className="form-control"
                  value={buy_date}
                  onChange={(e) => setBuyDate(e.target.value)}  
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="input_categories_name">Categoría de insumo</label>
                <input
                  type="text" className="form-control"
                  value={input_categories_name}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="inputs_name">Insumo:</label>
                  <input
                    type="text" className="form-control"
                    value={inputs_name}
                    onChange={(e) => setInputName(e.target.value)}  
                  />
              </div>
              
              <div className="mb-3">
                <label htmlFor="quantity">Cantidad</label>
                <input 
                  type="number" className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)} 
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="inputs_stock">Stock</label>
                <input
                  type="number" className="form-control"
                  value={inputs_stock}
                  onChange={(e) => setStock(e.target.value)}  
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="inputs_unit_price">Precio unitario</label>
                <input
                  type="Number"  
                  className="form-control"
                  value={inputs_unit_price}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="inputs_status">Estado</label>
                <input 
                  type="checkbox" 
                  checked={inputs_status}
                  onChange={() => setStatus(!inputs_status)}  
                />
              </div>
      
              <label>Tipo de Proveedor:</label>
              <select 
                className="form-control" 
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Seleccione el tipo</option>
                <option value="natural">Natural</option>
                <option value="empresa">Empresa</option>
              </select>

                {type === 'natural' && (
                <div>
                    <div className='mb-3'>
                        <label htmlFor='natural_full_name' className='form-label'>
                            Nombre completo
                        </label>
                        <input type="text" className="form-control" placeholder="Nombre completo" value={natural_full_name} onChange={(e) => setFullName(e.target.value)} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='natural_document' className='form-label'>
                            Documento
                        </label>
                        <input type="text" className="form-control" placeholder="Documento" value={natural_document} onChange={(e) => setDocument(e.target.value)} />
                        </div>
                </div>
                    )}

                {type === 'empresa' && (
                <div>
                    <div className='mb-3'>
                        <label htmlFor='rut' className='form-label'>
                            Rut
                        </label>
                        <input type="text" className="form-control" placeholder="Rut" value={empresa_rut} onChange={(e) => setRut(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='empresa_legal_representative_name' className='form-label'>
                            Representante legal
                        </label>
                    <input type="text" className="form-control" placeholder="Representante Legal" value={empresa_legal_representative_name} onChange={(e) => setLegalRepresentativeName(e.target.value)} />
                    </div>
                    </div>
                    )}

                
                <div className="form-group">
                    <label>Dirección</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                 
                <div className="form-group">
                <label>Teléfono</label>
                <input
                    type="Number"
                    className="form-control" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>

                
                <div className="form-check">
                <input 
                    type="checkbox" 
                    checked={statuspro}
                    onChange={(e) => setStatusPro(e.target.checked)} 
                />
                <label className="form-check-label">
                    Activo
                </label>
                </div>                    
                 

                    <div className='mb-3'>
                        <label>Método de pago:</label>
                        <select className="form-control" value={payment_methods} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value=''>Seleccione método de pago</option>
                            <option value='Efectivo'>Efectivo</option>
                            <option value='Transferencia'>Transferencia</option>
                        </select>
                    </div>

                    
                    <div className='mb-3'>
                        <label htmlFor='subtotal' className='form-label'>
                           Subtotal
                        </label>
                        <input type="number" className="form-control" placeholder="Subtotal" value={quantity * parseFloat(inputs_unit_price)} readOnly />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='price_total' className='form-label'>
                            Precio total:
                            <input type="number" className="form-control" placeholder="Precio total"  value={price_total} readOnly/>
                        </label>
                    </div>
                    

                    <button onClick={agregarCompra} className='btn btn-success'>
                        Guardar Compra
                    </button>

                </div>
            </div>
        </div>
)
                
};


export default AgregarCompra;
