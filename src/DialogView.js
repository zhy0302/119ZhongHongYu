import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class DialogView extends Component
{   
    constructor(props){
        super(props);
    }
render(){ 
    return(
    <ul className="mid1" onClick={this.props.show}>
    <li className="item" >打印</li>
    <li className="item" >添加</li>
    <li className="item" >删除</li>
    <li className="item" >修改</li>
    </ul>
  )
}
}