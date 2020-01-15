import React, { useState } from "react";
import { FusePageCarded } from "@fuse";
import SedeHeader from "./SedeHeader";
import NuevaSedeForm from "./NuevaSedeForm";

function Sede() {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const changeHeaderTitle = () => {
    switch (tabValue) {
      case 0:
        return "SEDE";
    }
  };

  return (
    <FusePageCarded
      classes={{
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={<SedeHeader title={changeHeaderTitle()} />}
      contentToolbar={
        <div className="px-24">
          <h4>Nueva Sede</h4>
        </div>
      }
      content={
        <div>
          <NuevaSedeForm />
        </div>
      }
      innerScroll
    />
  );
}

export default Sede;
