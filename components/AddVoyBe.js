import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore } from "redux";
import { Provider } from 'react-redux';

import counter3 from '../reducers/reducer3';

import CounterContainerBe from '../container/CounterContainerBe';


let store3 = createStore(counter3);
const Application = () => (
    <Provider store={store3}>
        <CounterContainerBe />
        
    </Provider>

    
);
export default Application;
AppRegistry.registerComponent('myproject', () => Application);