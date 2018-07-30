import React, { Component } from 'react';
import '../ButtonBox/ButtonBox.css';
import{Button} from 'antd';
export default class ButtonBox extends Component {
  render() {
    return (
      <div className="buttonbox-wrapper">
      <div className="left-buttons">
        <button>汇总</button>
        <Button type="primary">摄影课</Button>
        <button>绘画课</button>
        </div>
        <div  className="right-buttons">
        <button>返回</button>
        </div>
      </div>
    );
  }
}