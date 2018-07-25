import React from 'react';
import Nav from './Nav';
import Mid from './Mid';
import Butt from './Butt.js';
import '../App.css';
import './Mid.css';
//import '../project/Mid.css';
//import './TodoStyle.css';
import icon6 from '../icon/smile.png';
import icon1 from '../icon/collect.png';
import icon2 from '../icon/photo.png';
import icon from '../icon/smile.png';
// import addicon from'../icon/add.png';
{/*export default class Td extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            todoList:[{
                wx:'微信',
                color:'red'
            },
             {
                txl:'微信',
                color:'blue'  
             },
             {
                 fx:'微信',
                 color:'purple' 
               },
              {
                me:'我',
                color:'yellow'
              } 
            ],
            tabbrMap:[{
                wx:DEFAULT_COLOR[0],
                txl:DEFAULT_COLOR[0],
                fx:DEFAULT_COLOR[0],
                me:DEFAULT_COLOR[0]
            }],
        }  
      }
      
    renderList=()=>{
        const ListView=this.state.todoList.map((item,index)=>{
            return<Mid key={index} 
                   item={item} 
            />
        });
        return ListView;
    }
    handleShowDialog=()=>{
        this.setState({showDialog:!this.state.showDialog});
    }
    handleAddItem=(item)=>{
        if(this.state.showDialog){
            this.setState({
                showDialog=!this.state.showDialog,
            })
        }else{
            const newTodoList=this.state.todoList.slice();
            newTodoList.unshift({
                title:item.title,
                color:item.color
            });
            this.setState({
                todoList:newTodoList,
                showDialog:!this.state.showDialog,
            });
        }
    }
   render(){
       const {todoList,tabbrMap}=this.state
        return(   
        <div className="todo-ctn">
            <Nav/>
            <Mid onClick={this.handleAddItem}   />
            <Butt show={this.handleChat}/>
        </div>  
        )
    }
} */}
     