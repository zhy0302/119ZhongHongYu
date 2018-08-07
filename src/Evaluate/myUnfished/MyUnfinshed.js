import React, { Component } from 'react';
import { Button, Input, Carousel, Table, List, Avatar } from 'antd';
import '../evaluatePage/Evapage.css';
import Item from '../../../node_modules/antd/lib/list/Item';
import Column from '../../../node_modules/antd/lib/table/Column';
const icon = require('../../icon/smile.png');

export default class Evapage extends Component {
    render() {
        const columns=[{
            // mid:'',
            // nick:'',
            // id: '',
            // name:'',
            // photos: '',
            description: '作业',
            author: 'mid',
            classInfo: '',
            commentator: '点评人',
            time: '提交时间',
        }];
        // const data = [
        //     'mid:',
        //     '作业',
        //     '点评人',
        //     '提交时间',
        //   ];
        const { state } = this.props;  
        
         const list = state.HomeworkReducer.dataSource; 
         console.log(list)      
         let newList;
        if(list.result){
            newList = list.result.map(t => {
                const homeworkList1 = list.entities.homeworkList[t]; 
                return  {
                    ...homeworkList1,
                }
            })
        }
        console.log(newList)
        return (
            <div>
                <div className="left">
                            <Carousel autoplay >
                                <div><Avatar shape="square" src={icon} /></div>
                                <div><Avatar shape="square" src={icon}/></div>
                                <div><h3>3</h3></div>
                            </Carousel>
                </div>
                 {/* <List
                //   header={<div>Header</div>}
                //   footer={<div>Footer</div>}
                  bordered
                  dataSource={columns}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                    /> */}
                <div className="cont" >
                {/* <Table  dataSource={newList}  columns={columns} />  */}
                </div>
                            {/* <Input placeholder="default size" width="50%" />
                            <Button>Default</Button> */}

                        
                

                <div className="right"> 

            </div>
            </div>



        )
    }
}
