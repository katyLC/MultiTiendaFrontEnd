import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import NuevoUsuarioCard from "./UsuarioCard";

const useStyles = makeStyles(theme => ({
  paper: {
    color: theme.palette.text.primary
  }
}));

function NuevoUsuarioDialog(props) {
  const classes = useStyles(props);
  return (
    <Dialog
      classes={{
        paper: clsx(classes.paper, "max-w-lg w-full m-24")
      }}
      onClose={() => props.handleClickOpenNuevoUsuario()}
      open={props.isOpenNuevoUsuario}
    >
      <NuevoUsuarioCard
        handleClickOpenNuevoUsuario={props.handleClickOpenNuevoUsuario}
      />
    </Dialog>
  );
}

export default NuevoUsuarioDialog;
