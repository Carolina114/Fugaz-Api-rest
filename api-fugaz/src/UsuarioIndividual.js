import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Container = styled.div`
  margin-top: 5rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Button = styled.button`
  &.btn-success {
    background-color: #28a745;
    color: #fff;
  }

  &.btn-danger {
    background-color: #dc3545;
    color: #fff;
  }

  &.d-none {
    display: none;
  }
`;

function UsuarioIndividual({ usuario }) {
  const navigate = useNavigate();

  function borrarUsuario(iduser) {
    axios
      .post('/api/usuario/borrarusuario', { iduser })
      .then((res) => {
        console.log(res.data[0]);
        toast.success(res.data);
        navigate(0);
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  function descargarArchivos() {
    const pdf = new jsPDF();
    pdf.text(20, 20, 'Detalles del Usuario');

    document.querySelectorAll('#pdf-container tbody tr').forEach((row, index) => {
      const columns = row.querySelectorAll('td');
      const rowData = [];
      columns.forEach((column) => {
        rowData.push(column.innerText);
      });
      pdf.text(5, 15 + index * 5, rowData.join(', '));
    });

    pdf.save('usuario.pdf');
  }

  function descargarXls() {
    const ws = XLSX.utils.table_to_sheet(document.querySelector('#pdf-container table'));
    const wb = XLSX.utils.book_new(
      XLSX.utils.aoa_to_sheet([
        ['Detalles del Usuario'],
        ['ID', 'Rol', 'Estado del Rol', 'Permiso', 'Nombre de Usuario', 'Email', 'Contraseña', 'Estado del Usuario', 'Fecha de Registro'],
        [usuario.iduser, usuario.name_rol, usuario.state_rol, usuario.name_permission, usuario.name_user, usuario.email, usuario.passaword, usuario.state_user, usuario.date_register],
      ])
    );
    XLSX.utils.book_append_sheet(wb, ws, 'usuarios');
    XLSX.writeFile(wb, 'usuarios.xlsx');
  }

  return (
    <Container>
      <div>
              <div className="tb">
              <table className='table table-bordered' style={{ marginBottom: '-40px' }}>
                <tbody>
                  <tr>
                    <td>{usuario.iduser}</td>
                    <td>{usuario.name_rol}</td>
                    <td>{usuario.state_rol}</td>
                    <td>{usuario.name_permission}</td>
                    <td>{usuario.name_user}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.passaword}</td>
                    <td>{usuario.state_user}</td>
                    <td>{usuario.date_register}</td>
                    <td>
                      <Link to={`/editarusuario/${usuario.iduser}`} className="btn btn-success">Editar</Link>
                      </td>
                      <td>
                      <Button className="btn btn-outline-danger" onClick={descargarArchivos}>Descargar PDF</Button>
                      </td>
                      <td>
                      <Button className="btn btn-outline-success" onClick={descargarXls}>Descargar Excel</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

            <CardFooter>

              

              <Button
                className="btn btn-danger d-none"
                onClick={() => {
                  borrarUsuario(usuario.iduser);
                }}
              >
                Eliminar
              </Button>
              <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </CardFooter>
        </div>
    </Container>
  );
}

export default UsuarioIndividual;
