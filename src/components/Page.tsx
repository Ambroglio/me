import React, {ReactNode} from "react"
import Header from "./Header";
import {Box, Container, makeStyles, Theme} from "@material-ui/core";
import Title from "./typos/Title";
import Border from "./Border";
import Detail from "./typos/Detail";

type Props = {
    title: string,
    subtitle? : string
    children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2)
    }
}));

export default function Page({title, subtitle, children} : Props) {
    const classes = useStyles()

    return (
        <div>
            <Header/>

            <Container className={classes.root}>
                <Box>
                    <Title>
                        {title}
                    </Title>
                    {subtitle &&
                    <Detail>
                        {subtitle}
                    </Detail>
                    }
                    <Border />
                </Box>
                <Box>
                    {children}
                </Box>
            </Container>
        </div>
    )
}

