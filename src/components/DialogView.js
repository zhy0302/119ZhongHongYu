import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  constructor(props){
    super(props);
    this.state = {
        title:null,
        descript:null,
        time:null
    };
} 
   showTitle=(e)=>{
    this.setState({
        title:e.target.value
    });
}
    showDescript=(e)=>{
        this.setState({
            descript:e.target.value
        });
    }
        showTime=(e)=>{
            this.setState({
                time:e.target.value
            });
}


Submit=()=>{
  const {onClick} = this.props;
  onClick && onClick ({
    ...this.state
  })
}
  
 
  render() {
    //console.log('component render');
    const {showView } = this.props;
    if (!showView) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.props.handleClose}>close</div>
        <ul className="dialog-ctn">
           <li className="item"> 标题：<input type="text" onChange={this.showTitle} ></input></li>
           <li className="item"> 描述：<input type="text" onChange={this.showDescript}></input></li>
           <li className="item"> 时间：<input type="text" onChange={this.showTime}></input></li>
           <button className="submit-btn" onClick={this.Submit}>提交</button>
           <button className="close-btn1" onClick={this. handleClose }>关闭</button>
        </ul>
      </div>
    );
  }
}

