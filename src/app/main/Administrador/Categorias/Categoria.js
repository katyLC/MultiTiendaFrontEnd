import React from 'react';
import {FusePageCarded} from '@fuse'
import {FuseAnimate} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import { TextField, Button, Typography, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 1000,
      },
    },
  }));

function CardedFullWidthSample()
{
    const classes = useStyles();

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot
            }}
            header={

                <div className="flex flex-1 w-full items-center justify-between">

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">shopping_basket</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="h6">Categoria</Typography>
                    </FuseAnimate>
                </div>

                <div className="flex flex-1 items-center justify-center px-12">



                </div>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Button component={Link} to="/apps/e-commerce/products/new" className="whitespace-no-wrap" variant="contained">
                        <span className="hidden sm:flex">Guardar Datos</span>
                        <span className="flex sm:hidden">New</span>
                    </Button>
                </FuseAnimate>
            </div>


            }
            contentToolbar={
                <div className="px-24"><h4>Nueva Categoria</h4></div>
            }

            content=
            {
                <div className="p-16 sm:p-24 max-w-2xl">
                <TextField
                className="mt-8 mb-16"
                required
                label="Nombre de la categoria"
                autoFocus
                id="name"
                name="name"
                variant="outlined"
                fullWidth
            />


                </div>


            }
        />
    )
}

export default CardedFullWidthSample;