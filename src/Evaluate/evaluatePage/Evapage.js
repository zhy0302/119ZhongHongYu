import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Icon, Tabs, Carousel, Input, List, Select, AutoComplete, Button } from 'antd';
import './Evapage.css';
import MyUnfinished from './MyUnfinished';
import MyFinished from './MyFinished';
import AllFinished from './AllFinished';
import AllUnfinished from './AllUnfinished';
const TabPane = Tabs.TabPane;
const InputGroup = Input.Group;
const Option = Select.Option;
function callback(key) {
    console.log(key);
}
export default class Evapage extends Component {
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
    todoActions.FETCH_SEARCH_LIST(this.state.inputVal);
  }
  handleReturn = () => {
    browserHistory.goBack()
    console.log(browserHistory.goBack)
  }
    render() {
        const {state} =this.props;
        console.log(state)
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
        <List>
            <Tabs onChange={callback} type="card" >
                <TabPane tab="我的未点评" key="1" >  
                <MyUnfinished state={state}/>
                </TabPane>
                <TabPane tab="我的点评历史" key="2"> 
                <MyFinished state={state}/>
                </TabPane>
                <TabPane tab="全部未点评" key="3" >  
                <AllFinished  state={state}/> 
                </TabPane>
                <TabPane tab="全部已点评" key="4">
                 <AllUnfinished state={state}/>
                </TabPane> 
                </Tabs>   
            </List>
            </div>
            

        )
    }
}


