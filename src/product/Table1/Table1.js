import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Table, Input, Select, AutoComplete, Button } from 'antd';
//import'./Table.css';
import { Link } from 'react-router';
const InputGroup = Input.Group;
const Option = Select.Option;
export default class Tables1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      inputVal: event
    })
  }

  handleClick = () => {
    const { todoActions } = this.props;
    // router.goBack()
    // console.log(router)
    todoActions.FETCH_SEARCH_LIST(this.state.inputVal);
  }
  handleReturn = () => {
    browserHistory.goBack()
    console.log(browserHistory.goBack)
  }
  render() {
    const columns2 = [{
      title: '学员名',
      dataIndex: 'nick',
      key: 'nick',
    }, {
      title: '学员编号',
      dataIndex: 'mid',
      key: 'mid',
    }, {
      title: '入学时间',
      dataIndex: 'enter_time',
      key: 'enter_time',
    }, {
      title: '开课时间',
      dataIndex: 'start_time',
      key: 'start_time',
    }, {
      title: '在学课程',
      dataIndex: 'learning_lessons',
      key: 'learning_lessons',
    }, {
      title: '负责老师',
      dataIndex: 'teachers',
      key: 'teachers',
    }]
    const { state } = this.props;
    console.log(this.props)
    return (
      <div>
        <div className='right_button'>
          <InputGroup compact>
            <Select defaultValue="mid">
              <Option value="mid">mid</Option>
            </Select>
            <AutoComplete
              style={{ width: 200 }}
              onChange={this.handleChange.bind(this)}
              placeholder="MID" />
            <Button onClick={this.handleClick}>搜索</Button>  
            <div className="Return">
             <Button onClick={this.handleReturn} >返回</Button> 
             </div>
          </InputGroup> 
        </div>
        <div className="table">
          <Table dataSource={state.xydaReducer.dataSource2} columns={columns2} />
        </div>
      </div>
    );
  }
}
