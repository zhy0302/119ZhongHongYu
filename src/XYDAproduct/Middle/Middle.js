import React, { Component } from 'react';
import {Table, Input, Select, AutoComplete, Button } from 'antd';
//import'./Table.css';
const InputGroup = Input.Group;
const Option = Select.Option;
export default class Tables1__ extends Component {
  constructor() {
    super();
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
   
    todoActions.FETCH_SEARCH_LIST(this.state.inputVal);
  }
    render() {
        const { state } = this.props;
        console.log(state);
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
              placeholder="MID"/>
            <Button onClick={this.handleClick}>搜索</Button>
          </InputGroup>
        </div>
        <div className="table">
          <Table dataSource={state.xydaReducer.dataSource2} columns={state.xydaReducer.columns2} />
        </div>
      </div>
        )
    }
}
