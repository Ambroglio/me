import React from "react";
import {makeStyles, Theme} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        height: "1px",
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
    }
}));

type Props = {
    className?: string
}

export default function Border({className} : Props) {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}></div>
    )
}