import React from "react";
import {Switch, Theme} from "@material-ui/core";
import {NightsStay, WbSunny} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import {MeThemeContext} from "../context/MeThemeProvider";


const WhiteSwitch = withStyles((theme: Theme) => ({
    switchBase: {
        color: theme.palette.text.primary,
        '&$checked': {
            color: theme.palette.text.primary,
        },
        '&$checked + $track': {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.text.primary,
        },
        "&:hover": {
            color: theme.palette.text.primary,
            backgroundColor: `${theme.palette.text.primary}11 !important`,
        }
    },
    checked: {},
    track: {},
}))(Switch);

export default function Toggle() {
    return (
        <MeThemeContext.Consumer>
            {theme => {
                return (<WhiteSwitch
                    checked={theme.theme === "light"}
                    onChange={theme.toggleTheme}
                    checkedIcon={<WbSunny/>}
                    icon={<NightsStay/>}
                />)
            }
            }
        </MeThemeContext.Consumer>
    )
}