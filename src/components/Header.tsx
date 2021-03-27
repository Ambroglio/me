import React from "react";
import {Button, Icon, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import Toggle from "./Toggle";
import {Link} from "react-router-dom";
import CustomLink from "./CustomLink";
import me_circle from "../images/me_circle.png"
import linkedin_logo from "../images/linkedin_logo.png"
import github_logo from "../images/github_logo.svg"
import {openUrl} from "../utils/Listeners";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    titleLink: {
        flexGrow: 1,
        textDecoration: "none"
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
             0px 1px 10px 0px ${theme.palette.primary.main}66`
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
             0px 1px 10px 0px ${theme.palette.primary.main}66`

    },
    smallIconContainer: {
        marginLeft: theme.spacing(1),
        width: "15px",
        height: "15px",
        display: "flex"

    },
    smallIcon: {
        width: "15px",
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.background}>
                <Toolbar>
                    <img src={me_circle} alt={"Photo of Ambroise Mullie, cropped as a circle."}
                         className={classes.image}/>
                    <div className={classes.presentation}>
                        <CustomLink to={"/"}>
                            <Typography variant="h4" className={classes.title}>Ambroise Mullie</Typography>
                        </CustomLink>
                        <div className={classes.line}>
                            <Typography variant={"subtitle1"} className={classes.username}>
                                Ambroglio
                            </Typography>
                            <IconButton className={classes.smallIconContainer} onClick={(e) => openUrl("https://www.linkedin.com/in/ambroisemullie/")}>
                                <img src={linkedin_logo} className={classes.smallIcon}/>
                            </IconButton>
                            <IconButton className={classes.smallIconContainer} onClick={(e) => openUrl("https://github.com/Ambroglio")}>
                                <img src={github_logo} className={classes.smallIcon}/>
                            </IconButton>
                        </div>
                    </div>
                    <div className={classes.titleLink}>

                    </div>
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
                </Toolbar>
            </AppBar>
        </div>
    )
}