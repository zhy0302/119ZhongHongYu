import React, { Component } from 'react';
import './DialogText.css';

export default class DialogText extends Component { 
    constructor(props){
        super(props);
    } 
    
    render(){
        return(           
            <div className="content" >
            <div className="close-btn2" onClick={this.props.handleClose}>close</div>
              <ul classname="cont" onClick={this.props.showText}>
               <li className="item" >置顶</li><hr/>
               <li className="item" >删除</li><hr/>
               <li className="item" >多选</li><hr/>
              </ul>
           </div>
        );
    }
}