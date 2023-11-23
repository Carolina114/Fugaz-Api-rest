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

const StyledCard = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 1px;
  text-align: center;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
`;

const TableCell = styled.td`
  padding: 0.5rem;
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
    <Container className='pdf-container'>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <StyledCard>
              <div className='cn'>
                <CardHeader>
                  <h2>Detalles del Usuario</h2>
                </CardHeader>
                <CardBody>
                  <Table className="table table-bordered">
                    <tbody>
                      <TableRow>
                        <TableHeader>ID</TableHeader>
                        <TableCell>{usuario.iduser}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Rol</TableHeader>
                        <TableCell>{usuario.name_rol}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Estado del Rol</TableHeader>
                        <TableCell>{usuario.state_rol}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Permiso</TableHeader>
                        <TableCell>{usuario.name_permission}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Nombre de Usuario</TableHeader>
                        <TableCell>{usuario.name_user}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Email</TableHeader>
                        <TableCell>{usuario.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Contraseña</TableHeader>
                        <TableCell>{usuario.passaword}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Estado del Usuario</TableHeader>
                        <TableCell>{usuario.state_user}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Fecha de Registro</TableHeader>
                        <TableCell>{usuario.date_register}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeader>Acciones</TableHeader>
                        <TableCell>
                          <Link to={`/editarusuario/${usuario.iduser}`} className="btn btn-success">
                            Editar
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Button className="btn btn-outline-danger" onClick={descargarArchivos}>Descargar PDF</Button>
                        </TableCell>
                        <TableCell>
                          <Button className="btn btn-outline-success" onClick={descargarXls}>Descargar Excel</Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            className="btn btn-danger d-none"
                            onClick={() => {
                              borrarUsuario(usuario.iduser);
                            }}
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                      </TableRow>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </CardFooter>
                </div>
              </StyledCard>
            </div>
          </div>
        </Container>
  );
}

export default UsuarioIndividual;
