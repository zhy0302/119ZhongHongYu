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
    // const list = this.props.state.TableReducer.dataSource;
    // let newList;
    // console.log(list)
    // if(list.result){
    //     newList = list.result.map(t =>{
    //         return list.entities.studentList[t];
    //     })
    // }
      return ( 
        <div className="table">         
          <div className="first">在学课程
          <Table dataSource={state.TableReducer.dataSource} columns={state.TableReducer.columns} />
          </div>
          <div className="second">历史数据
          <Table  rowKey={record=>record.class_info.id}
          dataSource={state.TableReducer.dataSource1} columns={columns} />
          </div>
          </div>
      );
    }
  }