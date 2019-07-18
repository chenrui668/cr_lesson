import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './MenuGoods.css';


class MenuGoods extends Component {
    state = {  
        baseHeight: 0,
        menuIndex: 0,
        goodsIndex: 0,
        titleList: [],
        goodsList: [],
        showContent: false
    }
    componentDidMount() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let a = this.props.match.params.id.split('-');
        this.setState({
            baseHeight,
            menuIndex: parseInt(a[0]),
            goodsIndex: parseInt(a[1])
        })
        let titleUrl = `https://www.easy-mock.com/mock/5d2c63b8a8d6b5597459c82f/youpin/detail-list${this.state.menuIndex}`;
        let goodsUrl = `https://www.easy-mock.com/mock/5d2c63b8a8d6b5597459c82f/youpin/goods-list${this.state.menuIndex}`
        axios.get(titleUrl).then((res) => {
            let list = res.data.data.detail_list.slice(1);
            this.setState({
                titleList: list
            })
        })
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
            <div>
            {   
                this.state.showContent ? 
                <div className="goods-page" style={{height: `${this.state.baseHeight}px`}}>
                    <div className="goods-head">
                        <div className="goods-header">
                            <span>有品推荐</span>
                            <Link to={`/menu/detail/${this.state.menuIndex}`}>
                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" alt=""/>
                            </Link>
                        </div>
                        <div className="goods-menu">
                            {
                                this.state.titleList.map((item, index) => {
                                    return (
                                        <div key={index + item} onClick={this.changeIndex.bind(this, index)} className={this.state.goodsIndex === index ? "goods-menu_text goods-active" : "goods-menu_text"}>
                                            <span>{item.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="goods-content">
                    {
                        list.map((item, index) => {
                            return (
                                <div className="goods-box" key={index + item}>
                                    <div className="goods-item">
                                        <img src={item.img} alt=""/>
                                        {
                                            item.colorNum === 0 ? '' : <span className="goods-item_icon1">{item.colorNum}色可选</span>
                                        }
                                        {
                                            item.isLowPrice ? <span className="goods-item_icon2">特价</span> : ''
                                        }
                                        <div className="goods-item_name">
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="goods-item_summary">
                                            <span>{item.summary}</span>
                                        </div>
                                        <div className="goods-item_price">
                                            ￥<span>{item.price}</span>
                                        </div>
                                    </div>
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
                </div> : ''
            }
            </div>
        );
    }
}
 
export default MenuGoods;