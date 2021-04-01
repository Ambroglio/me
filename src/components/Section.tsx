import React from "react";
import {CommonDataType, LinkDataType, PartTypeFieldType, SectionType, TableDataType} from "../types/json_types";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    makeStyles,
    StyleRules,
    Theme,
    Typography
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import CommonPart from "./parts/CommonPart";
import LinkPart from "./parts/LinkPart";
import TablePart from "./parts/TablePart";

type Props = {
    section: SectionType
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        sectionTitle: {
            fontWeight: "bold",
        },
        details: {
            display: "flex",
            flexFlow: "column"
        }
    }

    return styles
})

export default function Section({section}: Props) {
    const classes = useStyles()

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore color={"primary"}/>}
                aria-controls={`panel${section.id}a-content`}
                id={`panel${section.id}a-content`}
            >
                <Typography variant={"body1"} color={"primary"}
                            className={classes.sectionTitle}>{section.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                {section.parts.map((part) => {
                    if (part.type as PartTypeFieldType === "common") {
                        return <CommonPart data={part.data as CommonDataType} />
                    }
                    else if (part.type as PartTypeFieldType === "link") {
                        return <LinkPart data={part.data as LinkDataType} />
                    } else if (part.type as PartTypeFieldType === "table") {
                        return <TablePart data={part.data as TableDataType}></TablePart>
                    }
                    else {
                        return <></>
                    }
                })}
            </AccordionDetails>
        </Accordion>
    )
}