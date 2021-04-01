import React /*, {useEffect, useState}*/ from "react";
import {SectionType} from "../types/json_types";
/*import {DESKTOP_MIN_WIDTH} from "../config/responsive_variables";*/
import Section from "./Section";
import {makeStyles} from "@material-ui/core";
import {compareSectionsByOrder} from "../utils/Compare";

type Props = {
    sections: Array<SectionType>
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    }
}))

export default function PresentationLayer({sections}: Props) {
    const classes = useStyles()

    /*const [state, setState] = useState({
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
    }, []);*/

    return (
        <div className={classes.root}>
            {sections.sort(compareSectionsByOrder).map((section: SectionType) => (
                <Section section={section}/>
            ))}
        </div>
    )
}