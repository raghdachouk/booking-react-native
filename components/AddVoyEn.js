import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore } from "redux";
import { Provider } from 'react-redux';

import counter2 from '../reducers/reducer2';


import CounterContainerEn from '../container/CounterContainerEn';


let store2 = createStore(counter2);

const Application = () => (
    <Provider store={store2}>
        <CounterContainerEn />
        
    </Provider>

    
);
export default Application;
AppRegistry.registerComponent('myproject', () => Application);