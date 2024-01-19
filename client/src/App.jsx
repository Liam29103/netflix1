import "./App.scss";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Home /> : <Redirect to="/register" />}
                </Route>
                <Route exact path="/register">
                    {!user ? <Register /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/login">
                    {!user ? <Login /> : <Redirect to="/" />}
                </Route>
                {user && (
                    <>
                        <Route path="/movies">
                            <Home type="movie" />
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
    );
};

export default App;
