import React from "react"
import {LinkDataType} from "../../types/json_types";
import {makeStyles, StyleRules, Theme, Typography} from "@material-ui/core";
import CustomLink from "../CustomLink";

type Props = {
    data: LinkDataType
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {
            display: "flex",
            flexFlow: "column",
            width: "100%",
            marginTop: theme.spacing(1)
        },
        partTitle: {},
        dates: {
            textAlign: "right",
            fontWeight: "lighter"
        },
        presentation: {
            marginTop: theme.spacing(1)
        },
        details: {
            margin: 0
        }
    }

    // @ts-ignore
    styles["partTitle"]["fontWeight"] = "500"

    return styles
})

export default function LinkPart({data}: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CustomLink to={data.link}>
                <Typography variant={"body1"} className={classes.partTitle}>
                    {data.linkName}
                </Typography>
            </CustomLink>
        </div>
    )
}