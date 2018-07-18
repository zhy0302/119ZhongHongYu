import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './buttom';
import Messageitem from './Messageitem';
import DialogView from'./DialogView';
import Mid from './mid';

// import guid from'./guid';

const icon1 = require('./icon/c.jpg');
const icon = require('./icon/b.jpg');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDailog: false,
      messages:[
        {
          icon,
          title:'小年糕',
          desc:'111',
          time:'10:00'
        },
        {
          icon:icon1,
          title:'小板凳',
          desc:'222',
          time:'13:00'
        },
        {
          icon:icon1,
          title:'小豆芽',
          desc:'333',
          time:'14:00'
        }
      ],
      bottomData:[
        {
          icon,
          title:'小豆芽'
        },
        {
          icon,
          title:'wx'
        },
        {
          icon,
          title:'wx'
        },
        {
          icon,
          title:'wx'
        }
      ]
    }
  }
  onclick = () => {
    alert("hello")
    const onclick = this.props.onclick;
    const item = this.props.item;
    if (onclick) {
      onclick(item)
    }
  }
  onItemClick = (message) =>{
    console.log(message);
    this.setState({
      showDailog : true   //控制DialogView的显示
    })
}
  renderDailog = () => {
    if (this.state.showDailog) {
        return <DialogView show={this.handleClick}/>
    }
    return null;
  }
  handleClick=(event)=> {
    console.log(event.target.innerHTML);
  }
  renderMsgList = () =>{
    const messages = this.state.messages
    return (
      <div>
        {messages.map((msg, i) => (<Mid key={i} item={msg}/>))}
      </div>
    )
  }
  renderBottomList = () =>{
    const bottomData = this.state.bottomData
    return (
        bottomData.map((buttonItem, i) => (<Buttom key={i} item={buttonItem}/>))
    )
  }
  render() {
    return (
      <div className="App" onClick={this.onItemClick}>
        <ul className="mid" >
        {this.renderMsgList()}
        {this.renderDailog()}
        </ul>
        <div className="buttom" onClick={this.onclick} >
        {this.renderBottomList()}

          </div>
      </div>
    );
  }
}

export default App;
