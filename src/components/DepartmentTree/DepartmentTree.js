import React, { Component } from 'react';
import './DepartmentTree.css';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class DepartmentTree extends Component {
    // 得到所选菜单的id后 发action
    // BUG HERE > 由于Antd APi原因 暂不支持重复点击同一菜单
    onSelect = (selectedKeys, info) => {
        const {
            switchActions: {
                actionSelectDepartment
            }
        } = this.props;
        actionSelectDepartment &&
            actionSelectDepartment(parseInt(selectedKeys))
    }

    //递归输出树节点
    loop = data => data.map((item) => {
        if (!item) return null;
        if (item.childs && item.childs.length) {
            return <TreeNode
                key={item.id}
                title={item.name}
                users={item.users}
            >{this.loop(item.childs)}</TreeNode>;
        }
        return <TreeNode key={item.id} title={item.name} />
    });
    render() {
        const { departmentTree } = this.props;
        console.log('departmentTree', departmentTree);

        //拿到树的根节点的id作为默认展开项
        const defaultExpandedKeys = departmentTree
            ? departmentTree.id.toString()
            : null
        return (
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={[defaultExpandedKeys]}
                    onSelect={this.onSelect}
                >
                    {!departmentTree
                        ? null
                        : this.loop([departmentTree])
                    }

                </Tree>
            </div >
        )
    }
}