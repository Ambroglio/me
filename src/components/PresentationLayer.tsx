import React, {useEffect, useState} from "react";
import {SectionType} from "../types/json_types";
import {DESKTOP_MIN_WIDTH} from "../config/responsive_variables";
import {Grid} from "@material-ui/core";
import Section from "./Section";

type Props = {
    sections: Array<SectionType>
}

export default function PresentationLayer({sections} : Props) {
    const [state, setState] = useState({
        mobileView: false
    })
    const {mobileView} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth <= DESKTOP_MIN_WIDTH
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <Grid container item xs={12} spacing={0} id={"sections"}>
            {sections.map((section: SectionType) => (
                <Grid item xs={12}>
                    <Section section={section} />
                </Grid>
            ))
            }
        </Grid>
    )
}