import React from "react";
import {Button} from "@mui/material"
import classNames from "classnames";
import classes from "./navitem.module.css"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = ({text, className, isLink, ...rest }) => {
    return(
        <>
            {

                <Button className={classNames(classes.navitem, className)} {...rest}>
                    <Typography className={classes.text}>
                        {text}
                    </Typography>
                </Button>

            }
        </>
    )

        
    
}

export default NavItem