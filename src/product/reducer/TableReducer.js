import * as ActionType from "../ActionType";
import React, { Component } from 'react';
import { Icon, Popconfirm, message, Button, Popover } from 'antd';
const content = (
    <div>
        <p>Content</p>
    </div>
);
const init_state1 = {
    user: [{
    }],
    map: [{
        id: '学员编号',
        mid: '在学课程',
        nick: '手机号码',
        real_name: '入学时间',
        wx_code: '累计学习天数'
    }],
    dataSource: [{
        key: '1',
        classInfo: '高级班',
        status: '进行中',
        startTime: '2017-04-20',
        teacherInfo: '小白老师',

        enterRate: '3/21',
        homeworkSubmitRate: '67.98',
        beCommenttedRate: '87.98%',
        signRate: '3/21',
        satisfyRate: '90.14%'
    }, {
        key: '2',
        classInfo: '进阶班',
        status: '进行中',
        startTime: '2017-04-21',
        teacherInfo: '小白老师',
        enterRate: '20/21',
        homeworkSubmitRate: '76.89',
        beCommenttedRate: '31.87',
        signRate: '5/21',
        satisfyRate: '90.14%'
    }
    ],
    columns: [{
        title: '班级',
        dataIndex: 'classInfo.name',
        key: 'classInfo.id',
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key: 'startTime',
    }, {
        title: '老师',
        dataIndex: 'teacherInfo.nick',
        key: 'teacherInfo.id',
        render: (text) => {
            return <Popover content={content} title={text} trigger="click">
                <Button>{text}</Button>
            </Popover>
            // return <div><Icon type="smile" onComfirm={this.click}/>{text}</div>
            // return (
            //     <Popover
            //       content={<a onClick={this.hide}>Close</a>}
            //       title="Title"
            //       trigger="click"
            //       visible={this.state.visible}
            //       onVisibleChange={this.handleVisibleChange}
            //     >
            //       <Button type="primary">Click me</Button>
            //     </Popover>
            //   );
        },
    }, {
        title: '上课率',
        dataIndex: 'enterRate',
        key: 'enterRate',
        render: (text) => {
            if (!text) return
            const num1 = text.split('/')[0];
            const num2 = text.split('/')[1];
            const num = (num1 / num2).toFixed(3);
            if (num > 0.95) {
                return <strong className="orange">{text}</strong>
            }
            else if (num < 0.80) {
                return <strong className="red">{text}</strong>
            } else {
                return <span>{text}</span>
            }
        }
    }, {
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key: 'homeworkSubmitRate',
        render: (text) => {
            //console.log(text<0.80)
            if (text > 0.95) {
                return <strong className="orange">{text}</strong>
            }
            else if (text < 0.80) {
                return <strong className="red">{text}</strong>
            } else {
                return <span>{text}</span>
            }
        }
    }, {
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key: 'beCommenttedRate',
        render: (text) => {
            if (text > 0.95) {
                return <strong className="orange">{text}</strong>
            }
            else if (text < 0.80) {
                return <strong className="red">{text}</strong>
            } else {
                return <span>{text}</span>
            }
        }
    }, {
        title: '打卡率',
        dataIndex: 'signRate',
        key: 'signRate',
        render: (text) => {
            const num1 = text.split('/')[0];
            const num2 = text.split('/')[1];
            const num = (num1 / num2).toFixed(3);
            if (num > 0.95) {
                return <strong className="orange">{text}</strong>
            }
            else if (num < 0.80) {
                return <strong className="red">{text}</strong>
            } else {
                return <span>{text}</span>
            }
        }
    }, {
        title: '满意度',
        dataIndex: 'satisfyRate',
        key: 'satisfyRate',
        render: (text) => {
            if (text > 0.95) {
                return <strong className="orange">{text}</strong>
            }
            else if (text < 0.80) {
                return <strong className="red">{text}</strong>
            } else {
                return <span>{text}</span>
            }
        }
    }],
    dataSource1: [{
        key: '1',
        classInfo: '高级班',
        status: '已结束',
        startTime: '2017-04-20',
        teacherInfo: '小白老师',
        enterRate: '3/21',
        homeworkSubmitRate: '5/21',
        beCommenttedRate: '87.98%',
        signRate: '3/21',
        satisfyRate: '90.14%'
    }],
};
export default function TableReducer(state = init_state1, action) {
    switch (action.type) {
        case ActionType: {
            const newState = { ...state };
            return newState;
        }
        case ActionType.FETCH_MSG + "_SUC":
            const msg = { ...state };
            console.log(action.data.data);
            console.log(msg.dataSource1)
            msg.dataSource = action.data.data.currentLessonsList;
            msg.dataSource1 = action.data.data.historyLessonsList;
            return msg;
        default:
            return state;
    }
}

