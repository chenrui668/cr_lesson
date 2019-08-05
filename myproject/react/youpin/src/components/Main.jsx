import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './Main.css';
class Main extends Component {
    state = {
        menu1List: [
            {
                title: '每日新品',
                url: 'https://img.youpin.mi-img.com/800_pic/b5559df7fdbe9164f74d4445d0af8c5a.png'
            },
            {
                title: '小米众筹',
                url: 'https://img.youpin.mi-img.com/800_pic/907e4aa47ea999a26e11b28d64085b09.png'
            },
            {
                title: '限时抢购',
                url: 'https://img.youpin.mi-img.com/800_pic/f78051c8129c0c525aeb0869b81f1486.png'
            },
            {
                title: '热销榜单',
                url: 'https://img.youpin.mi-img.com/800_pic/031f37cb13d69d1f27041a5105a3e1c7.png'
            },
            {
                title: '随便逛逛',
                url: 'https://img.youpin.mi-img.com/800_pic/71de23f40af4c2c1d4c3744ad44dddda.png'
            }
        ],
        containerHeight: 0,
        showRemind: false
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                disableOnInteraction: false
            }
        });
        let baseWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let containerHeight = baseHeight - ((1.9 + 2.3) * (baseWidth / 375 * 20));
        this.setState({
            containerHeight
        })
    }
    render() {
        return (
            <div>
                <div className="menu-container" style={{ height: `${this.state.containerHeight}px` }}>
                    <div className="header">
                        <div className="header-left">
                            <img src="https://m.youpin.mi.com/youpin/static/m/res/images/navi_title_v4.png" alt="" />
                        </div>
                        <div className="header-center">
                            <img src="https://cbu01.alicdn.com/cms/upload/2017/294/133/3331492_2093810242.png" alt="" />
                            <p>搜一搜</p>
                        </div>
                        <div className="header-right">
                            <img src="https://m.youpin.mi.com/youpin/static/m/res/images/std_titlebar_home_message.png" alt="" />
                        </div>
                    </div>
                    <div className="swiper-container" style={{ height: '7.8rem' }}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/c0f519832bc1478c740a0185dc3ec2f0.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/3dcb9c9836211022bb485d687164224b.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/95b993e4b0acacd43167f05236150377.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/4d7619ddd1aa40a65c75ff1626907109.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/160ec280e7d0b6d8d8f7f383a074413f.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://img.youpin.mi-img.com/youpinoper/9609912a34b6239c298117f645f484b9.jpg?id=&w=1080&h=450" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination" style={{width: '5rem', left: '74%', bottom: '0.9rem'}}></div>
                    </div>
                    <div className="activity-1">
                        <img src="https://img.youpin.mi-img.com/jianyu/a06bba6b5622489bc534bf19ec794c12.jpeg?w=1080&h=210" alt="" />
                    </div>
                    <div className="menu1-box">
                        {
                            this.state.menu1List.map((item, index) => {
                                return (
                                    <div className="menu1-item" key={index + item}>
                                        <img src={item.url} alt="" />
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="menu2-box">
                        <div className="menu2-content">
                            <div className="menu2-top">
                                <div className="top-left">
                                    <div className="menu2-item">
                                        <span className="title1">最高直降700元</span>
                                        <span className="title2">探索无限穿搭可能！</span>
                                        <img src="https://img.youpin.mi-img.com/youpinoper/4cb7b27bd27d0845be12c905f48a12b8.png?id=&w=420&h=280" alt="" />
                                    </div>
                                </div>
                                <div className="top-right">
                                    <div className="menu2-item">
                                        <span className="title1">双重防蓝光眼镜</span>
                                        <span className="title2">首发直降20元起</span>
                                        <img src="https://img.youpin.mi-img.com/youpinoper/b4c5249b2b07a8f4d0f36c12ca07276b.png?id=&w=420&h=280" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="menu2-foot">
                                <div className="foot-left">
                                    <div className="menu2-item">
                                        <span className="title1">精致养宠 好物推荐</span>
                                        <span className="title2">直降最高减200元</span>
                                        <img src="https://img.youpin.mi-img.com/youpinoper/ecf473239ac194098b9f670b7365ffce.png?id=&w=420&h=280" alt="" />
                                    </div>
                                </div>
                                <div className="foot-right">
                                    <div className="menu2-item">
                                        <span className="title1">炊具省钱攻略</span>
                                        <span className="title2">搭配加购更划算</span>
                                        <img src="https://img.youpin.mi-img.com/youpinoper/24c770a9fefbb6edfd68353794460875.png?id=&w=420&h=280" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="activity-2">
                        <img src="https://img.youpin.mi-img.com/yingkebao/d4b0aa8d88ab97bb8b20045841d7df15.png?w=1080&h=210" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;