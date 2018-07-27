import React from 'react';
import './Tab.css'
import {callState2} from'../../action';
//import callState3 from'callState3';
import icon3 from '../../icon/search.png';
import icon4 from '../../icon/add.png';
export default class Top extends React.Component {
  handleShowDialog=()=>{
      const {state, todoActions} = this.props; 
      console.log(state.controlDia)
      todoActions.callState2({
        isDialog1: state.controlDia.isDialog1,          
      })
  }
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
