import {PaletteType} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const light_theme = {
    palette: {
        type: "light" as PaletteType,
        background: {
            default: "white"
        },
        primary: {
            main: "#f0878b",
            contrastText: "#fff"
        },
        text: {
            primary: "#000"
        }
    }
}

export const dark_theme = {
    palette: {
        type: "dark" as PaletteType,
        background: {
            default: grey[800]
        },
        primary: {
            main: "#5588dd",
            contrastText: '#fff',
        },
        text: {
            primary: "#fff"
        }
    },
}