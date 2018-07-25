import React from 'react';
import  Td from'./Td.js'
//import './Style.css';
//import './TodoStyle.css';
//import icon6 from '../icon/smile.png';
import icon3 from '../icon/search.png';
import icon4 from '../icon/add.png';
//const closeImg = require('../icon/photo.png')
export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="chat-bar">
            <h4 className="chat-bar__title">微信</h4>
            <img className="chat-bar-search" src={icon3} alt="" />
            <img className="chat-bar-add" src={icon4} alt="" onClick={this.handleShowDialog} />
            </div>
        )
    }
}