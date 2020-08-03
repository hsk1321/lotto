import React, { Component } from "react";
import "./LoginScreen.css";
import { IoIosContact, IoIosLock } from "react-icons/io";

class LoginScreen extends Component {
    state = {
        id: "",
        pwd: "",
        login_flag: false,
    };

    textChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    login = () => {
        const { id, pwd } = this.state;

        if (id === "" || pwd === "") {
            alert("Input your ID or Password");
        } else {
            if (id === "admin" && pwd === "1321") {
                alert("wellcome! admin");
                this.setState({
                    id: "",
                    pwd: "",
                    login_flag: true,
                });
            } else {
                this.setState({
                    id: "",
                    pwd: "",
                });
                console.log(this.state.id, this.state.pwd);
            }
        }
    };

    render = () => {
        const { id, pwd } = this.state;
        return (
            <div className="login__form">
                <div className="input__form">
                    <div className="icons">
                        <IoIosContact size={30} />
                    </div>
                    <input
                        id="id"
                        name="id"
                        className="input__box"
                        type="text"
                        placeholder="ID"
                        onChange={this.textChange}
                        value={id}
                    />
                </div>
                <div className="input__form">
                    <div className="icons">
                        <IoIosLock size={30} />
                    </div>
                    <input
                        id="pwd"
                        name="pwd"
                        className="input__box"
                        type="password"
                        placeholder="Password"
                        onChange={this.textChange}
                        value={pwd}
                    />
                </div>
                <button className="submit__btn" onClick={this.login}>
                    Login
                </button>
                <div className="login__screen__contents">
                    <a href="/" className="link__contents">
                        Forgot?
                    </a>
                    <a href="/" className="link__contents">
                        Sign in?
                    </a>
                </div>
            </div>
        );
    };
}

export default LoginScreen;
