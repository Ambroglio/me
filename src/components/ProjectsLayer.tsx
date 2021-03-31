import React, {useEffect, useState} from "react";
import {ProjectType} from "../types/json_types";
import ProjectCard from "./ProjectCard";
import {Grid} from "@material-ui/core";
import {DESKTOP_MIN_WIDTH} from "../config/responsive_variables";

type Props = {
    projects: Array<ProjectType>
}

export default function ProjectsLayer({projects}: Props) {
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
        <Grid container item xs={12} spacing={mobileView ? 0 : 3} id={"projects"}>
            {projects.map((project: ProjectType) => (
                <Grid item xs={mobileView ? 12 : 4}>
                    <ProjectCard project={project}/>
                </Grid>
            ))}
        </Grid>
    )
}