import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

const rows = [
  {
    id: "nombre",
    align: "left",
    disablePadding: false,
    label: "Nombre Producto"
  },
  {
    id: "ruc",
    align: "left",
    disablePadding: false,
    label: "Precio Unitario"
  },
  {
    id: "telefono",
    align: "left",
    disablePadding: false,
    label: "Unidad de Medida"
  },
  {
    id: "direccion",
    align: "left",
    disablePadding: false,
    label: "Categoria"
  },
  {
    id: "acciones",
    align: "center",
    disablePadding: false,
    label: "Acciones"
  }
];

const ProductosHead = () => {
  return (
    <TableHead>
      <TableRow className="h-64">
        {rows.map(row => {
          return (
            <TableCell
              className="text-16 text-white bg-black"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? "none" : "default"}
            >
              {row.label}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
};

export default ProductosHead;
