import React from "react"
import {makeStyles, StyleRules, Theme, Typography} from "@material-ui/core";
import {MEDIA_RULE_FOR_MOBILE} from "../../config/responsive_variables";


type Props = {
    children: string
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {

        }
    }

    // @ts-ignore
    styles["root"][MEDIA_RULE_FOR_MOBILE] = {
        textAlign: "center"
    }

    return styles
})

export default function Title({children} : Props) {
    const classes = useStyles()

    return (
        <Typography variant={"h4"} className={classes.root} color={"primary"}>
            {children}
        </Typography>
    )
}