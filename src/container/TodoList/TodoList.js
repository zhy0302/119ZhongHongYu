import React, { Component } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import './TodoList1.css';
export default class TodoList extends Component {

    //...props 直接传给下一级
    renderListItem = () => {
        const { titlesOrder } = this.props;
        return titlesOrder.map((item, idx) => {
            return <TodoListItem
                idx={idx}
                key={idx}
                id={item.id}
                colorsOrder={item.colorsOrder}
                {...this.props}
                />
        })
    }
    render() {
        return (
            <ul className="list">
                {this.renderListItem()}
            </ul>
        )
    }
}
