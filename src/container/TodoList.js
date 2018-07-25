import React from 'react';
import  Todo from'./Todo.js'
import AddTodo from'./AddTodo';
import './Style.css';
import './TodoStyle.css';
//import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import icon from '../icon/smile.png';
const icon6 = require('../icon/smile.png');
//const closeImg = require('../icon/photo.png')
export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
      }
    render(){
        const {item} = this.props;
       // return this.state.messages.map((item, idx) => {
            return (
            <li className="chat-list__item" >            
              <img className="chat-list__item__avatar" src={this.icon} alt="" />
              <div className="chat-list__item__content">
              <div className="chat-list__item__content__topBar">
              <h2 className="chat-list__item__content__title">{this.title}</h2>
              <div className="chat-list__item__content__time">{this.time}</div>
              </div>
              <div className="chat-list__item__content__recentMsg">{this.descript}</div>
              <div className="chat-list__item__content__more" onClick={this.props.show1}>更多</div>
              </div>         
            </li>
            )
    }   
}
