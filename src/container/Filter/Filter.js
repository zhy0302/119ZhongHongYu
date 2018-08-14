import React, { Component } from 'react';
import { TAB_BAR } from '../../constants';
import './Filter.css';
const _wx = require('./img/wx.png');
const phone = require('./img/phone-number.png');
const find = require('./img/find.png');
const _me = require('./img/me.png');
export default class Filter extends Component {
    constructor() {
        super();
        this.tabs = [{
            icon: _wx,
            key: 'wx'
        }, {
            icon: phone,
            key: 'txl'
        }, {
            icon: find,
            key: 'fx'
        }, {
            icon: _me,
            key: 'me'
        }];
    }

    render() {
        const { tabbarMap } = this.props;

        return (
            <footer>
                <ul className="tab">
                    {this.tabs.map((item, idx) => {
                        return (
                            <li key={idx} className={"tab_item " + tabbarMap[item.key] + '-tab'}>
                                <div>
                                    <img src={item.icon} alt="" />
                                </div>
                                {TAB_BAR[item.key]}
                            </li>
                        );
                    })}
                </ul>
            </footer>
        )
    }
}
