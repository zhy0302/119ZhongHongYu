import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import { Input } from 'antd';
import '../Header/Header.css'
import Item from '../../../node_modules/antd/lib/list/Item';
const icon = require('./img/a.jpg');
export default class ButtonBox extends Component {
    constructor() {
        super();
    }
    render() {
        const { state } = this.props;
        console.log(state);
        return (
            <div className="header">
                <Avatar shape="square" src={state.HeaderReducer.img} style={{ width: '100px', height: '100px', marginTop: '10px', marginLeft: '10px' }} />
                <div className="left1">
                    {
                        Object.keys(state.HeaderReducer.map[0]).map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    {state.HeaderReducer.map[0][item]}:{state.HeaderReducer.user[0][item]}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="right">
                </div>
            </div>
        )
    }
}
