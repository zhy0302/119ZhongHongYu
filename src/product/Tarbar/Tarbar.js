import React, { Component } from 'react';
import { Tabs, Table } from 'antd';
export default class ButtonBox extends Component {
    callback = (key) => {
        console.log(key);
    }
    render() {
        const TabPane = Tabs.TabPane;
        const { state } = this.props;
        return (
        <Tabs defaultActiveKey="1" onChange={this.callback()}>
            <TabPane tab="课程信息" key="1">
                <div className="table">
                    <div className="first">在学课程
                    <Table dataSource={state.TableReducer.dataSource} columns={state.TableReducer.columns} />
                    </div>
                    <div className="second">历史数据
                    <Table dataSource={state.TableReducer.dataSource1} columns={state.TableReducer.columns} />
                    </div>
                </div>
            </TabPane>
            <TabPane tab="满意度反馈" key="2">
                <div className="satify">
                    <Table dataSource={state.SatifyReducer.dataSource} columns={state.SatifyReducer.columns} />
                </div>
            </TabPane>
        </Tabs>

        )
    }
}
