import React, { Component } from 'react';
import { Tabs, Table, Button } from 'antd';
import {Link} from 'react-router';
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
                    <div className="left-buttons">
                    <button>汇总</button>
                        <Button type="primary">摄影课</Button>
                        <button onClick>绘画课</button>
                    </div>
                    <div className="right-buttons">
                         <Link className="Op" to="/Test"> <button >返回</button></Link>
                    </div>
                        <div className="first">在学课程
                    <Table dataSource={state.TableReducer.dataSource} columns={state.TableReducer.columns} />
                        </div>
                        <div className="second">历史数据
                    <Table dataSource={state.TableReducer.dataSource1} columns={state.TableReducer.columns} />
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="2" >
                <div className="left-buttons">
                        <button>汇总</button>
                        <Button type="primary">摄影课</Button>
                        <button onClick>绘画课</button>
                    </div>
                    <div className="right-buttons">     
                        <Link className="Op" to="/ClassDetal"><button >返回</button></Link>
                    </div>
                    <div className="satify">
                        <Table dataSource={state.SatifyReducer.dataSource} columns={state.SatifyReducer.columns} />
                    </div>
                </TabPane>
            </Tabs>

        )
    }
}
