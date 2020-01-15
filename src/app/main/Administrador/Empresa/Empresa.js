import React, { useState } from "react";
import { FusePageCarded } from "@fuse";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EmpresaHeader from "./EmpresaHeader";
import NuevaEmpresaForm from "./NuevaEmpresa/NuevaEmpresaForm";

function Empresa() {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const changeHeaderTitle = () => {
    switch (tabValue) {
      case 0:
        return "EMPRESA";
    }
  };

  return (
    <FusePageCarded
      classes={{
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={<EmpresaHeader title={changeHeaderTitle()} />}
      contentToolbar={
        <div className="px-24">
          <h4>Nueva Empresa</h4>
        </div>
      }
      content={
        <div>
          <NuevaEmpresaForm />
        </div>
      }
      innerScroll
    />
  );
}

export default Empresa;
