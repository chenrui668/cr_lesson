import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import GoodsItem from '../../../common/goodsItem/GoodsItem';
import './MenuGoods.css';


class MenuGoods extends Component {
    state = {
        baseHeight: 0,
        menuIndex: 0,
        goodsIndex: 0,
        goodsList: [],
        showContent: false
    }
    componentDidMount() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let b = this.props.match.url.split('/');
        let menuIndex = b.slice(-3, -2);
        let goodsIndex = b.slice(-1);
        this.setState({
            baseHeight,
            menuIndex: parseInt(menuIndex),
            goodsIndex: parseInt(goodsIndex)
        })
        let goodsUrl = `https://www.easy-mock.com/mock/5d2c63b8a8d6b5597459c82f/youpin/goods-list${menuIndex}`;
        axios.get(goodsUrl).then((res) => {
            this.setState({
                goodsList: res.data.data.list,
                showContent: true
            })
        })
    }
    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }
    changeIndex(index) {
        this.setState({
            goodsIndex: index
        })
    }
    render() {
        let list = this.state.goodsList[this.state.goodsIndex];
        return (
            <div className="goods-page" style={{ height: `${this.state.baseHeight}px` }}>
                <div className="goods-head">
                    <div className="goods-header">
                        <span>有品推荐</span>
                        <Link to={`/menu/detail/${this.state.menuIndex}`}>
                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" alt="" />
                        </Link>
                    </div>
                </div>
                {
                    this.state.showContent ?
                        <div>
                            <div className="goods-menu">
                                {
                                    this.props.list.map((item, index) => {
                                        return (
                                            <div key={index + item} onClick={this.changeIndex.bind(this, index)} className={this.state.goodsIndex === index ? "goods-menu_text goods-active" : "goods-menu_text"}>
                                                <span>{item.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="goods-content">
                                {
                                    list.map((item, index) => {
                                        return (
                                            <div className="goods-box" key={index + item}>
                                                <Link to={`/menu/detail/${this.state.menuIndex}/goodsdetail/${this.state.goodsIndex}-${index}`}>
                                                    <GoodsItem 
                                                        img = {item.img}
                                                        colorNum = {item.colorNum}
                                                        isLowPrice = {item.isLowPrice}
                                                        name = {item.name}
                                                        summary = {item.summary}
                                                        price = {item.price}
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="menu-foot">
                                <div className="line"></div>
                                <span>底线在此，不能更低了</span>
                                <div className="line"></div>
                            </div>
                        </div> :
                        <div className="bg-content">
                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/loading_v2.png" alt="" />
                        </div>
                }
            </div>
        );
    }
}

export default MenuGoods;