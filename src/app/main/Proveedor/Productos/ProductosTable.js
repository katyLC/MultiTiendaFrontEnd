import React, { useEffect, useState } from "react";
import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Button
} from "@material-ui/core";
import { FuseScrollbars } from "@fuse";
import { withRouter } from "react-router-dom";
import ProductosHead from "./ProductosHead";
import StockDialog from "../Productos/Stock/StockDialog";

const Chofer = {
  Nombres_Apellidos: "",
  tipo_documento: "",
  nro_documento: "",
  telefono: "",
  remitente: "",
  dependencia: ""
};

const Data = [
  {
    fecha: "12/12/2012",
    tipo_documento: "Oficio",
    nro_documento: "123123123",
    procedimiento_tupa: "Ley de Transparencia",
    remitente: "Aracely",
    dependencia: "Oficina 200"
  }
];

function ProductosTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isOpenNuevoUsuario, setIsOpenUsuario] = useState(false);
  const [archivos, setArchivos] = useState([Chofer]);

  useEffect(() => {
    setArchivos(Data);
  }, []);

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }
  const handleClickOpenNuevoUsuario = () => {
    setIsOpenUsuario(!isOpenNuevoUsuario);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="pb-12 flex flex-col">
        <div className="flex flex-1 justify-around"></div>

        <div className="flex justify-around">
          <TextField
            className="mr-8 mt-16 ml-8 mb-8"
            label="Tipo de Documento"
            id="documento"
            name="documento"
            variant="outlined"
            fullWidth={true}
          ></TextField>
          <Button
            className="mr-8 mt-8 mb-8 ml-8 w-256"
            color="secondary"
            variant="contained"
          >
            <span className="hidden sm:flex">Buscar</span>
            <span className="flex sm:hidden">Buscar</span>
          </Button>
        </div>
      </div>
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <ProductosHead
          // numSelected={selected.length}
          // order={order}
          // onSelectAllClick={handleSelectAllClick}
          // onRequestSort={handleRequestSort}
          // rowCount={data.length}
          />

          <TableBody>
            {archivos.map(archivo => {
              return (
                <TableRow
                  className="h-64 cursor-pointer"
                  hover
                  key={archivo.nro_documento}
                >
                  <TableCell scope="row" align="left">
                    {archivo.fecha}
                  </TableCell>

                  <TableCell className="border-l-2" scope="row" align="left">
                    {archivo.tipo_documento}
                  </TableCell>

                  <TableCell scope="row" align="left" className="border-l-2">
                    {archivo.nro_documento}
                  </TableCell>
                  <TableCell scope="row" align="left" className="border-l-2">
                    {archivo.nro_documento}
                  </TableCell>

                  <TableCell scope="row" align="center" className="border-l-2">
                    <Icon
                      className="text-green text-24 mr-6 hover:font-extrabold"
                      onClick={handleClickOpenNuevoUsuario}
                    >
                      local_grocery_store
                    </Icon>
                    <Icon className="text-red text-24 hover:font-extrabold">
                      visibility
                    </Icon>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {isOpenNuevoUsuario === true && (
          <StockDialog
            isOpenNuevoUsuario={isOpenNuevoUsuario}
            handleClickOpenNuevoUsuario={handleClickOpenNuevoUsuario}
          />
        )}
      </FuseScrollbars>

      {/*<TablePagination*/}
      {/*  component="div"*/}
      {/*  count={data.length}*/}
      {/*  rowsPerPage={rowsPerPage}*/}
      {/*  page={page}*/}
      {/*  backIconButtonProps={{*/}
      {/*    'aria-label': 'Previous Page'*/}
      {/*  }}*/}
      {/*  nextIconButtonProps={{*/}
      {/*    'aria-label': 'Next Page'*/}
      {/*  }}*/}
      {/*  onChangePage={handleChangePage}*/}
      {/*  onChangeRowsPerPage={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </div>
  );
}

export default withRouter(ProductosTable);
