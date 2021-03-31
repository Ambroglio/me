import React from "react";
import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        height: "1px",
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
    }
}));

export default function Border() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    )
}