import React, { Component } from 'react';
import '../ButtonBox/ButtonBox.css';
import{Input, Select, AutoComplete,Button} from 'antd';
const InputGroup = Input.Group;
 const Option = Select.Option;
export default class ButtonBox extends Component {
  render() {
    return (
      <div className="buttonbox-wrapper">
      <div className="left-buttons">
        <button>汇总</button>
        <Button type="primary">摄影课</Button>
        <button onClick>绘画课</button>
        </div>
        <div  className="right-buttons">
        <button>返回</button>
        </div>
      </div>
    );
  }
}