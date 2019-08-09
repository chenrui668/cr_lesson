import React, { Component } from 'react';
import { BrowserRouter as Router,Route, NavLink, Redirect } from 'react-router-dom';
import './Tabbar.css';

class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            routes: [
                {
                    route: '/main',
                    title: '首页'
                },
                {
                    route: '/menu',
                    title: '分类'
                },
                {
                    route: '/taste',
                    title: '品味'
                },
                {
                    route: '/shopCart',
                    title: '购物车'
                },
                {
                    route: '/user',
                    title: '我的'
                }
            ]
        }
    }  
    render() { 
        return (  
            <div className="tabbar">
                {
                    this.state.routes.map((item, index) => {
                        return (
                            <div className="tabbar-link" key={index + item}>
                                {
                                    index === 3 && this.props.totalCount > 0 ?
                                    <div className="tabbar-total-count">
                                        {
                                            this.props.totalCount > 9 ? '9+' : this.props.totalCount
                                        }
                                    </div> : 
                                    ''
                                }
                                <NavLink to={item.route} activeClassName={`active${index + 1}`} className={`img${index + 1}`}>
                                </NavLink>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Tabbar;