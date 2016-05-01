/* @flow */

import React from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import Home from '../components/home';

const scenes = Actions.create(
    <Scene key="root">
    <Scene key="home" component={Home} title="Home" />
    </Scene>
);

class Root extends React.Component {
    render() {
        return (
            <Router scenes={scenes} />
        );
    }
}

export default Root;
