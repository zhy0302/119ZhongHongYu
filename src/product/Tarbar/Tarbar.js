import React, { Component } from 'react';
import {Icon, Tabs, Table, Button ,Popover} from 'antd';
import {Link} from 'react-router';

import ButtonBox_Q from '../ButtonBox/ButtonBox';
export default class ButtonBox extends Component {
    callback = (key) => {
        console.log(key);
    }
 click=(index)=> {
    const { todoActions } = this.props;
    todoActions.change(index)
  }
  SelectRowClass=(record,e)=>{
      return{
        onClick:()=>{
            this.props.state.router.push('/Test')
            
        },
    };
  }   
 
    render() {
        const columns=[
            {
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
        }
    ]
        const columns1 = [{
    title: '课程',
    dataIndex: 'class_info.name',
    key: 'class_info.name',
  },{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name',
  },{
    title: '开课时间',
    dataIndex: 'time',
    key: 'time',
  },{
    title: '老师',
    dataIndex: 'teacher_info',
    key: 'teacher_info',
    render: (text,record,e) => {
      return  <span>
                <Popover title={`昵称：${text.nick}  ID：${text.id} 
                姓名：${text.real_name} mid：${text.mid}
                微信：${text.wx_code}`} trigger="click">
                  <Icon type="profile"/>{text.nick}
                </Popover>
            </span>
    },
  },{
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
  },{
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail',
  },{
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status',
    render:(text,record,index,e)=>{
      if(text==0){
          return <div className="aa" onClick={()=>this.click(index)}>待回复<Icon type="mail" /></div>
      }
       else{
              return<span>已回复</span>
          }
      }
  }]
        const TabPane = Tabs.TabPane;
        const { state } = this.props;
        const list = state.SatifyReducer.dataSource;
        let newList;
        if(list.result){
            newList = list.result.map(t => {
                const satisfiled1 = list.entities.satisfiled[t]; 
               // console.log(list)
                return {
                    ...satisfiled1,
                    class_info: list.entities.classes[satisfiled1.class_info],
                    teacher_info: list.entities.teachers[satisfiled1.teacher_info]
                  }
            })
        }

        return (
            <Tabs defaultActiveKey="0">
                <TabPane tab="课程信息" key="0">
                    <ButtonBox_Q/>
                        <div className="first">在学课程 
                        
                    <Table onRow={(record)=>this.SelectRowClass(record)} dataSource={state.TableReducer.dataSource} columns={columns} />
                   
                        </div>
                        <div className="second">历史数据
                        
                    <Table onRow={(record)=>this.SelectRowClass(record)} dataSource={state.TableReducer.dataSource1} columns={columns} />
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="1" >
                <Link  to="/ClassDetal"><ButtonBox_Q/></Link>
                    <div className="satify"> 
                        {/* <Table  dataSource={state.SatifyReducer.dataSource} columns={columns1} /> */}      
                        <Table  dataSource={newList} columns={columns1} />
                    </div>
                </TabPane>
            </Tabs>

        )
    }
    
}
