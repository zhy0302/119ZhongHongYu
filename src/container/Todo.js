{/*import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import './Style.css';
import './TodoStyle.css';
import AddTodo from'./AddTodo';
import TodoList from'./TodoList';
import Filter from'./Filter';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import icon from '../icon/smile.png';
// import addicon from'../icon/add.png';
export default class Todo extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
          messages: [
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
              icon: icon6,
              title: '小豆包',
              descript: 'hi 小豆包',
              time: '7-17 10:00',
            }
          ],
          showDialog: false,
          showDialog1: false,
          key:0,
          checkbox:false,
          moreSeclet: false,
          deleteArr:[],
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
   /* handleAddItem = (item,idx) => {
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
   //判断当前状态是否改变，若改变，则弹出DialogView
    //顶部添加
    handleAddItem = (item) => {
      console.log(item) 
      //const { submit } = this.props;

        const newMessages = this.state.messages.slice();
        newMessages.unshift({
          icon: icon,
          title:item.title,
          descript: item.descript,
          time: item.time
        });
        this.setState({
          messages:newMessages
        })
     } 
    
   render(){
        return(   
        <div className="todo-ctn">
            <AddTodo  onAddTodo={this.handleAddItem}/>
            <TodoList    onTodoItemClick={this.handleTodoItemClick} messages={this.state.messages}/>
            <Filter/>
        </div> 
        );
    }
} */}