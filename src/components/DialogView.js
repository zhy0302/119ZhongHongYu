import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }//即将挂载
  componentDidMount() {
    console.log('componentDidMount');
  }//已经挂载
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }//即将接收新属性
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }//是否要更新
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }//即将更新
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }//更新完毕
  //构造函数，初始化为空
  constructor(props){
    super(props);
    this.state = {
        title:null,
        descript:null,
        time:null
    };
  } 
  //设置title为输入的值
  showTitle=(e)=>{
    this.setState({
        title:e.target.value
    });
  }
  //设置descript为输入的值
  showDescript=(e)=>{
        this.setState({
            descript:e.target.value
        });
  }
  //设置time为输入的值
  showTime=(e)=>{
    this.setState({
    time:e.target.value
  });
}
  //打包提交
  Submit=()=>{
  const {onClick} = this.props;
  onClick && onClick ({
    ...this.state
  })
  } 

    //console.log('component render');
    //const {showDialog1 } = this.props;
    //if (!showDialog1) {
    //  return null;
    //}//接收父组件传来的状态 
    render() {
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.props.handleClose}>close</div>
        <ul className="dialog-ctn">
           <li className="item"> 标题：<input type="text" onChange={this.showTitle} ></input></li>
           <li className="item"> 描述：<input type="text" onChange={this.showDescript}></input></li>
           <li className="item"> 时间：<input type="text" onChange={this.showTime}></input></li>
           <button className="submit-btn" onClick={this.Submit}>提交</button>
           <button className="close-btn1" onClick={this.props.handleClose }>关闭</button>
        </ul>
      </div>
    );
  }
}

