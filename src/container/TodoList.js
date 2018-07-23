import React from 'react';
import  Todo from'./Todo.js'
import './Style.css';

export default class TodoList extends React.Component{
    handleComplete=item=>{
         const{onTodoItemClick}=this.props;
         onTodoItemClick(item);
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
} 