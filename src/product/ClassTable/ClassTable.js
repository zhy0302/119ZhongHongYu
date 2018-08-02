import React, { Component } from 'react';
import{Table} from 'antd';
import'./ClassTable.css';
export default class ClassTable extends Component {
  constructor() {
    super();
}
    render() {
        const { state} = this.props;
      return ( 
        <div>
        {/* <div className="left1">
        {
            Object.keys(state.ClassReducer.map[0]).map((item, index) => {
                return (
                    <div className="item" key={index}>
                        {state.ClassReducer.map[0][item]}:{state.ClassReducer.user[0][item]}
                    </div>
                )
            })
        }
        </div> */}
  
        <div className="Classtable">
        <Table dataSource={state.ClassReducer.dataSource3} columns={state.ClassReducer.columns3}/>
          </div>
          </div>
      );
    }
  }