import React, { Component } from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";

class Menubar extends Component {
    render = () => {
        return (
            <div className="menubar__container">
                <Link to="/main" className="main__link">
                    Logo
                </Link>
                <Link to="/premium" className="main__premium">
                    Premium
                </Link>
                <Link to="/game" className="main__game">
                    Game
                </Link>
                <Link to="/getcoin" className="main__get__coin">
                    Get
                </Link>
                <Link to="/profile" className="">
                    Proflie
                </Link>
            </div>
        );
    };
}

export default Menubar;
