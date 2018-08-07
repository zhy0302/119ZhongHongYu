import React, { Component } from 'react';
import { Icon, Tabs, Carousel, Popover, List, Avatar } from 'antd';
import { Link } from 'react-router';
import './Evapage.css';
import MyUnfished from '../myUnfished/MyUnfinshed';
import MyFinished from './MyFinished';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
export default class Evapage extends Component {
    render() {
        const {state} =this.props;
        console.log(state)
        return ( 
        <List>
            <Tabs onChange={callback} type="card" >
                <TabPane tab="我的未点评" key="1" >  
                <MyUnfished state={state}/>
                <MyFinished state={state}/>
                </TabPane>
                <TabPane tab="我的点评历史" key="2"></TabPane>
                <TabPane tab="全部未点评" key="3" >   
                </TabPane>
                <TabPane tab="全部已点评" key="4"></TabPane> 
                </Tabs>   
            </List>
            

        )
    }
}


