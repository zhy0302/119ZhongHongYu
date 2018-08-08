import React, { Component } from 'react';
import{Table} from 'antd';
import'./Table.css';
export default class Tables extends Component {
  constructor() {
    super();
    }
    render() {
      const {state}=this.props;
    console.log(this.props);    
      console.log(state.TableReducer.msg)
    const currentlist = state.TableReducer.msg.dataSource1;
    //const list = state.TableReducer.dataSource1;
    let newList;

    if(currentlist.result){
        newList = currentlist.result.map(t =>{
            return currentlist.entities.studentList[t];
        })
    }
      return ( 
        <div className="table">         
          <div className="first">在学课程
          {/* <Table dataSource={state.TableReducer.dataSource} columns={state.TableReducer.columns} /> */}
           <Table dataSource={currentlist} columns={state.TableReducer.columns} />
          </div>
          <div className="second">历史数据
          <Table  rowKey={record=>record.class_info.id}
          dataSource={state.TableReducer.dataSource1} columns={columns} />
          </div>
          </div>
      );
    }
  }