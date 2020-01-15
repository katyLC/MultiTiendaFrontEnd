import React from "react";
import { Icon, Typography } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import { useSelector } from "react-redux";

function EmpresaHeader(props) {
  const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="text-18" color="action">
            home
          </Icon>
          <Icon className="text-16" color="action">
            chevron_right
          </Icon>
          <Typography color="textSecondary">TIENDA</Typography>
          <Icon className="text-16" color="action">
            chevron_right
          </Icon>
          <Typography color="textSecondary">{props.title}</Typography>
        </div>
        <FuseAnimate>
          <Typography variant="h6">{props.title}</Typography>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default EmpresaHeader;
