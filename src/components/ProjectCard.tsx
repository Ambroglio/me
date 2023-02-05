import React from "react";
import {ProjectType} from "../types/json_types";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader, CardMedia, Chip,
    makeStyles,
    StyleRules,
    Theme,
    Typography
} from "@material-ui/core";
import {openUrl} from "../utils/Listeners";

type Props = {
    project: ProjectType
}

const useStyles = makeStyles((theme: Theme) => {
    const styles: StyleRules = {
        root: {
            marginBottom: theme.spacing(2)
        },
        chip: {
            margin: theme.spacing(0.3)
        },
        cardActions: {
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
        },
        githubButton: {
            marginTop: theme.spacing(1),
            marginLeft: "0px !important"
        },
        media: {
            height: 0,
            paddingTop: "37.5%" //16:6,
        },
        cardMediaContainer: {

        }
    }

    return styles
})

export default function ProjectCard({project}: Props) {
    const classes = useStyles()

    let subheader = `Started in ${project.creation_year}, finished in ${project.end_year}`

    if (project.creation_year === project.end_year) {
        subheader = `Made in ${project.creation_year}`
    }

    return (
        <Card id={project.id.toString()} className={classes.root}>
            {project.img_url &&
            <div className={classes.cardMediaContainer}>
                <CardMedia
                    className={classes.media}
                    image={`/static/projects/${project.img_url}`}
                />
            </div>
            }
            <CardHeader
                title={project.name}
                subheader={subheader}
            />
            <CardContent>
                <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div>
                    <Chip color={"primary"} label={project.type} className={classes.chip}/>
                    {project.tags.length > 0 &&
                    <>
                        {project.tags.map((tag, index) => (
                                <Chip color={"secondary"} label={tag} className={classes.chip}/>
                            )
                        )}
                    </>
                    }
                </div>
                {project.github_link &&
                <Button className={classes.githubButton} size={"small"} color={"primary"} onClick={(e) => {
                    openUrl(project.github_link!!)
                }}>
                    Github repository
                </Button>
                }
            </CardActions>
        </Card>
    )
}