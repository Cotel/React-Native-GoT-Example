import React from 'react';
import {Scene} from 'react-native-router-flux';

import HomePage from './containers/HomePage';
import CharacterDetails from './containers/CharacterDetails';

const AppScenes = (
    <Scene key="root">
        <Scene key="home" hideNavBar component={HomePage} title="GoT Example" />
        <Scene key="details" component={CharacterDetails} />
    </Scene>
)

export default AppScenes;