import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function VentaIndividual({venta}) {
    const navegar = useNavigate();

    // Función para eliminar usuario
    function borrarVenta(idsale) {
        axios
            .post('/api/venta/borrarventa', { idsale: idsale })
            .then((res) => {
                console.log(res.data[0]);
                alert(res.data);
                navegar(0);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2>Detalles de la Venta</h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <tbody>
                                    <TableRow label="ID" value={venta.idsale} />
                                    <TableRow label="Rol" value={venta.shipping_cost} />
                                    <TableRow label="Estado del Rol" value={venta.total_sale} />
                                    <TableRow label="Permiso" value={venta.document} />
                                    <TableRow label="Email" value={venta.address} />
                                    <TableRow label="Contraseña" value={venta.city} />
                                    <TableRow label="Estado del Usuario" value={venta.phone} />
                                    <TableRow label="Fecha de Registro" value={venta.order_status} />
                                    <TableRow label="" value={venta.Method_payment} />
                                    <TableRow label="" value={venta.date_order} />
                                    <TableRow label="" value={venta.deliver_date} />
                                    <TableRow label="" value={venta.order_cost} />
                                    <TableRow label="" value={venta.amount} />
                                    <TableRow label="" value={venta.unit_price} />
                                    <TableRow label="" value={venta.subtotal} />
                                    <TableRow label="" value={venta.name} />
                                    <TableRow label="" value={venta.size} />
                                    <TableRow label="" value={venta.color} />
                                    <TableRow label="" value={venta.photo} />
                                    <TableRow label="" value={venta.sale_price} />
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link to={`/editarventa/${venta.idsale}`} className="btn btn-success">
                                Editar
                            </Link>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    borrarVenta(venta.idsale);
                                }}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const TableRow = ({ label, value }) => (
    <tr>
        <th>{label}</th>
        <td>{value}</td>
    </tr>
);

export default VentaIndividual;