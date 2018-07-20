import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Nav extends Component
{ 
render(){
    const {onAddBtnClick} = this.props;
    return(
    <div className="nav">
    微信
    <div onClick={onAddBtnClick}>+</div> 
    <button className="close-btn" onclick={this.onCloseclick}>关闭</button>
{/*     
        <h2 className="nav-title" onclick={this.handleAddItem}>{item.title}</h2>
        <img className="nav-img" src={item.icon} alt=""  onClick={this.handleAddItem}/> */}
      </div>
    )
}

}