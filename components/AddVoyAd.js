import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore } from "redux";
import { Provider } from 'react-redux';
import counter1 from '../reducers/reducer1';

import CounterContainer from '../container/CounterContainer';

let store1 = createStore(counter1);

const Application = () => (
    <Provider store={store1}>
        <CounterContainer />
        
    </Provider>

    
);
export default Application;
AppRegistry.registerComponent('myproject', () => Application);