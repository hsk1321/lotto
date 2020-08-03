import React, { Component } from "react";
import Menubar from "../main/Menubar";
import { Route } from "react-router-dom";
import MainScreen from "../main/MainScreen";
import PremiumScreen from "../screen/PremiumScreen";
import GameScreen from "../screen/GameScreen";
import GetCoinScreen from "../screen/GetCoinScreen";
import ProfileScreen from "../screen/ProfileScreen";

class MainNavigator extends Component {
    render = () => {
        return (
            <div>
                <Menubar />
                <Route path="/main" component={MainScreen} exact={true} />
                <Route
                    path="/preminum"
                    component={PremiumScreen}
                    exact={true}
                />
                <Route path="/game" component={GameScreen} exact={true} />
                <Route path="/getcoin" component={GetCoinScreen} exact={true} />
                <Route path="/profile" component={ProfileScreen} exact={true} />
            </div>
        );
    };
}

export default MainNavigator;
