import React, { Component } from "react";
import "./LoginScreen.css";
import { IoIosContact, IoIosLock } from "react-icons/io";

class LoginScreen extends Component {
    state = {
        id: "",
        pwd: "",
    };
    login = () => {};

    render = () => {
        return (
            <div className="login__form">
                <div className="input__form">
                    <div className="icons">
                        <IoIosContact size={30} />
                    </div>

                    <input
                        id="id"
                        className="input__box"
                        type="text"
                        placeholder="ID"
                    />
                </div>
                <div className="input__form">
                    <div className="icons">
                        <IoIosLock size={30} />
                    </div>
                    <input
                        id="pwd"
                        className="input__box"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button
                    className="submit__btn"
                    type="submit"
                    onKeyPress={this.login}
                >
                    Login
                </button>
            </div>
        );
    };
}

export default LoginScreen;
