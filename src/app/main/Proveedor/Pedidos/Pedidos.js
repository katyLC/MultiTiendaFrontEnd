import React, { useState } from "react";
import { FusePageCarded } from "@fuse";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PedidossHeader from "./PedidosHeader";
import PedidosTable from "./PedidosTable";

function Empresa() {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const changeHeaderTitle = () => {
    switch (tabValue) {
      case 0:
        return "Lista de Productos";
    }
  };

  return (
    <FusePageCarded
      classes={{
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={<PedidossHeader title={changeHeaderTitle()} />}
      contentToolbar={
        <div className="px-24">
          <h4>Lista de empresa</h4>
        </div>
      }
      content={
        <div>
          <PedidosTable />
        </div>
      }
      innerScroll
    />
  );
}

export default Empresa;
