import { Button, TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const Documento = {
  id_tipo_documento: 0,
  nombre: ""
};
const DataBusqueda = {
  personal: "",
  remitente: "",
  procedimiento: ""
};

function NuevaEmpresaForm() {
  const [fechaInicio, setFechaInicio] = useState(new Date(Date.now()));
  const [fechaFin, setFechaFin] = useState(new Date(Date.now()));

  const [documentos, setDocumentos] = useState([Documento]);

  const handleDateChange = name => date => {
    name === "fechaInicio" ? setFechaInicio(date) : setFechaFin(date);
  };
  return (
    <Card className="ml-16 w-full mt-16 mb-8">
      {/* <AppBar position="static" elevation={0}>
        <Toolbar className="pl-16 pr-8">
          <Typography variant="subtitle1" color="inherit" className="flex-1">
            DATOS DEL VEHICULO
          </Typography>
        </Toolbar>
      </AppBar> */}
      <CardContent>
        <div className="  w-full">
          <div>
            <div className="p-16 sm:p-24 max-w-2xl">
              <div>
                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Nombre de Sede"
                  id="nombre"
                  name="nombre"
                  variant="outlined"
                  fullWidth={true}
                ></TextField>

                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Direccion de Sede"
                  id="ruc"
                  name="ruc"
                  variant="outlined"
                  fullWidth={true}
                ></TextField>

                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Empresa"
                  id="empresa"
                  name="empresa"
                  variant="outlined"
                  fullWidth={true}
                  select
                ></TextField>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-8 mt-8 mb-8 ml-8"
                >
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default NuevaEmpresaForm;
