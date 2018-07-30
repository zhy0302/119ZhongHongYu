import React from 'react';
import '../container/Style.css'
 import {callState3}from '../container/action';
 import {callClose}from '../container/Action';
 import icon2 from '../icon/photo.png';
export default class DialogText extends React.Component {
   handerAdd = () => {
        const { state, todoActions } = this.props;
        if(!this.refs.myInput.value||!this.refs.myInput1.value||!this.refs.myInput2.value){
            this.setState({
                isDialog:!this.state.iSDialog,
            })
          }else{
            const copeMessages = state.messagesItem.messages.slice();
           // const temp = copeMessages[state.controlDia.index];
            copeMessages.unshift({
                icon: icon2,
                title:this.refs.myInput.value,
                descript: this.refs.myInput1.value,
                time:this.refs.myInput2.value,
              });
            todoActions.callState3({
              messages:copeMessages,
            isDialog1: state.controlDia.isDialog1,
        })
    }
    }
      //关闭当前窗口
  handleClose = () => {
    const { state, todoActions } = this.props;
    todoActions.callClose({
      isDialog1: state.controlDia.isDialog1,
     })
  }
    render() {
        const { state } = this.props;
        return state.controlDia.isDialog1 ? (
            <div className="mask-ctn">
             <div className="close-btn" onClick={this.handleClose}>close</div>
                <ul className="dialog-ctn">                  
                    <li className="item"> 标题：<input className="app-input" ref="myInput" ></input></li>
                    <li className="item"> 描述：<input className="app-input" ref="myInput1"></input></li>
                    <li className="item"> 时间：<input className="app-input" ref="myInput2" ></input></li>
                    <button className="submit-btn" onClick={this.handerAdd}>提交</button>
                    <button className="close-btn1" onClick={this.handleClose}>关闭</button>
                </ul>
            </div>
        ) : null;
    }
}


