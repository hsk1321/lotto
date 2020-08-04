import React, { Component } from "react";
import Menubar from "../main/Menubar";
import { Route } from "react-router-dom";
import MainScreen from "../main/MainScreen";
import PremiumScreen from "../screen/PremiumScreen";
import NoticeBoardScreen from "../screen/NoticeBoardScreen";
import ChatScreen from "../screen/ChatScreen";
import ProfileScreen from "../screen/ProfileScreen";

class MainNavigator extends Component {
    render = () => {
        return (
            <div>
                <Menubar />
                <Route path="/main" component={MainScreen} exact={true} />
                <Route path="/premium" component={PremiumScreen} exact={true} />
                <Route
                    path="/board"
                    component={NoticeBoardScreen}
                    exact={true}
                />
                <Route path="/chatting" component={ChatScreen} exact={true} />
                <Route path="/profile" component={ProfileScreen} exact={true} />
            </div>
        );
    };
}

export default MainNavigator;
