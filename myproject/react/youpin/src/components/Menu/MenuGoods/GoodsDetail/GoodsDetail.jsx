import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './GoodsDetail.css';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class GoodsDetail extends Component {
    state = {
        baseHeight: 0,
        swiperImg: [
            'https://img.youpin.mi-img.com/goods/fshop_9cf3c35d5097aa8858198e56e54b1161.jpeg@base@tag=imgScale&F=webp',
            'https://img.youpin.mi-img.com/goods/fshop_cdcc7ec5ed82485c78f33f6897a76673.jpeg@base@tag=imgScale&F=webp',
            'https://img.youpin.mi-img.com/goods/fshop_daf3312f29fa82ec23061dfeb19fa72b.jpeg@base@tag=imgScale&F=webp',
            'https://img.youpin.mi-img.com/goods/fshop_560c05e3b379001776e058ef5a88891f.jpeg@base@tag=imgScale&F=webp',
            'https://img.youpin.mi-img.com/goods/fshop_c2c429f2776e9e0b769903dd8fafb23c.jpeg@base@tag=imgScale&F=webp',
            'https://img.youpin.mi-img.com/goods/fshop_dfa25da101310299e7b1736c2f38ea89.jpeg@base@tag=imgScale&F=webp'
        ],
        titleList: [
            '商品',
            '评价',
            '详情',
            '推荐'
        ],
        titleIndex: 0,
        swiperIndex: 0,
        preUrl: ''
    }
    componentDidMount() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let url = this.props.match.url;
        let a = url.split('/');
        let a2 = a.slice(0, 4);
        let a3 = a2.join('/');
        let b = a[a.length - 1].split('-')
        let preUrl = `${a3}/goods/${b[0]}`
        this.setState({
            baseHeight,
            preUrl
        })
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            speed: 300,
            delay: 2000,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                  return '<span class="' + currentClass + '"></span>' +
                         '/' +
                         '<span class="' + totalClass + '"></span>';
                },
            },
            autoplay: {
                disableOnInteraction: false
            }
        });
    }
    changeIndex(index) {
        this.setState({
            titleIndex: index
        })
    }
    render() {
        return (
            <div>
                <div className="goods-detail" style={{ height: `${this.state.baseHeight}px` }}>
                    <div className="goods-detail_header" style={{opacity: '0'}}>
                        <div className="detail-header_title">
                            {
                                this.state.titleList.map((item, index) => {
                                    return (
                                        <div className={this.state.titleIndex === index ? 'title-item_box item-active' : 'title-item_box'} key={index + item} onClick={this.changeIndex.bind(this, index)}>
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            <div className="scroll-line_box" style={{transform: `translateX(${this.state.titleIndex * 100}%)`, transition: 'transform 0.2s'}}>
                                <div className="scroll-line"></div>
                            </div>
                        </div>
                    </div>
                    <Link to={this.state.preUrl}>
                        <div className="detail-header_icon1">
                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_titlebar_detailBackNormal.png" alt="" />
                        </div>
                        {/* <div className="detail-header_icon1">
                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" alt="" />
                        </div> */}
                    </Link>
                    <div className="detail-header_icon2">
                        <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_nav_icon_more_transparent.png" alt="" />
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiperImg.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index + item}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination" 
                            style={{
                                color: '#fff', 
                                padding: '0 0.3rem', 
                                fontSize: '0.5rem', 
                                height: '1rem', 
                                width: 'auto', 
                                lineHeight: '1rem', 
                                backgroundColor: 'rgba(102, 102, 102, 0.4)',
                                borderRadius: '1rem',
                                bottom: '1rem',
                                left: '16.7rem'
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsDetail;