import React, { useEffect, useState } from "react";
import {
  Button,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Icon,
  Typography
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import { FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils } from "@fuse";
import { useForm } from "@fuse/hooks";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";
import clsx from "clsx";
import _ from "@lodash";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },

  productImageFeaturedStar: {
    position: "absolute",
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0
  },
  productImageUpload: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut
  },
  productImageItem: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    "&:hover": {
      "& $productImageFeaturedStar": {
        opacity: 0.8
      }
    },
    "&.featured": {
      pointerEvents: "none",
      boxShadow: theme.shadows[3],
      "& $productImageFeaturedStar": {
        opacity: 1
      },
      "&:hover $productImageFeaturedStar": {
        opacity: 1
      }
    }
  }
}));

function Producto(props) {
  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);
  //const { form, handleChange, setForm } = useForm(null);

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  // function handleChipChange(value, name) {
  //   setForm(
  //     _.set(
  //       { ...form },
  //       name,
  //       value.map(item => item.value)
  //     )
  //   );
  // }

  // function setFeaturedImage(id) {
  //   setForm(_.set({ ...form }, "featuredImageId", id));
  // }

  // function handleUploadChange(e) {
  //   const file = e.target.files[0];
  //   if (!file) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);

  //   reader.onload = () => {
  //     setForm(
  //       _.set({ ...form }, `images`, [
  //         {
  //           id: FuseUtils.generateGUID(),
  //           url: `data:${file.type};base64,${btoa(reader.result)}`,
  //           type: "image"
  //         },
  //         ...form.images
  //       ])
  //     );
  //   };

  //   reader.onerror = function() {
  //     console.log("error on load image");
  //   };
  // }

  return (
    <FusePageCarded
      classes={{
        toolbar: "p-0",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={
        <div className="flex flex-1 w-full items-center justify-between">
          <div className="flex flex-col items-start max-w-full">
            <FuseAnimate animation="transition.slideRightIn" delay={300}>
              <Typography
                className="normal-case flex items-center sm:mb-12"
                component={Link}
                role="button"
                to="/apps/e-commerce/products"
                color="inherit"
              >
                <Icon className="mr-4 text-20">arrow_back</Icon>
                Products
              </Typography>
            </FuseAnimate>

            <div className="flex items-center max-w-full">
              <div className="flex flex-col min-w-0">
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                  <Typography className="text-16 sm:text-20 truncate">
                    {"Nuevo Producto"}
                  </Typography>
                </FuseAnimate>
              </div>
            </div>
          </div>
          <FuseAnimate animation="transition.slideRightIn" delay={300}>
            <Button
              className="whitespace-no-wrap"
              variant="contained"
              //disabled={!canBeSubmitted()}
              // onClick={() => dispatch(Actions.saveProduct(form))}
            >
              Guardar Datos
            </Button>
          </FuseAnimate>
        </div>
      }
      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{ root: "w-full h-64" }}
        >
          <Tab className="h-64 normal-case" label="Informacion basica" />
          <Tab className="h-64 normal-case" label="Imagen del Producto" />
          <Tab className="h-64 normal-case" label="Precio" />
          <Tab className="h-64 normal-case" label="Empaq" />
        </Tabs>
      }
      content={
        <div className="p-16 sm:p-24 max-w-2xl">
          {tabValue === 0 && (
            <div>
              <TextField
                className="mt-8 mb-16"
                //error={form.name === ''}
                required
                label="Codigo del Producto"
                autoFocus
                id="codigo"
                name="codigo"
                // value={form.name}
                // onChange={handleChange}
                variant="outlined"
                fullWidth
              />
              <TextField
                className="mt-8 mb-16"
                //error={form.name === ''}
                required
                label="Nombre del Producto"
                autoFocus
                id="producto"
                name="producto"
                // value={form.name}
                // onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              <TextField
                className="mt-8 mb-16"
                id="description"
                name="description"
                // onChange={handleChange}
                label="Descripcion"
                type="text"
                // value={form.description}
                multiline
                rows={5}
                variant="outlined"
                fullWidth
              />

              <FuseChipSelect
                className="mt-8 mb-24"
                // onChange={value => handleChipChange(value, "categories")}
                placeholder="Seleccione categoria"
                textFieldProps={{
                  label: "Categoria",
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "outlined"
                }}
                isMulti
              />

              <div className="flex">
                <TextField
                  select
                  className="mt-8 mb-16 mr-8"
                  label="Tipo de empaque"
                  autoFocus
                  id="width"
                  name="width"
                  //  value={form.width}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  className="mt-8 mb-16 mr-8"
                  label="Cantidad "
                  id="height"
                  name="height"
                  //  value={form.height}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="flex">
                <TextField
                  select
                  className="mt-8 mb-16 mr-8"
                  label="Unidad de medida"
                  id="height"
                  name="height"
                  //  value={form.height}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="mt-8 mb-16 mr-8"
                  label="valor"
                  id="height"
                  name="height"
                  //  value={form.height}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
          )}
          {tabValue === 1 && (
            <div>
              <input
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
                // onChange={handleUploadChange}
              />
              <div className="flex justify-center sm:justify-start flex-wrap">
                <label
                  htmlFor="button-file"
                  className={clsx(
                    classes.productImageUpload,
                    "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                  )}
                >
                  <Icon fontSize="large" color="action">
                    cloud_upload
                  </Icon>
                </label>
              </div>
            </div>
          )}
          {tabValue === 2 && (
            <div>
              <TextField
                className="mt-8 mb-16"
                label="Precio Unitario"
                id="priceTaxExcl"
                name="priceTaxExcl"
                // value={form.priceTaxExcl}
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
                type="number"
                variant="outlined"
                autoFocus
                fullWidth
              />

              <TextField
                className="mt-8 mb-16"
                label="Precio con descuento"
                id="precioDescuento"
                name="precioDescuento"
                // value={form.priceTaxIncl}
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">S./</InputAdornment>
                  )
                }}
                type="number"
                variant="outlined"
                fullWidth
              />
            </div>
          )}
          {tabValue === 3 && (
            <div>
              <TextField
                className="mt-8 mb-16"
                label="Precio Unitario"
                id="priceTaxExcl"
                name="priceTaxExcl"
                // value={form.priceTaxExcl}
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
                type="number"
                variant="outlined"
                autoFocus
                fullWidth
              />

              <TextField
                className="mt-8 mb-16"
                label="Precio con descuento"
                id="precioDescuento"
                name="precioDescuento"
                // value={form.priceTaxIncl}
                // onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">S./</InputAdornment>
                  )
                }}
                type="number"
                variant="outlined"
                fullWidth
              />
            </div>
          )}
        </div>
      }
      innerScroll
    />
  );
}

export default Producto;
