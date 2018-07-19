import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class DialogText extends Component
{   
    constructor(props){
        super(props);
    }
render(){ 
    const{item}=this.props;
    return(
        <div className="box" onClick={this.props.show1}>
        <ul> 
        <input type="text"  value={this.value} onclick="if(this.onclick)"></input>
        <input type="text"  value={this.value} onclick="if(this.onclick)"></input>
        <input type="text"  value={this.value} onclick="if(this.onclick)"></input>
        </ul>
        </div>
      )
    }
    }