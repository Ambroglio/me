import React from "react";
import Page from "../components/Page";
import sections from "../data/sections.json"
import PresentationLayer from "../components/PresentationLayer";

export default function HomePage() {
    return (
        <Page title={"Who am I ?"} subtitle={"Curious and eager to learn, always !"}>
            <PresentationLayer sections={sections} />
        </Page>
    )
}