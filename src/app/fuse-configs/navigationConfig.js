import { authRoles } from "app/auth";

const navigationConfig = [
  {
    id: "applications",
    title: "Empresa",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Nueva Empresa",
        type: "item",
        auth: authRoles.admin,
        icon: "whatshot",
        url: "/Empresa"
      },
      {
        id: "example-component",
        title: "Nueva Categoria",
        auth: authRoles.staff,
        type: "item",
        icon: "whatshot",
        url: "/Categorias"
      },
      {
        id: "example-component",
        title: "Lista de Empresa",
        type: "item",
        icon: "whatshot",
        url: "/ListaEmpresa"
      },
      {
        id: "example-component",
        title: "Lista de Categorias",
        type: "item",
        icon: "whatshot",
        url: "/ListaCategoria"
      }
    ]
  },

  {
    id: "applications",
    title: "Sede",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Sede",
        type: "item",
        icon: "whatshot",
        url: "/Sede"
      },
      {
        id: "example-component",
        title: "Lista de Sedes",
        type: "item",
        icon: "whatshot",
        url: "/ListaSede"
      }
    ]
  },

  {
    id: "applications",
    title: "Usuarios",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Lista de Usuarios",
        type: "item",
        icon: "whatshot",
        url: "/ListaUsuarios"
      }
    ]
  },
  {
    id: "applications",
    title: "Productos",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Nuevo Producto",
        type: "item",
        icon: "whatshot",
        url: "/Producto"
      },
      {
        id: "example-component",
        title: "Lista Producto",
        type: "item",
        icon: "whatshot",
        url: "/Productos"
      }
    ]
  },
  {
    id: "applications",
    title: "Pedidos",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Lista de Ordenes",
        type: "item",
        icon: "whatshot",
        url: "/Pedidos"
      }
    ]
  }
];

export default navigationConfig;
