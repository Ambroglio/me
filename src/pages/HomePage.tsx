import React from "react";
import Page from "../components/Page";
import sections from "../data/sections.json"
import PresentationLayer from "../components/PresentationLayer";
import { makeStyles, Typography } from "@material-ui/core";
import Border from "../components/Border";
import { MEDIA_RULE_FOR_MOBILE } from "../config/responsive_variables";
import { openUrl } from "../utils/Listeners";
import { GMAIL_URL, LINKEDIN_URL } from "../config/url_variables";
import moment from "moment";

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
                I am a French IT passionate of <span className={classes.color}>{moment().diff(moment(process.env.REACT_APP_BIRTH_DATE, "YYYYMMDD"), "years")}</span> years old.
                </Typography>
                <Typography variant={"body1"} className={classes.text}>
                I worked for 4 years as a Full Stack Developer, three years in France and one in Canada.
                I am currently looking for new challenges in a major city in Europe, such as Paris, London or Rotterdam.
            </Typography>
            <br/>
            <Typography variant={"body1"} className={classes.text}>
                I graduated with a Master of Computer Science, in 2021, specialised in Business Informatics, from the University of
                Lille, in France.
            </Typography>
            <Typography variant={"body1"} className={classes.text}>
                I really like to code, but I also like to model and analyze a project before doing it, in order to be as most efficient as possible when coding.
            </Typography>
            <br />
            <Typography variant={"body1"} className={classes.text}>
                If you are interested in my profile, feel free to contact me!
                Send me a <span className={classes.link} onClick={(e) => openUrl(GMAIL_URL)}>mail</span>, or contact me via <span className={classes.link} onClick={(e) => openUrl(LINKEDIN_URL)}>LinkedIn</span>.
            </Typography>
            <Border />
            <PresentationLayer sections={sections} />
        </Page>
    )
}