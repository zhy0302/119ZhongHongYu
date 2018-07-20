import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class DialogText extends Component
{   
    constructor(props){
        super(props);
    }
handTitleChange=(event)=> {
        console.log(event.target.innerHTML);
      }
render(){ 
    const{item}=this.props;
    return(
        <div className="box" onClick={this.props.showText} >
        <ul> 
        <div>标题:<input type="text"   onChange={this.handTitleChange}></input></div>
        <div>描述<input type="text"   onChange={this.handDescriptionChange}></input></div>
        <div>时间<input type="text"   onChange={this.handTimeChange}></input></div>
        <button className="btn" onclick={this.renderDailog1}>确定</button>
        </ul>
        </div>
      )
    }
    }