import React from 'react';
import './Style.css';
import './TodoStyle.css';
import AddTodo from'./AddTodo.js';
import TodoList from'./TodoList.js';
import Filter from'./Filter.js';
// import addicon from'../icon/add.png';
export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messages:[{
                title:'123',
                descript:'222',
                time:'111',
                showDialog:0
            },
            {
                title:'111',
                descript:'222',
                time:'111',
                showDialog:0
            }]
        }
    }
   // handleAddItem=(item,idx)=>{     //输入后添加到顶部
   //     const newList=this.state.list.Slice();
   //     newList[idx].showDialog=1;
   //     newList.unshift(item)
   //     this.setState({
   //         list:newList
   // });
  //  }
    handleAddItem = (item,idx) => {
       // console.log(item)
        if(!item.title||!item.descript||!item.time){//如果三个输入框有一个为空，则状态不变
          this.setState({
              showDialog:!this.state.showDialog,
          })
        }else{                                       //否则，就获取输入的值，放到顶部
          const newMessages = this.state.messages.slice();//将数据拷贝一份
          newMessages[idx].isCompleted=1;
          newMessages.unshift({
           // icon: icon,
            title:item.title,
            descript: item.descript,
            time: item.time
          });
          //console.log(newMessages)
          this.setState({
            messages: newMessages,
            showDialog:!this.state.showDialog,
          });  
       }
      }

      handleShowDialog = (item,idx)=> {
        console.log(item);
        console.log(idx);
        this.handleAddItem(item,idx);
        this.setState({showDialog:!this.state.showDialog });
      }
   // handleTodoItemClick=(item,idx)=>{
     //   console.log(item);
    //    console.log(idx);
    //    this.State({
   //         isInputActive:!this.state.isInputActive,
  //  }); 
   // }
    render(){
        return(
   <div className="todo-ctn">
            <AddTodo handleSubmit={this.handleAddItem} onAddTodo={this.state.handleAddItem}/>
            <TodoList messages={this.state.messages}/>
            <Filter/>
        </div>
        );
    }
} 