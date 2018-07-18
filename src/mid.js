import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Mid extends Component
{   
render(){
    console.log(this.props)
    // const {item, key} = this.props;
    const item = this.props.item
    return(
        <li className="mid1" >
        <img className="mid1-img" src={item.icon} alt="" />
        <div className="mid1_content" id="content">
          <div className="mid1-content-topbar">
            <h2 className="mid1-content-title">{item.title}</h2>
            <div className="mid1-content-time">{item.time}</div>
          </div>
          <div className="mid1-msg">{item.desc}</div>
        </div>
      </li>
    )
}

}