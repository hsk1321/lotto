import React, { Component } from "react";
import "./LoginScreen.css";

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
                    <div className="input__form__txt">ID</div>
                    <input
                        id="id"
                        className="input__box"
                        type="text"
                        placeholder="ID"
                    />
                </div>
                <div className="input__form">
                    <div className="input__form__txt">PASSWORD</div>
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
                />
            </div>
        );
    };
}

export default LoginScreen;
