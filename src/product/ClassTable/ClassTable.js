import React, { Component } from 'react';
import{Table} from 'antd';
import'./ClassTable.css';
export default class ClassTable extends Component {
  constructor() {
    super();
}
    render() {
      const {state}=this.props; 
      return ( 
        <div className="Classtable">
        <Table dataSource={state.ClassReducer.dataSource3} columns={state.ClassReducer.columns3}/>
          </div>
      );
    }
  }