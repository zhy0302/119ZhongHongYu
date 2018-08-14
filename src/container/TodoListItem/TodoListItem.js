import React, { Component } from 'react';
import { TAB_BAR } from '../../constants';
import './TodoListItem.css';
import './animate.css';
import ok from './img/ok.png';

export default class TodoListItem extends Component {


    onSetToFront = (spotid, itemidx) => {

        const { handleSetSpotfront, handleSetTopItem } = this.props;
        handleSetSpotfront && handleSetSpotfront(itemidx, spotid);
        handleSetTopItem && handleSetTopItem(itemidx);
    }
    // onSetTopItem = (e) => {
    //     const { handleSetTopItem } = this.props;
    //     const idx = e.target.getAttribute('itemidx');
    //     handleSetTopItem && handleSetTopItem(idx);

    // }
8
    renderSpot = () => {
        const { colorsOrder } = this.props;
        const animate = "animated bounceIn "
        return colorsOrder.map((item, id) => {
            if (id === 0) {
                return <span
                    key={id}
                    id={id}
                    className={animate + item}
                    itemidx={this.props.idx}
                    onClick={this.onSetToFront.bind(this, id, this.props.idx)}>
                    <img src={ok} alt="" />
                </span>

            } else {
                return <span
                    key={id}
                    id={id}
                    className={animate + item}
                    itemidx={this.props.idx}
                    onClick={this.onSetToFront.bind(this, id, this.props.idx)}></span>
            }
        })
    }

    render() {
        return (
            <li className="list-item">

                <span className="list-item-title">{TAB_BAR[this.props.id]}</span>
                <ul className="list-item-colors-list">
                    <li className="color-item">
                        {this.renderSpot()}
                    </li>
                </ul>

            </li>
        )
    }
}
