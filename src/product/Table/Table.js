import React, { Component } from 'react';
import{Table} from 'antd';
import'./Table.css';
export default class Tables extends Component {
  constructor() {
    super();
}
    render() {
      const {state}=this.props;
      console.log(state);  
      return ( 

        <div className="table">         
          <div className="first">在学课程
          <Table dataSource={state.dataSource} columns={state.columns} />
          </div>
          <div className="second">历史数据
          <Table dataSource={state.dataSource1} columns={state.columns} />
          </div>
          </div>
      );
    }
  }