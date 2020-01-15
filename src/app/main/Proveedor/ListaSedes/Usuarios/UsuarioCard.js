import React, { useEffect, useState } from "react";
import {
  AppBar,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import { FuseChipSelect } from "@fuse";
import Button from "@material-ui/core/Button";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import es from "date-fns/locale/es";
import Axios from "axios";

const Usuarios = {
  emailUsuario: "",
  password: "",
  permiso: {
    idPermiso: 2
  }
};

const Proveedor = {
  apellidosProveedor: "perez",
  nombreProveedor: "pepe",
  rucProveedor: "33234234",
  empresa: {
    idEmpresa: 2
  },
  usuario: {
    idUsuario: 0
  }
};

function NuevoUsuarioCard(props) {
  const [usuario, setUsuario] = useState(Usuarios);
  const [idUsuario, setIdUsuario] = useState(0);
  const [proveedor, setProveedor] = useState(Proveedor);

  const guardarUsuario = () => {
    Axios.post("http://192.168.0.5:8080/api/usuarios", usuario)
      .then(res => {
        if (res.status === 200) {
          setIdUsuario(res.data.idUsuario);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const guardarProveedor = () => {
    Axios.post("http://192.168.0.5:8080/api/proveedores", usuario)
      .then(res => {
        if (res.status === 200) {
          setIdUsuario(res.data.idUsuario);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = name => event => {
    setUsuario({ ...usuario, [name]: event.target.value });
  };
  const handleSubmit = () => {
    guardarUsuario();
  };

  return (
    <>
      <DialogTitle component="div" className="p-0">
        <AppBar position="static" elevation={1}>
          <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
            <div className="flex flex-1">
              <Typography variant="h6">Nuevo Usuario</Typography>
            </div>
            <IconButton
              color="inherit"
              onClick={() => props.handleClickOpenNuevoUsuario()}
            >
              <Icon>close</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>

      <DialogContent className="p-16 sm:p-24">
        <div className="pb-12 flex flex-col">
          <div className="flex justify-around">
            <TextField
              className="mr-8 mt-8 mb-8 ml-8"
              label="Nombres"
              id="nombres"
              name="nombres"
              variant="outlined"
              value={usuario.emailUsuario}
              onChange={handleChange("emailUsuario")}
              fullWidth={true}
            ></TextField>
          </div>
          <div className="flex justify-around">
            <TextField
              className="mr-8 mt-8 mb-8 ml-8"
              label="Apellidos"
              id="apellidos"
              name="apellidos"
              variant="outlined"
              value={usuario.emailUsuario}
              onChange={handleChange("emailUsuario")}
              fullWidth={true}
            ></TextField>
          </div>
          <div className="flex justify-around">
            <TextField
              className="mr-8 mt-8 mb-8 ml-8"
              label="RUC"
              id="ruc"
              name="ruc"
              variant="outlined"
              value={usuario.emailUsuario}
              onChange={handleChange("emailUsuario")}
              fullWidth={true}
            ></TextField>
          </div>
          <div className="flex justify-around">
            <TextField
              className="mr-8 mt-8 mb-8 ml-8"
              label="correo"
              id="correo"
              name="correo"
              variant="outlined"
              value={usuario.emailUsuario}
              onChange={handleChange("emailUsuario")}
              fullWidth={true}
            ></TextField>
          </div>
          <div className="flex justify-around">
            <TextField
              className="mr-8 mt-8 mb-8 ml-8"
              label="password"
              id="password"
              name="password"
              variant="outlined"
              value={usuario.password}
              onChange={handleChange("password")}
              fullWidth={true}
            ></TextField>
          </div>
        </div>

        <div className="flex flex-col items-end flex-1">
          <Button
            className="mt-16 px-32"
            aria-label="save"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            type="submit"
            size="medium"
          >
            Guardar
          </Button>
        </div>
      </DialogContent>
    </>
  );
}
export default NuevoUsuarioCard;
