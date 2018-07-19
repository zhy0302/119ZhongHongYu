import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DialogView.css';

export default class DialogView extends Component
{   
    constructor(props){
        super(props);
    }
render(){ 
    const{item}=this.props;
    return(
    <div className="midd" onClick={this.props.show}>
    <ul className>
    <li className="item" >打印</li>
    <li className="item" >添加</li>
    <li className="item" >删除</li>
    <li className="item" >确定</li>
    </ul>
    </div>
  )
}
}