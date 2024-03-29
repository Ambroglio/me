import React, {useEffect, useState} from "react";
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Button,
    IconButton,
    makeStyles,
    StyleRules,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import Toggle from "./Toggle";
import CustomLink from "./CustomLink";
import profile_image from "../images/me_updated.jpg"
import linkedin_logo from "../images/linkedin_logo.png"
import github_logo from "../images/github_logo.svg"
import {openUrl} from "../utils/Listeners";
import {Email, Menu} from "@material-ui/icons";
import {GITHUB_URL, GMAIL_URL, LINKEDIN_URL} from "../config/url_variables";
import {DESKTOP_MIN_WIDTH, MEDIA_RULE_FOR_MOBILE} from "../config/responsive_variables";
import {grey} from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {
            flexGrow: 1,
        },
        blank: {
            flexGrow: 1,
        },
        presentation: {
            marginLeft: theme.spacing(2),
            color: theme.palette.text.primary,
        },
        username: {
            fontStyle: "italic"
        },
        title: {
            color: theme.palette.text.primary,
            textDecoration: "none",
        },
        background: {
            padding: theme.spacing(2),
            background: theme.palette.background.default,
            borderBottom: "solid 4px",
            borderBottomColor: theme.palette.primary.main,
            boxShadow:
                `0px 2px 4px -1px ${theme.palette.primary.main}01, 
             0px 4px 5px 0px ${theme.palette.primary.main}42, 
             0px 1px 10px 0px ${theme.palette.primary.main}66`,
            justifyContent: "inherit",
        },
        line: {
            display: "flex",
            alignItems: "center"
        },
        image: {
            width: "100px",
            border: "solid 1px",
            borderColor: theme.palette.primary.main,
            borderRadius: "50%",
            boxShadow:
                `0px 2px 4px -1px ${theme.palette.primary.main}01, 
             0px 4px 5px 0px ${theme.palette.primary.main}42, 
             0px 1px 10px 0px ${theme.palette.primary.main}66`,
        },
        smallIconContainer: {
            marginLeft: theme.spacing(1),
            width: "15px",
            height: "15px",
            display: "flex"

        },
        smallIcon: {
            width: "15px",
        },
        globalPresentation: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            flexFlow: "row",
        },
        horizontalLinks: {
            display: "flex",
            flexFlow: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        githubIcon: {},
        accordion: {
            width: "100%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
            background: theme.palette.background.default
        }
    }

    // @ts-ignore
    styles["blank"][MEDIA_RULE_FOR_MOBILE] = {
        flexGrow: 0
    }
    // @ts-ignore
    styles["background"][MEDIA_RULE_FOR_MOBILE] = {
        justifyContent: "center"
    }
    // @ts-ignore
    styles["line"][MEDIA_RULE_FOR_MOBILE] = {
        textAlign: "center",
        justifyContent: "center"
    }
    // @ts-ignore
    styles["globalPresentation"][MEDIA_RULE_FOR_MOBILE] = {
        flexFlow: "column"
    }

    if (theme.palette.type === "dark") {
        // @ts-ignore
        styles["smallIconContainer"]["backgroundColor"] = "white"
        // @ts-ignore
        styles["smallIconContainer"]["&:hover"] = {}
        // @ts-ignore
        styles["smallIconContainer"]["&:hover"]["backgroundColor"] = grey[300]
    }

    return styles
});

export default function Header() {
    const classes = useStyles();

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
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar className={classes.background}>
                    <div id={"globalPresentation"} className={classes.globalPresentation}>
                        <img src={profile_image} alt={"Ambroise Mullie, cropped as a circle."}
                             className={classes.image}/>
                        <div className={classes.presentation}>
                            <CustomLink to={"/"}>
                                <Typography variant="h4" className={classes.title}>Ambroise Mullie</Typography>
                            </CustomLink>
                            <div className={classes.line}>
                                <Typography variant={"subtitle1"} className={classes.username}>
                                    Ambroglio
                                </Typography>
                                <IconButton className={classes.smallIconContainer}
                                            onClick={(e) => openUrl(LINKEDIN_URL)}>
                                    <img src={linkedin_logo} className={classes.smallIcon} alt={"LinkedIn logo"}/>
                                </IconButton>
                                <IconButton className={clsx(classes.smallIconContainer, classes.githubIcon)}
                                            onClick={(e) => openUrl(GITHUB_URL)}>
                                    <img src={github_logo} className={classes.smallIcon} alt={"Github logo"}/>
                                </IconButton>
                                <IconButton className={classes.smallIconContainer}
                                            onClick={(e) => openUrl(GMAIL_URL)}>
                                    <Email color={"primary"} className={classes.smallIcon}/>
                                </IconButton>
                            </div>
                        </div>
                        {mobileView &&
                        <div id={"globalLinks"}>
                            <Accordion className={classes.accordion}>
                                <AccordionSummary expandIcon={<Menu />}>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div id={"links"} className={classes.horizontalLinks}>
                                        <Button color="default">
                                            <CustomLink to={"/"}>
                                                Who am I ?
                                            </CustomLink>
                                        </Button>
                                        <Button color="default">
                                            <CustomLink to={"/projects"}>
                                                Projects
                                            </CustomLink>
                                        </Button>
                                        <Toggle/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        }
                    </div>
                    <div className={classes.blank}>
                    </div>
                    {(!mobileView) &&
                    <div>
                        <div id={"links"}>
                            <Button color="default">
                                <CustomLink to={"/"}>
                                    Who am I ?
                                </CustomLink>
                            </Button>
                            <Button color="default">
                                <CustomLink to={"/projects"}>
                                    Projects
                                </CustomLink>
                            </Button>
                            <Toggle/>
                        </div>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}