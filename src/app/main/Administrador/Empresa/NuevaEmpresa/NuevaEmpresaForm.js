import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import axios from "axios";
import Api from "app/Api";

const Categorias = {
  idCategoriaEmpresa: 0,
  descripcionCategoriaEmpresa: ""
};

const Empresa = {
  direccionEmpresa: "",
  emailEmpresa: "",
  nombreEmpresa: "",
  rucEmpresa: "",
  telefonoEmpresa: "",
  idCategoriaEmpresa: 2
};

function NuevaEmpresaForm() {
  const [categorias, setCategorias] = useState([Categorias]);
  const [empresa, setEmpresas] = useState(Empresa);

  useEffect(() => {
    obtenerCategoria();
  }, []);

  const obtenerCategoria = () => {
    Api.get("/categoriaempresas")
      .then(response => setCategorias(response.data))
      .catch(err => {
        console.log(err);
      });
  };

  const guardarEmppresa = () => {
    Api.post("/empresas", empresa)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleChange = name => event => {
    setEmpresas({ ...empresa, [name]: event.target.value });
  };

  const handleSubmit = () => {
    guardarEmppresa();
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
                  label="Nombre de empresa"
                  id="nombre"
                  name="nombre"
                  variant="outlined"
                  value={empresa.nombreEmpresa}
                  onChange={handleChange("nombreEmpresa")}
                  fullWidth={true}
                ></TextField>

                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="RUC de la empresa"
                  id="ruc"
                  name="ruc"
                  value={empresa.rucEmpresa}
                  onChange={handleChange("rucEmpresa")}
                  variant="outlined"
                  fullWidth={true}
                ></TextField>
                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Telefono"
                  id="telefono"
                  name="telelfono"
                  variant="outlined"
                  value={empresa.telefonoEmpresa}
                  onChange={handleChange("telefonoEmpresa")}
                  fullWidth={true}
                ></TextField>
                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Correo Electronico"
                  id="correo"
                  name="correo"
                  variant="outlined"
                  value={empresa.emailEmpresa}
                  onChange={handleChange("emailEmpresa")}
                  fullWidth={true}
                ></TextField>
                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Direccion"
                  id="direccion"
                  name="direccion"
                  variant="outlined"
                  value={empresa.direccionEmpresa}
                  onChange={handleChange("direccionEmpresa")}
                  fullWidth={true}
                ></TextField>
                <TextField
                  className="mr-8 mt-8 mb-8 ml-8"
                  label="Categoria"
                  id="categoria"
                  name="categoria"
                  variant="outlined"
                  fullWidth={true}
                  value={empresa.idCategoriaEmpresa}
                  onChange={handleChange("idCategoriaEmpresa")}
                  select
                >
                  {categorias.map(categoria => (
                    <MenuItem
                      key={categoria.idCategoriaEmpresa}
                      value={categoria.idCategoriaEmpresa}
                    >
                      {categoria.descripcionCategoriaEmpresa}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-8 mt-8 mb-8 ml-8"
                  onClick={handleSubmit}
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
