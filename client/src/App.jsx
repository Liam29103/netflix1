import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./authContext/AuthContext";
import {BrowserRouter} from "react-router-dom/cjs/react-router-dom";

const App = () => {
    const {user} = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {user ? <Home /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
                    <Route path="/register">{!user ? <Register /> : <Redirect to="/" />}</Route>
                    {user && (
                        <>
                            <Route path="/movies">
                                <Home type="movies" />
                            </Route>
                            <Route path="/series">
                                <Home type="series" />
                            </Route>
                            <Route path="/watch">
                                <Watch />
                            </Route>
                        </>
                    )}
                </Switch>
            </Router>
        </BrowserRouter>
    );
};

export default App;
