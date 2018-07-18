import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Button extends Component
{   
render(){
    const {item} = this.props;
    return(
<div className="chat-buttom">
   <img className="chat-buttom-icon" src={item.icon} alt=""/> 
   <div className="chat-buttom-name">{item.title}</div>
</div>
    )
}

}