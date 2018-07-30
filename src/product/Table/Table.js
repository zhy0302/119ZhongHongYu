import React, { Component } from 'react';
import{Table} from 'antd';
export default class Tables extends Component {
    render() {
        const dataSource = [{
            key: '1',
            class: '高级班',
            status: '进行中',
            time: '2017-04-20',
            teacher:'小白老师',
            classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'

          }, {
            key: '2',
            class: '进阶班',
            status: '进行中',
            time: '2017-04-20',
            teacher:'小白老师',
            classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'
          },{
          key: '3',
          class: '提高班',
          status: '进行中',
          time: '2017-04-20',
          teacher:'小白老师',
          classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'
        },{
          key: '4',
          class: '入门班',
          status: '进行中',
          time: '2017-04-20',
          teacher:'小白老师',
          classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'
        },{
          key: '5',
          class: '体验班',
          status: '已结束',
          time: '2017-04-20',
          teacher:'小白老师',
          classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'
        }
      ];
          
          const columns = [{
            title: '班级',
            dataIndex: 'class',
            key: 'class',
          }, {
            title: '课程状态',
            dataIndex: 'status',
            key: 'status',
          }, {
            title: '开课时间',
            dataIndex: 'time',
            key: 'time',
          },{
            title: '老师',
            dataIndex: 'teacher',
            key: 'teacher',
          },{
            title: '上课率',
            dataIndex: 'classper',
            key: 'classper',
          },{
            title: '作业提交率',
            dataIndex: 'zuoye',
            key: 'zuoye',
          },{
            title: '被点评情况',
            dataIndex: 'dianping',
            key: 'dianping',
          },{
            title: '打卡率',
            dataIndex: 'daka',
            key: 'daka',
          },{
            title: '满意度',
            dataIndex: 'satify',
            key: 'satify',
          }];
          const dataSource1 = [{
            key: '1',
            class: '高级班',
            status: '已结束',
            time: '2017-04-20',
            classper:'3/21',
            zuoye:'5/21',
            dianping:'87.98%',
            daka:'3/21',
            satify:'90.14%'
          }]; 
      return (    
        <div className="table">         
          <div className="first">在学课程
          <Table dataSource={dataSource} columns={columns} />
          </div>
          <div className="second">历史数据
          <Table dataSource={dataSource1} columns={columns} />
          </div>
          </div>
      );
    }
  }