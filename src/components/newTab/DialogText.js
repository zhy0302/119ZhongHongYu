import React from 'react';
import './Tab.css'
export default class Dialog extends React.Component {
    handerAdd = () => {
        const { state, dispatch } = this.props;
        dispatch(callState3({
            dialog1: !state.isDialog1,
        }))
    }
    render() {
        const { state } = this.props;
        return state.isDialog1 ? (
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


