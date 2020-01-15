import Empresa from "./Administrador/Empresa/Empresa";
import Categoria from "./Administrador/Categorias/Categoria";
import Sede from "./Administrador/Sede/Sede";
import ListaEmpresa from "./Administrador/ListaEmpresa/ListaEmpresa";
import Producto from "./Proveedor/Producto/Producto";
import Productos from "./Proveedor/Productos/Productos";
import ListaSedes from "./Proveedor/ListaSedes/ListaSedeTabla/ListaSedeHead";
import Pedidos from "./Proveedor/Pedidos/Pedidos";
import { authRoles } from "app/auth";

export const AdministradorConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  auth: authRoles.admin,
  routes: [
    {
      path: "/Empresa",
      component: Empresa
    },
    {
      path: "/Categorias",
      component: Categoria
    },
    {
      path: "/Sede",
      component: Sede
    },
    {
      path: "/ListaEmpresa",
      component: ListaEmpresa
    },
    {
      path: "/Producto",
      component: Producto
    },
    {
      path: "/Productos",
      component: Productos
    },
    {
      path: "/ListaSedes",
      component: ListaSedes
    },
    {
      path: "/Pedidos",
      component: Pedidos
    }
  ]
};
/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }import { ProveedorConfig } from 'app/main/Proveedores/ProveedorConfig';

    ]
};
*/
