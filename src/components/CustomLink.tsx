import {Link} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core";
import React from "react";

interface Props {
    to: string,
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textDecoration: "none",
        color: "inherit"
    }
}))

export default function CustomLink(props: Props) {
    const classes = useStyles();

    return (
        <Link to={props.to} className={classes.root}>
            {props.children}
        </Link>
    )
}