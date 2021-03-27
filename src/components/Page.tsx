import React, {ReactNode} from "react"
import Header from "./Header";
import {Box, Container, makeStyles, Theme, Typography} from "@material-ui/core";

type Props = {
    title: string,
    children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2)
    }
}));

export default function Page({title, children} : Props) {
    const classes = useStyles()

    return (
        <div>
            <Header/>

            <Container className={classes.root}>
                <Box>
                    <Typography variant={"h5"}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    {children}
                </Box>
            </Container>
        </div>
    )
}

