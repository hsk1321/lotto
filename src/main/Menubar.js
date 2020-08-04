import React, { Component } from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";

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
                <Link to="/board" className="main__board">
                    Notice board
                </Link>
                <Link to="/chatting" className="main__chat">
                    Chat
                </Link>
                <Link to="/profile" className="main__profile">
                    <IoMdContact />
                </Link>
            </div>
        );
    };
}

export default Menubar;
