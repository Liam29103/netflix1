import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useContext, useState} from "react";
import "./Navbar.scss";

import {AuthContext} from "../../authContext/AuthContext";
import {logout} from "../../authContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <a href="/" className="a">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    </a>
                    <a href="/" className="a">
                        <span>Home</span>
                    </a>
                    <a href="/series" className="a">
                        <span className="navbarmainLinks">Series</span>
                    </a>
                    <a href="/movies" className="a">
                        <span className="navbarmainLinks">Movies</span>
                    </a>

                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="Avatar.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
