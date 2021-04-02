import React from "react";
import Page from "../components/Page";
import sections from "../data/sections.json"
import PresentationLayer from "../components/PresentationLayer";
import {makeStyles, Typography} from "@material-ui/core";
import Border from "../components/Border";
import {MEDIA_RULE_FOR_MOBILE} from "../config/responsive_variables";
import {openUrl} from "../utils/Listeners";
import {GMAIL_URL, LINKEDIN_URL} from "../config/url_variables";

const useStyles = makeStyles((theme) => {
    const styles = {
        color: {
            color: theme.palette.primary.main
        },
        link: {
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
        text: {}
    }
    // @ts-ignore
    styles["text"][MEDIA_RULE_FOR_MOBILE] = {
        textAlign: "center"
    }

    return styles
})

export default function HomePage() {
    const classes = useStyles()

    return (
        <Page title={"Who am I ?"} subtitle={"Curious and eager to learn, always !"}>
            <Typography variant={"body1"} className={classes.text}>
                I'm a French IT passionate of <span className={classes.color}>22</span> years old ! I'm about to
                graduate with a Master of Computer Science, specialised in Business Informatics, from the University of
                Lille, in France.
            </Typography>
            <Typography variant={"body1"} className={classes.text}>
                I really like to code, but I also like to model and analyze a project before doing it, in order to be the most efficient as possible when coding.
            </Typography>
            <Typography variant={"body1"} className={classes.text}>
                Currently living in the North of France, I really wish to work abroad, in order to discover and confront
                myself to other cultures.
            </Typography>
            <br/>
            <Typography variant={"body1"} className={classes.text}>
                If you're interested in my profile, feel free to contact me !
                Send me an <span className={classes.link} onClick={(e) => openUrl(GMAIL_URL)}>email</span>, or contact me via <span className={classes.link} onClick={(e) => openUrl(LINKEDIN_URL)}>LinkedIn</span>.
            </Typography>
            <Border/>
            <PresentationLayer sections={sections}/>
        </Page>
    )
}