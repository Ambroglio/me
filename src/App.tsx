import React from 'react';
import './App.css';
import {MeThemeContext, MeThemeProvider} from "./context/MeThemeProvider";
import {
    createMuiTheme, CssBaseline,
    ThemeProvider,
} from '@material-ui/core';
import {light_theme, dark_theme} from "./config/themes";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <MeThemeProvider>
            <MeThemeContext.Consumer>{
                theme => {
                    let muiTheme = createMuiTheme(light_theme);
                    if (theme.theme === "dark") {
                        muiTheme = createMuiTheme(dark_theme);
                    }

                    return (
                        <ThemeProvider theme={muiTheme}>
                            <CssBaseline/>
                            <Router>
                                <Switch>
                                    <Route exact path={"/"}><HomePage/></Route>
                                    <Route exact path={"/projects"}><ProjectsPage/></Route>
                                    <Route path={"/**"}><Redirect to={"/"}/></Route>
                                </Switch>
                            </Router>
                        </ThemeProvider>
                    )
                }
            }
            </MeThemeContext.Consumer>
        </MeThemeProvider>
    );
}

export default App;
