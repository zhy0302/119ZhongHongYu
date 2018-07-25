import React from 'react';
import  Td from'./Td'
import './Mid.css';
//import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import icon from '../icon/smile.png';
const icon6 = require('../icon/smile.png');
//const closeImg = require('../icon/photo.png')
export default class Mid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
   /* handleComplete = (item, idx) => {   
        const { onTodoItemClick } = this.props;
        onTodoItemClick(item, idx);
      }*/
    render(item, idx){
        //if (item.isCompleted) {
        return(
        <div key={idx} className="item-ctn"  onClick={() => this.handleComplete(item, idx)}>
          <ul className="chat-mid">
            <div className="chat-mid-name">我</div>
            <button className="s-btn1" onClick={this.props.handleAddItem()}>红色</button>
            <button className="s-btn2" >黑色</button>
            <button className="s-btn3" >紫色</button>
            <button className="s-btn4" >黄色</button>   
          </ul>
          <ul className="chat-mid"   onClick={() => this.handleComplete(item, idx)}>
             <div className="chat-mid-name">微信</div>
             <button className="s-btn1" >黑色</button>
             <button className="s-btn2" >黑色</button>
            <button className="s-btn3" >紫色</button>
            <button className="s-btn4" >黄色</button> 
        </ul>
        <ul className="chat-mid"  onClick={() => this.handleComplete(item, idx)}>
            <div className="chat-mid-name">通讯录</div>
            <button className="s-btn1" >紫色</button>
            <button className="s-btn2" >黑色</button>
            <button className="s-btn3" >紫色</button>
            <button className="s-btn4" >黄色</button> 
        </ul>
        <ul className="chat-mid"  onClick={() => this.handleComplete(item, idx)}>
            <div className="chat-mid-name">发现</div>
              <button className="s-btn4" >黄色</button>
              <button className="s-btn2" >黑色</button>
            <button className="s-btn3" >紫色</button>
            <button className="s-btn1" >黄色</button> 
        </ul>
        </div>
        )
      }
    
}
