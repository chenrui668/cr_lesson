import React, { Component } from 'react';
import './GoodsItem.css';

class GoodsItem extends Component {
    state = {}
    render() {
        const { img, colorNum, isLowPrice, name, summary, price } = this.props;
        return (
            <div className="goods-item">
                <div className="goods-item_img">
                    <img src={img} alt="" />
                    {
                        colorNum <= 1 ? '' : <span className="goods-item_icon1">{colorNum}色可选</span>
                    }
                    {
                        isLowPrice ? <span className="goods-item_icon2">特价</span> : ''
                    }
                </div>
                <div className="goods-item_name">
                    <span>{name}</span>
                </div>
                <div className="goods-item_summary">
                    <span>{summary}</span>
                </div>
                <div className="goods-item_price">
                    ￥<span>{price}</span>
                </div>
            </div>
        );
    }
}

export default GoodsItem;