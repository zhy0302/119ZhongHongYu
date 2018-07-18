import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttom from './buttom';
import Messageitem from './Messageitem';
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
          title:'11',
          desc:'11d',
          time:'11t'
        },
        {
          icon:icon1,
          title:'22',
          desc:'22d',
          time:'22t'
        }
      ],
      bottomData:[
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
       // return <DialogView/>
    }
    return null;
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
        bottomData.map((buttonItem, i) => (<Button key={i} item={buttonItem}/>))

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
        {this.renderDailog()}
          </div>
      </div>
    );
  }
}

export default App;
