import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export default class buttom extends Component
{
    constructor(props)
    {super(props)
    }
onclick=()=>{
    const onclick=this.props.onclick;
    const item=this.props.item;
    if(onclick){
        onclick(item)
    }
}
render()
{
    //const item=this.props.item;
    return(
        <div className="buttom">
        <input type="button"  className="chat-buttom" value="微信"></input>
        <input type="button"  className="chat-buttom" value="通讯录"></input>
        <input type="button"  className="chat-buttom" value="发现"></input>
        <input type="button"  className="chat-buttom" value="我"></input>  
        </div>
    );
}
}