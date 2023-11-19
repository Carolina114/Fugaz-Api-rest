import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function UsuarioIndividual({ usuario }) {
    const navegar = useNavigate();

    // Función para eliminar usuario
    function borrarUsuario(iduser) {
        axios
            .post('/api/usuario/borrarusuario', { iduser: iduser })
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
                            <h2>Detalles del Usuario</h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <tbody>
                                    <TableRow label="ID" value={usuario.iduser} />
                                    <TableRow className="bg-danger" label="Rol" value={usuario.name_rol} />
                                    <TableRow label="Estado del Rol" value={usuario.state_rol} />
                                    <TableRow label="Permiso" value={usuario.name_permission} />
                                    <TableRow label="Email" value={usuario.email} />
                                    <TableRow label="Contraseña" value={usuario.passaword} />
                                    <TableRow label="Estado del Usuario" value={usuario.state_user} />
                                    <TableRow label="Fecha de Registro" value={usuario.date_register} />
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link to={`/editarusuario/${usuario.iduser}`} className="btn btn-success">
                                Editar
                            </Link>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    borrarUsuario(usuario.iduser);
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

export default UsuarioIndividual;