import React from "react";
import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        height: "4px",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        boxShadow:
            `0px 2px 4px -1px ${theme.palette.primary.main}01, 
             0px 4px 5px 0px ${theme.palette.primary.main}42, 
             0px 1px 10px 0px ${theme.palette.primary.main}66`
    }
}));

export default function Border() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    )
}