import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import { Document, Page, pdfjs } from 'react-pdf';
import * as XLSX from 'xlsx';
//import * as XLSX from 'xlsx-style';

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
  padding: 1rem;
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
  //const [numPages, setNumPages] = useState(null);
  //const [pageNumber, setPageNumber] = useState(1);

  // Función para eliminar usuario
  function borrarUsuario(iduser) {
    axios
      .post('/api/usuario/borrarusuario', { iduser })
      .then((res) => {
        console.log(res.data[0]);
        alert(res.data);
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function descargarArchivos() {
    // Generar PDF
    const pdfBlob = generatePDF();
    saveAs(pdfBlob, 'usuario.pdf');

    // Generar XLS
    //const xlsBlob = generateXLS();
    //saveAs(xlsBlob, 'usuario.xls');
  }
  /*function descargarXls(){
    const xlsBlob = generateXLS();
    saveAs(xlsBlob, 'usuario.xls');
  }*/

  function generatePDF() {
    const element = document.getElementById('pdf-container');
    const pdfBlob = pdfjs.GlobalWorkerOptions.workerSrc
      ? element.toBlob()
      : new Blob([element.outerHTML], { type: 'application/pdf' });
    return pdfBlob;
  }

  /*function generateXLS() {
    const data = [['ID', 'Rol', 'Estado del Rol', 'Permiso', 'Nombre de Usuario', 'Email', 'Contraseña', 'Estado del Usuario', 'Fecha de Registro']];
    const row = [
      usuario.iduser,
      usuario.name_rol,
      usuario.state_rol,
      usuario.name_permission,
      usuario.name_user,
      usuario.email,
      usuario.passaword,
      usuario.state_user,
      usuario.date_register,
    ];
    data.push(row);
  
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Usuario');
  
    const xlsBlob = XLSX.write(wb, { bookType: 'xls', type: 'blob', mimeType: 'application/octet-stream' });
    return xlsBlob;
  }*/
  

  return (
    <Container>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <StyledCard>
            <CardHeader>
              <h2>Detalles del Usuario</h2>
            </CardHeader>
            <CardBody id='pdf-container'>
              <Table className="table table-bordered">
                <tbody>
                  <TableRow>
                    <TableHeader>ID</TableHeader>
                    <TableCell>{usuario.iduser}</TableCell>
                  </TableRow>
                  <TableRow className="bg-danger">
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
                </tbody>
              </Table>
            </CardBody>
            <CardFooter>
              <Link to={`/editarusuario/${usuario.iduser}`} className="btn btn-success">
                Editar
              </Link>
              <Button
                className="btn btn-danger d-none"
                onClick={() => {
                  borrarUsuario(usuario.iduser);
                }}
              >
                Eliminar
              </Button>
              <Button className="btn btn-secondary" onClick={descargarArchivos}>
                Descargar PDF y Excel
              </Button>
              {/*<Button className="btn btn-secondary" onClick={descargarXls}>
                Descargar Excel
              </Button>*/}
            </CardFooter>
          </StyledCard>
        </div>
      </div>
    </Container>
  );
}

/*const TableRow = ({ label, value }) => (
    <tr>
        <th>{label}</th>
        <td>{value}</td>
    </tr>
);*/

export default UsuarioIndividual;