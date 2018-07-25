import React from 'react';
import './Style.css';
import './TodoStyle.css';
import { createStore } from '../../node_modules/redux';
import { provider } from 'react-redux';
import rootReducer from '../container/reducers';
import AddTodo from './container/AddTodo';
const store = createStore(rootReducer)
export default class Store extends React.Component {
    constructor() {
        super();
    }
    switch(action,type)
    {
        case1:
        console.log('1');
        case2:
        console.log('2');

    }
} 