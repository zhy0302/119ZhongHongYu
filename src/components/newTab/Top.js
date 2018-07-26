import React from 'react';
import './Tab.css'
import {callState2} from'../../action';
//import callState3 from'callState3';
import icon3 from '../../icon/search.png';
import icon4 from '../../icon/add.png';
export default class Top extends React.Component {
  handleShowDialog=()=>{
      const { state, dispatch } = this.props;
      dispatch(callState2({
          dialog1: !state.isDialog1,
      }))
  }
//   handerAdd = () => {
//     const { state, callState3 } = this.props;
//     callState3({
//       dialog1: !state.isDialog1,
//     })
// }

 /*renderList = () => {
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
  }*/
  render() {
      return (
      
        <div className="chat-bar" onClick={this.handleAddItem}>
            <h4 className="chat-bar__title">微信</h4>
            <img className="chat-bar-search" src={icon3} alt="" />
            <img className="chat-bar-add" src={icon4} alt="" onClick={this.handleShowDialog.bind(this, true)} />
     
        </div>
        
      )
    
  }
}
