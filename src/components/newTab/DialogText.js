import React from 'react';
import './Tab.css'
 import {callState3}from '../../action';
export default class Dialog extends React.Component {
    handerAdd = () => {
        const { state, todoActions } = this.props;
        todoActions.callState3({
            isDialog1: !state.controlDia.isDialog1,
        })
    }
    render() {
        const { state } = this.props;
        return state.controlDia.isDialog1 ? (
            <div className="mask-ctn">
                <ul className="dialog-ctn">
                    <div className="close-btn" onClick={this.props.handleClose}>close</div>
                    <li className="item"> 标题：<input className="app-input" ref="myInput" ></input></li>
                    <li className="item"> 描述：<input className="app-input" ref="myInput1"></input></li>
                    <li className="item"> 时间：<input className="app-input" ref="myInput2"></input></li>
                    <button className="submit-btn" onClick={this.handerAdd}>提交</button>
                    <button className="close-btn1" onClick={this.props.handleClose}>关闭</button>
                </ul>
            </div>
        ) : null;
    }
}


