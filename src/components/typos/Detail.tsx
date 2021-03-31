import React from "react";
import {makeStyles, StyleRules, Theme, Typography} from "@material-ui/core";
import {MEDIA_RULE_FOR_MOBILE} from "../../config/responsive_variables";
import {grey} from "@material-ui/core/colors";

type Props = {
    children: string
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {
            color: theme.palette.secondary.main,
            fontWeight: "initial",
            fontStyle: "italic"
        }
    }

    if (theme.palette.type === "light") {
        // @ts-ignore
        styles["root"]["color"] = grey[600]
    }

    // @ts-ignore
    styles["root"][MEDIA_RULE_FOR_MOBILE] = {
        textAlign: "center"
    }

    return styles
})

export default function Detail({children} : Props) {
    const classes = useStyles()

    return (
        <Typography variant={"subtitle2"} className={classes.root} color={"secondary"}>
            {children}
        </Typography>
    )
}