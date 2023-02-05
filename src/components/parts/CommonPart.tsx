import React from "react"
import { CommonDataType } from "../../types/json_types";
import { Grid, makeStyles, StyleRules, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";

type Props = {
    data: CommonDataType
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {
            display: "flex",
            flexFlow: "column",
            width: "100%",
            marginTop: theme.spacing(0)
        },
        partTitle: {},
        dates: {
            textAlign: "right",
            fontWeight: "lighter",
            fontSize: 10
        },
        presentation: {
            marginBottom: theme.spacing(1.5)
        },
        details: {
            margin: 0
        }
    }

    // @ts-ignore
    styles["partTitle"]["fontWeight"] = "500"

    return styles
})

export default function CommonPart({ data }: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={0}>
                <Grid item xs={(data.startingDate || data.endDate) ? 10 : 12}>
                    <Typography variant={"body1"} className={classes.partTitle}>{
                        `${data.name}${data.city ? ` - ${data.city!!}` : ""}`
                    }</Typography>
                </Grid>
                {(data.startingDate || data.endDate) &&
                    <Grid item xs={2}>
                        <Typography variant={"body2"} className={clsx(classes.partTitle, classes.dates)}>{
                            data.startingDate && data.endDate ? `${data.startingDate} - ${data.endDate}` : data.startingDate ? `${data.startingDate}` : `${data.endDate}`
                        }</Typography>
                    </Grid>
                }
            </Grid>
            <div>
                <Typography variant={"body2"} className={classes.presentation}>
                    <span>{data.description}</span>
                    {data.details && data.details.length > 0 &&
                        <ul className={classes.details}>
                            {data.details.map((detail: string) => (
                                <li>{detail}</li>
                            ))}
                        </ul>
                    }
                </Typography>
            </div>
        </div>
    )
}