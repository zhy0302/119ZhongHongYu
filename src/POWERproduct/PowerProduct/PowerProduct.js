import React, { Component } from 'react';
import { Input, Tree, Button } from 'antd';
import './PowerProduct.css'
const Search = Input.Search;
const TreeNode = Tree.TreeNode;
export default class PowerProduct extends Component {
  state = {
    name: '',
    mid: '',
    array: [],
    deleteArr:[],
    isActive: false,
  }
  onSelect = (selectedKeys, info) => {
    const { state, todoActions } = this.props;
    const temp = state.Entities.aa[selectedKeys].user;
    console.log(temp)//[100101]
    todoActions.fetchonSelect(temp);
  }

  delete = () => {
    const { todoActions } = this.props;
    let deleteArr = this.state.deleteArr;
    todoActions.fetchDelete(this.state.deleteArr);
    this.setState({
        deleteArr:deleteArr.splice(),
    })
}

  showLeft = () => {
    const { state } = this.props;
    return (
      <div className="content_left">
        <div className="search">
          <Button className="btn">添加</Button>
          <Button onClick={this.deleteArr}>删除</Button>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <div>
            {
              state.PowerReducer.array.map(idx => {
                return (
                  <Button >
                    {state.Entities.user[idx].name}
                    mid:{state.Entities.user[idx].mid}
                  </Button>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
  selected = (idx) => {
    let arr = this.state.array.slice();
    arr.push(idx);
    this.setState({
      array: arr,
    })
  }
  showRight = () => {
    const { state } = this.props;
    return (
      <div className="content_right">
         <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
        <div>
          {
            state.PowerReducer.user.map(idx => {
              return (
                <Button onClick={this.selected.bind(this, idx)}>
                  {state.Entities.user[idx].name}
                  mid:{state.Entities.user[idx].mid}
                </Button>
              )

            })
          }
        </div>
      </div>
    )
  }
  showList = () => {
    const { state } = this.props;
    const powerId = state.PowerReducer.result;
    const aa = state.Entities.aa;
    return (
      <div className="content_list">
        <Tree
          showLine
          defaultExpandedKeys={['0-0-0']}
          onSelect={this.onSelect}>
          {
            this.showListTree(aa, powerId)
          }
        </Tree>
      </div>
    )
  }
  showListTree = (aa, id) => {
    const title = aa[id];
    return (
      <TreeNode title={title.name} key={title.id}>
        {
          title.child ? title.child.map(idx => {
            return this.showListTree(aa, idx)
          })
            : null
        }
      </TreeNode>
    )
  }
  submitUserName = () => {
    const { todoActions } = this.props;
    todoActions.fetchArray(this.state.array)
  }
  render() {
    return (
      <div className="all">
        <div >
          <div className="content_top">点评权限
          <div className="project">点评作业：拥有个人点评页，可以为学生作业进行点评</div>
            <div className="teacher">代课老师：拥有 审核点评老师点评内容权限，包括撤回点评，自行点评</div>
          </div>
          <div className="content">
            <div className="nav">点评作业 </div>
            {this.showLeft()}
            {this.showList()}
            {this.showRight()}
          </div>
        </div>
        <button className="ok" onClick={this.submitUserName}>确定</button>
      </div>
    );
  }
}