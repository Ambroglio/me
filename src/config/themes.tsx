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
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#d9d9d9",
            contrastText: '#000000',
        },
        text: {
            primary: "#000000"
        }
    }
}

export const dark_theme = {
    palette: {
        type: "dark" as PaletteType,
        background: {
            default: grey[900]
        },
        primary: {
            main: "#5588dd",
            contrastText: '#ffffff',
        },
        secondary: {
            main: "#aaaaaa",
            contrastText: '#000000',
        },
        text: {
            primary: "#ffffff"
        }
    },
}