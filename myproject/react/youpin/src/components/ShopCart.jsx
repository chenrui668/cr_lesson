import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Remind from '../common/remind/Remind';
import './ShopCart.css'

class ShopCart extends Component {
    state = {
        baseHeight: 0,
        totalPrice: 0,
        totalCount: 0,
        pageStatus: true,
        deleteCount: 0,
        showRemind1: false,
        showRemind2: false
    }
    componentDidMount() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.setState({
            baseHeight
        })
        this.calTotalPrice();
        this.calTotalCount();
    }
    changeChoose(index) {
        new Promise((resolve, reject) => {
            this.props.changeChooseStatus(index);
            resolve();
        }).then(() => {
            this.calTotalPrice();
            this.calTotalCount();
        })
    }
    changeTotalChoose() {
        new Promise((resolve, reject) => {
            if (this.props.shopCart.totalChoose) {
                this.props.changeTotalChooseStatus(false);
            } else {
                this.props.changeTotalChooseStatus(true);
            }
            resolve();
        }).then(() => {
            this.calTotalPrice();
            this.calTotalCount();
        })
    }
    calTotalPrice() {
        let totalPrice = 0;
        for (let item of this.props.shopCart.list) {
            if (item.isChoose) {
                totalPrice += item.price * item.count;
            }
        }
        totalPrice = totalPrice.toFixed(2);
        this.setState({
            totalPrice
        })
    }
    calTotalCount() {
        let totalCount = 0;
        for (let item of this.props.shopCart.list) {
            if (item.isChoose) {
                totalCount += item.count;
            }
        }
        this.setState({
            totalCount
        })
    }
    addCount(index) {
        new Promise((resolve, reject) => {
            this.props.addShopCount(index);
            resolve();
        }).then(() => {
            this.calTotalPrice();
            this.calTotalCount();
            this.calDeleteCount();
        })
    }
    reduceCount(index) {
        new Promise((resolve, reject) => {
            this.props.reduceShopCount(index);
            resolve();
        }).then(() => {
            this.calTotalPrice();
            this.calTotalCount();
            this.calDeleteCount();
        })
    }
    changePageStatus() {
        if (this.state.pageStatus) {
            this.calDeleteCount();
            this.setState({
                pageStatus: false
            })
        } else {
            this.props.changeTotalDeleteStatus(false);
            this.setState({
                pageStatus: true
            })
        }
    }
    calDeleteCount() {
        let deleteCount = 0;
        for (let item of this.props.shopCart.list) {
            if (item.deleteFlag) {
                deleteCount += item.count;
            }
        }
        this.setState({
            deleteCount
        })
    }
    changeDeleteFlag(index) {
        new Promise((resolve, reject) => {
            this.props.changeDeleteFlag(index);
            resolve();
        }).then(() => {
            this.calDeleteCount();
        })
    }
    changeTotalDelete() {
        new Promise((resolve, reject) => {
            if (this.props.shopCart.totalDelete) {
                this.props.changeTotalDeleteStatus(false);
            } else {
                this.props.changeTotalDeleteStatus(true);
            }
            resolve();
        }).then(() => {
            this.calDeleteCount();
        })
    }
    deleteEvent() {
        let a = this.props.shopCart.list.some((item, index) => {
            return item.deleteFlag === true;
        })
        if (a) {
            new Promise((resolve, reject) => {
                this.props.deleteShopCartItem();
                resolve();
            }).then(() => {
                this.props.changeTotalDeleteStatus(false);
                this.calDeleteCount();
                this.calTotalCount();
                this.calTotalPrice();
            })
        } else {
            this.setState({
                showRemind1: true
            })
            setTimeout(() => {
                this.setState({
                    showRemind1: false
                })
            }, 1500)
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.shopCart.list.length > 0 ?
                        <div className="cart-cantainer" style={{ height: `${this.state.baseHeight}px` }}>
                            <div className="cart-content" style={{ minHeight: `${this.state.baseHeight}px` }}>
                                <div className="cart-header">
                                    <Link to={'/Menu'}>
                                        <div className="cart-header_backImg">
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_titlebar_back_white.png" alt="" />
                                        </div>
                                    </Link>
                                    <div className="cart-header_title">
                                        <span>购物车</span>
                                    </div>
                                    <div className="cart-header_btn" onClick={this.changePageStatus.bind(this)}>
                                        <span>{this.state.pageStatus ? '编辑' : '完成'}</span>
                                    </div>
                                </div>
                                <div className="cart-list">
                                    {
                                        this.props.shopCart.list.map((item, index) => {
                                            return (
                                                <div className="cart-list_item" key={index + item}>
                                                    {
                                                        this.state.pageStatus ?
                                                            <div className="cart-item_chooseBtn">
                                                                {
                                                                    item.isChoose ?
                                                                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png" onClick={this.changeChoose.bind(this, index)} alt="" /> :
                                                                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" onClick={this.changeChoose.bind(this, index)} alt="" />
                                                                }
                                                            </div> :
                                                            <div className="cart-item_chooseBtn">
                                                                {
                                                                    item.deleteFlag ?
                                                                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png" onClick={this.changeDeleteFlag.bind(this, index)} alt="" /> :
                                                                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" onClick={this.changeDeleteFlag.bind(this, index)} alt="" />
                                                                }
                                                            </div>
                                                    }
                                                    <div className="cart-item_goodsImg">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="cart-item_info">
                                                        <div className="item-info_name">
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <div className="item-info_price">
                                                            ￥<span>{item.price}</span>
                                                        </div>
                                                        <div className="item-info_count">
                                                            {
                                                                item.count > 1 ?
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_icon_minus_nor.png" onClick={this.reduceCount.bind(this, index)} alt="" /> :
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_icon_minus_disable.png" alt="" />
                                                            }
                                                            <div className="item-count_num">
                                                                <span>{item.count}</span>
                                                            </div>
                                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_icon_plus_nor.png" onClick={this.addCount.bind(this, index)} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {
                                this.state.pageStatus ?
                                    <div className="cart-footer">
                                        <div className="cart-footer_chooseBtn">
                                            {
                                                this.props.shopCart.totalChoose ?
                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png" onClick={this.changeTotalChoose.bind(this)} alt="" /> :
                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" onClick={this.changeTotalChoose.bind(this)} alt="" />
                                            }
                                            <span>全选</span>
                                        </div>
                                        <div className="cart-footer_right">
                                            <div className="cart-footer_price">
                                                合计: <span>￥{this.state.totalPrice}</span>
                                            </div>
                                            <div className="cart-footer_payBtn">
                                                结算{this.state.totalCount > 0 ? `(${this.state.totalCount})` : ''}
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="cart-footer">
                                        <div className="cart-footer_chooseBtn">
                                            {
                                                this.props.shopCart.totalDelete ?
                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png" onClick={this.changeTotalDelete.bind(this)} alt="" /> :
                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" onClick={this.changeTotalDelete.bind(this)} alt="" />
                                            }
                                            <span>全选</span>
                                        </div>
                                        <div className="cart-footer_right">
                                            <div className="cart-footer_payBtn" onClick={this.deleteEvent.bind(this)}>
                                                删除{this.state.deleteCount > 0 ? `(${this.state.deleteCount})` : ''}
                                            </div>
                                        </div>
                                    </div>
                            }
                            <Remind
                                status={this.state.showRemind1}
                                text='请选择需要删除的商品'
                            />
                        </div> :
                        <div className="cart-cantainer" style={{ height: `${this.state.baseHeight}px` }}>
                            <div className="cart-content" style={{ minHeight: `${this.state.baseHeight}px` }}>
                                <div className="cart-header">
                                    <Link to='/Menu'>
                                        <div className="cart-header_backImg">
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_titlebar_back_white.png" alt="" />
                                        </div>
                                    </Link>
                                    <div className="cart-header_title">
                                        <span>购物车</span>
                                    </div>
                                    <div className="cart-header_btn" onClick={this.changePageStatus.bind(this)}>
                                    </div>
                                </div>
                                <div className="cart-empty_bg">
                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/no_result_cart.png" alt=""/>
                                    <span>购物车还没有商品哦~</span>
                                    <Link to='/Menu'>
                                        <span>去逛逛</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                }
            </div>

        );
    }
}

export default ShopCart;