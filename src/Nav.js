import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Nav extends Component
{   
render(){
    const {item} = this.props;
    return(
    <div className="nav">
        <h2 className="nav-title">{item.title}</h2>
        <img className="nav-img" src={item.icon} alt=""/>
      </div>
    )
}

}