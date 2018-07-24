{/*import React from 'react';
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
        messages:[
            {
              icon: icon1,
              title: '小年糕',
              descript: 'hello 小年糕',
              time: '7-18 11:14'
            },
            {
              icon: icon2,
              title: '小板凳',
              descript: 'hello 小板凳',
              time: '7-18 11:15',
            },
            {
              icon: icon,
              title: '小豆包',
              descript: 'hi 小豆包',
              time: '7-17 10:00',
            }
          ]
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
       // })
    }   
}*/}

/*export default class TodoList extends React.Component{
    handleComplete=item=>{
         const{onTodoItemClick}=this.props;
    //     onTodoItemClick(item);
    }
    _renderTodoItem(item,idx){
     if(item.isCompleted){
         return <div key={idx} className="todo-is-completed">{item.title}</div>
     }
     return <div key={idx} onClick={this.handleComplete}>{item.title}</div>
    }
    render(){
        const{messages}=this.props;
        if(!messages){
            return null;
        }
        return(
        <div>
        {messages.map((item,idx)=>{
            return(         
                this._renderTodoItem(item,idx)       
               //<div key={idx}>{item.title}</div>
            )
        }
        )}
        </div>
        );
    }
} */