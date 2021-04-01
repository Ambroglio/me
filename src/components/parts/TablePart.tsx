import React from "react"
import {
    Grid,
    makeStyles,
    StyleRules,
    Theme,
    Typography
} from "@material-ui/core";
import {TableDataType} from "../../types/json_types";
import Border from "../Border";

type Props = {
    data: TableDataType
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
        tableTitle: {
            fontSize: "14px",
            fontWeight: "bold",
            color: theme.palette.primary.main
        },
        table: {
            marginTop: theme.spacing(2)
        },
        tableBody1: {
            fontSize: "14px",
            fontWeight: "bold",
        },
        tableBody2: {
            fontSize: "12px"
        },
        border: {
            margin: 0,
            height: "0.1px"
        },
        numberText:{
            fontSize: "14px",
            fontWeight: "bold"
        },
        number: {
            color: theme.palette.primary.main
        }
    }

    // @ts-ignore
    styles["partTitle"]["fontWeight"] = "500"

    return styles
})

export default function TablePart({data}: Props) {
    const classes = useStyles()

    return (
        <div>
            <Typography variant={"body1"} className={classes.partTitle}>
                {data.description}
            </Typography>
            <Grid className={classes.table} container spacing={2} xs={12}>
                <Grid item xs={12}>
                    <Border className={classes.border} />
                </Grid>
                {data.content.map((content) => (
                    <>
                        <Grid item xs={3}><Typography className={classes.tableTitle}>{content.title}</Typography></Grid>
                        <Grid item xs={9}>
                            <Typography className={classes.tableBody1}>{content.body1}</Typography>
                            {(content.number && content.numberText) &&
                            <Typography className={classes.numberText}>
                                <span className={classes.number}>{content.number}</span> {content.numberText}
                            </Typography>
                            }
                            {content.body2 &&
                            <Typography className={classes.tableBody2}>{content.body2}</Typography>
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <Border className={classes.border}/>
                        </Grid>
                    </>
                ))}
            </Grid>
        </div>
    )
}