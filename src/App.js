import React, { Component } from "react";
import MainNavigator from "./route/MainNavigator";

class App extends Component {
    render = () => {
        return (
            <div className="App">
                <MainNavigator />
            </div>
        );
    };
}

export default App;
