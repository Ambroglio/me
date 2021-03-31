import React from "react";
import Page from "../components/Page";
import projects from "../data/projects.json"
import ProjectsLayer from "../components/ProjectsLayer";

export default function ProjectsPage() {
    return (
        <Page title={"Projects"} subtitle={"All the different projects I made !"}>
            <ProjectsLayer projects={projects} />
        </Page>
    )
}