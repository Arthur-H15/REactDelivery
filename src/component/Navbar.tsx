// @flow 

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";


export const Navbar:FunctionComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">

                </IconButton>
                <Typography variant="h6">code Delivery</Typography>
            </Toolbar>
            
        </AppBar>
    );
};