import React, { Component } from 'react';
import{Table} from 'antd';
//import'./Table.css';
export default class ClassTables extends Component {
  constructor() {
    super();
}
    render() {
      const {state}=this.props; 
      return ( 
        <div className="Classtable">
        <Table dataSource={state.dataSource3} columns={state.columns3} />
          </div>
      );
    }
  }