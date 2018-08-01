import React, { Component } from 'react';
import{Table} from 'antd';
import { Input } from 'antd';
import { Tabs, Button } from 'antd';
//import'./Table.css';
export default class Tables1 extends Component {
  constructor() {
    super();
}
    render() {
      const {state}=this.props; 
      return ( 
        <div className="table">
        <Input size="small" style={{ width: '100px', height: '20px', marginTop: '40px', marginLeft: '500px' }} />
        <Button className="submit1" style={{ width: '55px', height: '20px', marginTop: '10px', marginLeft: '0px' }}>提交</Button>      
        <Table dataSource={state.xydaReducer.dataSource2} columns={state.xydaReducer.columns2} />
          </div>
      );
    }
  }