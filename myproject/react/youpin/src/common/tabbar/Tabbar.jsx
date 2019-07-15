import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import './Tabbar.css';

class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectActive: 0,
            routes: [
                {
                    route: '/',
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
    changeActive (index) {
        this.setState({
            selectActive: index
        })
    }   
    render() { 
        return (  
            <div className="tabbar">
                {
                    this.state.routes.map((item, index) => {
                        return (
                            <div className="link" key={index + item} onClick={this.changeActive.bind(this, index)}>
                                <Link to={item.route}>
                                    <div className={this.state.selectActive === index ? `img-box img${index + 1} active${index + 1}` : `img-box img${index + 1}`}></div>
                                    {item.title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Tabbar;