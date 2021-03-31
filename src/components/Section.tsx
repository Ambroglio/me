import React from "react";
import {SectionType} from "../types/json_types";
import {makeStyles, StyleRules, Theme, Typography} from "@material-ui/core";
import Border from "./Border";

type Props = {
    section: SectionType
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        sectionTitle: {
            fontWeight: "bold"
        }
    }

    return styles
})

export default function Section({section} : Props) {
    const classes = useStyles()

    return (
        <div>
            <Typography variant={"body1"} color={"primary"} className={classes.sectionTitle}>{section.name}</Typography>

            <Border/>
        </div>
    )
}