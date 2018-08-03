import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {Table, Input, Select, AutoComplete, Button } from 'antd';
//import'./Table.css';
import {Link} from 'react-router';
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
  handleReturn=()=>{
    browserHistory.goBack()
    console.log(browserHistory.goBack)
  }
  render() {
    const { state } = this.props;
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
          <div className="right-buttons">
          {/* <div onClick={this.handleReturn()>Go back</div> */}
                        <Button onClick={this.handleReturn} >返回</Button>
                    </div>
        </div>
        <div className="table">
          <Table dataSource={state.xydaReducer.dataSource2} columns={state.xydaReducer.columns2} />
        </div>
      </div>
    );
  }
}
