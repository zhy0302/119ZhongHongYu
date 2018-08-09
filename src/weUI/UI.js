import React, { Component } from 'react';
import {  Tabs, List } from 'antd';
import Act from './container/Act';
import Dia from './container/Dia';
import Pro from './container/Pro';
import Sli from './container/Sli';
import Swi from './container/Swi';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
export default class UI extends Component {
    render() {
        const {state} =this.props;
        return ( 
        <List>
            <Tabs onChange={callback} type="card" >
                <TabPane tab="组件一" key="1" >  
                <Act state={state}/>
                </TabPane>
                <TabPane tab="组件二" key="2"> 
                <Dia state={state}/>
                </TabPane>
                 <TabPane tab="组件三" key="3" >  
                <Pro  state={state}/> 
                </TabPane>
                <TabPane tab="组件四" key="4">
                 <Sli state={state}/>
                </TabPane> 
                <TabPane tab="组件五" key="5">
                 <Swi state={state}/>
                </TabPane>  
                </Tabs>   
            </List>
        )
    }
}
