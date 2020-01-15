import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse";
import { ExampleConfig } from "app/main/example/ExampleConfig";
import { AdministradorConfig } from "app/main/AdministradorConfig";
import { LoginConfig } from "app/main/Login/LoginConfig";
const routeConfigs = [ExampleConfig, AdministradorConfig, LoginConfig];
const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs)
  // {
  //   path: "/",
  //   exact: true,
  //   component: () => <Redirect to="/Login" />
  // }
];
export default routes;
