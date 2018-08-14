import React, { Component } from 'react';
import {Input ,Tree,Button } from 'antd';
import './PowerProduct.css'
const Search = Input.Search;
const TreeNode = Tree.TreeNode;
export default class PowerProduct extends Component { 
  state = {
    name:'',
    mid:'',
    isActive:false,
}
    onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }  
  showContent=()=>{
    return(
       <div >
        <div className="content_top">点评权限
          <div className="project">点评作业：拥有个人点评页，可以为学生作业进行点评</div>
          <div className="teacher">代课老师：拥有 审核点评老师点评内容权限，包括撤回点评，自行点评</div>
        </div>
        <div className="content">
        <div className="nav">点评作业 </div>
        <div className="content_left">
        <div className="serch">
        <Button className="btn">添加</Button>
        <Button  className="btn">删除</Button>
        <input type="text"></input>
        <Button  className="btn">搜索</Button>
        </div>    
        <div className="content_left_list">
        {this.show()}
          </div>
        </div>
        <div className="content_right"></div>
        <input type="text"></input>
        <Button  className="btn" onClick={this.showList}>搜索</Button>
        {this.showList()}
        {this.showButton()} 
        </div>
        </div>
    );
  }
  show=()=>{
    if (!this.state.isActive) {
    console.log(!this.state.isActive)
    return(
      <div>
       <Button className="btn2" >白帆 mid：123456</Button>
        <Button className="btn2">王鹏 mid：654321</Button>
          <Button className="btn2">白云 mid：888888</Button>
      </div>
    );
  }else{
    return null;
  }
  }
  showButton=()=>{
    const { state,name } = this.props;
    if (!this.state.isActive) {
      return(
        <div className="list">
          <Button className="btn1" onClick={this.show}>白帆 mid：123456</Button>
            <Button className="btn1">王鹏 mid：654321</Button>
            <Button className="btn1">白云 mid：888888</Button>
            <Button className="btn1">白帆 mid：123456</Button>
            <Button className="btn1">王鹏 mid：654321</Button>
            <Button className="btn1">白云 mid：888888</Button>
            <Button className="btn1">白帆 mid：123456</Button>
            <Button className="btn1">王鹏 mid：654321</Button> 
            </div>
      )
    }else{
      return null;
    }
  }  
  showList=()=>{
    if (!this.state.isActive) {
    return(
      <div className="content_list">  
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}>
        <TreeNode title="所有部门" key="0-0">
          <TreeNode title="爱奇迪集团" key="0-0-0">
            <TreeNode title="广州分会部" key="0-0-0-0" >
              <TreeNode title="总经办" key="0-0-0-1" />
              <TreeNode title="财务部" key="0-0-0-1" />
              <TreeNode title="工程部" key="0-0-0-1" />
              <TreeNode title="产品研发部" key="0-0-0-1" >
                  <TreeNode title="开发一组" key="0-0-0-2" onClick={this.showButton}/>
                  <TreeNode title="开发二组" key="0-0-0-2" />
                  <TreeNode title="测试组" key="0-0-0-2" />
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
      </div> 
    ) 
  }else{
    return null;
  }
  }

  render() {
    return (
    <div className="all">
     {this.showContent()} 
     <button className="ok" >确定</button>
      </div>
    );
  }
}