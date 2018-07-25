import React from 'react';
import './Style.css';
import './TodoStyle.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import { createStore } from '../../node_modules/redux';
import { provider } from 'react-redux';
import rootReducer from '../container/reducers';
const store = createStore(rootReducer)
export default class Store extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    icon: icon1,
                    title: '小年糕',
                    descript: 'hello 小年糕',
                    time: '7-18 11:14'
                },
                {
                    icon: icon2,
                    title: '小板凳',
                    descript: 'hello 小板凳',
                    time: '7-18 11:15',
                },
                {
                    icon: icon6,
                    title: '小豆包',
                    descript: 'hi 小豆包',
                    time: '7-17 10:00',
                }
            ],
            showDialog: false,
            showDialog1: false,
            key: 0,
            checkbox: false,
            moreSeclet: false,
            deleteArr: [],
        }
    }
}