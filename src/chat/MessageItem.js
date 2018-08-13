import React, { Component } from 'react';

export default class MessageItem extends Component {
  constructor(props){
    super(props);
  }
  //判断复选框是否勾选
  renderCheckBox = () =>{
    const {det} = this.props;
    return det ? (
        <div className="checkBox">
            <input type="checkbox"  onChange={this.props.delete}/> 
        </div>
    ) : null
}
  render(){
    const { item } = this.props;
    return(
      <li className="chat-list__item" >
         {this.renderCheckBox()}
        <img className="chat-list__item__avatar" src={item.icon} alt="" />
        <div className="chat-list__item__content">
          <div className="chat-list__item__content__topBar">
            <h2 className="chat-list__item__content__title">{item.title}</h2>
            <div className="chat-list__item__content__time">{item.time}</div>
          </div>
          <div className="chat-list__item__content__recentMsg">{item.descript}</div>
          <div className="chat-list__item__content__more" onClick={this.props.show1}>更多</div>
        </div>
      </li>
    );
  }
}







