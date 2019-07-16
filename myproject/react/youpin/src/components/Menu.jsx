import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Detail from './Menu/Detail';
import './Menu.css'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            menuLeftItem: [
                "有品推荐",
                "家用电器",
                "智能家庭",
                "家具家装",
                "居家餐厨",
                "电视影音",
                "运动户外",
                "日用文创",
                "服装配饰",
                "鞋靴箱包",
                "美妆个护",
                "手机电脑",
                "数码周边",
                "出行车品",
                "美食酒饮",
                "健康保健",
                "母婴亲子",
                "宠物生活",
                "品牌"
            ],
            contentHeight: 0
        }
    }
    componentDidMount() {
        let baseWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let contentHeight = baseHeight - ((2.25 + 2.3) * (baseWidth / 375 * 20));
        this.setState({
            contentHeight
        })
    }
    render() { 
        return (  
            <div>
                <div className="header-menu">
                    <div className="search">
                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_search_button.png" alt=""/>
                        <span>搜一搜</span>
                    </div>
                </div>
                <div className="content">
                    <div className="content-box" style={{height: `${this.state.contentHeight}px`}}>
                        <div className="menu-left">
                            {
                                this.state.menuLeftItem.map((item, index) => {
                                    return (
                                        <NavLink key = {index + item} to={`${this.props.match.url}/detail/${index}`} className="menu-left_item" activeClassName="selected">
                                            <div className="item-text">
                                                {item}
                                            </div>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="content-box" style={{height: `${this.state.contentHeight}px`}}>
                        <Route path={`${this.props.match.path}/detail/:id`} component={Detail}></Route>
                        <Redirect from={this.props.match.path} to={`${this.props.match.path}/detail/0`}></Redirect>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;
