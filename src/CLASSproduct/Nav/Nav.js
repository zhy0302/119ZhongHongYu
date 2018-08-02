import React, { Component } from 'react';
export default class Nav extends Component {
    constructor() {
        super();
    }
    render() {
        const { state } = this.props;
        console.log(state);
        return (
            <div className="nav">
            <span>TIA|摄影课</span>
            </div>
        )
    }
}
