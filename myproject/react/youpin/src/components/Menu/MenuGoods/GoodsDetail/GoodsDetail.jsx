import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import BScroll from 'better-scroll';
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
        preUrl: '',
        titleOpacity: 0,
        changeIcon: false
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
        this.scroll = new BScroll('.goods-detail', {
            click: true,
            scrollY: true,
            bounce: false,
            eventPassthrough: 'horizontal'
        })
        this.scroll.on('scroll', () => {
            console.log(this.scroll.y);
        })
    }
    changeIndex(index) {
        this.setState({
            titleIndex: index
        })
    }
    scrollEvent() {
        let changeHeight = this.refs.swiperBox.offsetHeight - this.refs.titleBox.offsetHeight;
        if (- this.scroll.y < changeHeight) {
            var titleOpacity = Math.round(parseFloat(- this.scroll.y / changeHeight) * 100) / 100;
            var changeIcon = false;
        } else {
            titleOpacity = 1;
            changeIcon = true;
        }
        this.setState({
            titleOpacity,
            changeIcon
        })
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <div className="goods-detail_header" style={{ opacity: `${this.state.titleOpacity}` }} ref='titleBox'>
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
                        <div className="scroll-line_box" style={{ transform: `translateX(${this.state.titleIndex * 100}%)`, transition: 'transform 0.2s' }}>
                            <div className="scroll-line"></div>
                        </div>
                    </div>
                </div>
                <div className="detail-header_icon1">
                    <Link to={this.state.preUrl}>
                        {
                            this.state.changeIcon ? <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" alt="" />
                            : <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_titlebar_detailBackNormal.png" alt="" />
                        }
                    </Link>
                </div>
                <div className="detail-header_icon2">
                    {
                        this.state.changeIcon ? <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_nav_icon_more.png"/>
                        : <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_nav_icon_more_transparent.png" alt="" />
                    }
                    </div>
                <div className="goods-detail" style={{ height: `${this.state.baseHeight}px` }} onTouchMove={this.scrollEvent.bind(this)}>
                    <div style={{ width: '100%' }}>
                        <div className="swiper-container" ref='swiperBox' style={{height: '18.75rem'}}>
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
                                    bottom: '0.7rem',
                                    left: '16.7rem'
                                }}
                            ></div>
                        </div>
                        <div className="goods-info">
                            <div className="goods-info_price">
                                ￥<span>299</span>
                            </div>
                            <div className="goods-info_name">
                                <span>小米AI音箱</span>
                            </div>
                            <div className="goods-info_summary">
                                <span>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</span>
                            </div>
                            <div className="youpin-img">
                                <img src="https://img.youpin.mi-img.com/editor1/ce497b9d0341ac785d77e343dddab7e7.png?w=1080&h=111" alt=""/>
                            </div>
                        </div>
                        <div className="goods-choose">
                            <div className="goods-choose_box">
                                <span className="goods-choose_title">已选</span>
                                <div className="goods-choose_text goods-choose_text1">请选择型号</div>
                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/>
                            </div>
                            <div className="goods-choose_box">
                                <span className="goods-choose_title">送至</span>
                                <div className="goods-choose_text goods-choose_text2">北京市 海淀区</div>
                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/>
                            </div>
                            <div className="goods-choose_box">
                                <span className="goods-choose_title">服务</span>
                                <div className="goods-choose_text goods-choose_text3">
                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_icon_service_v2.png" alt=""/>
                                    <span>满99包邮</span>
                                </div>
                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/>
                            </div>
                        </div>
                        <div className="goods-comments">
                            <div className="goods-comments_head">
                                <div className="goods-comments_num">
                                    <span>用户评价(33333)</span>
                                </div>
                                <div className="goods-comments_sat">
                                    <span>98%满意</span>
                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/>
                                </div>
                            </div>
                            <div className="goods-comments_label">
                                <span>有图(1969)</span>
                                <span>有图(1969)</span>
                                <span>有图(1969)</span>
                                <span>有图(1969)</span>
                            </div>
                            <div className="goods-comments_content">
                                <div className="goods-comments_list">
                                    <div className="goods-comments_item">
                                        <div className="comments-user">
                                            <div className="comments-user_img">
                                                <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01f5vOrbGyf/pAJV33EhQzv7l8.jpg" alt=""/>
                                            </div>
                                            <div className="comments-user_name">
                                                <span>武*帝</span>
                                            </div>
                                            <div className="comments-user_rank">
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="comments-text">
                                            东西价廉物美，智能化控制，手机App和小爱同学都可以，适合懒汉。自从朋友推荐之后，现在有点中毒了，家里小米的东东越来越多
                                        </div>
                                    </div>
                                    <div className="goods-comments_item">
                                        <div className="comments-user">
                                            <div className="comments-user_img">
                                                <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01f5vOrbGyf/pAJV33EhQzv7l8.jpg" alt=""/>
                                            </div>
                                            <div className="comments-user_name">
                                                <span>武*帝</span>
                                            </div>
                                            <div className="comments-user_rank">
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="comments-text">
                                            东西价廉物美，智能化控制，手机App和小爱同学都可以，适合懒汉。自从朋友推荐之后，现在有点中毒了，家里小米的东东越来越多
                                        </div>
                                    </div>
                                    <div className="goods-comments_item">
                                        <div className="comments-user">
                                            <div className="comments-user_img">
                                                <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01f5vOrbGyf/pAJV33EhQzv7l8.jpg" alt=""/>
                                            </div>
                                            <div className="comments-user_name">
                                                <span>武*帝</span>
                                            </div>
                                            <div className="comments-user_rank">
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="comments-text">
                                            东西价廉物美，智能化控制，手机App和小爱同学都可以，适合懒汉。自从朋友推荐之后，现在有点中毒了，家里小米的东东越来越多
                                        </div>
                                    </div>
                                    <div className="goods-comments_item">
                                        <div className="comments-user">
                                            <div className="comments-user_img">
                                                <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01f5vOrbGyf/pAJV33EhQzv7l8.jpg" alt=""/>
                                            </div>
                                            <div className="comments-user_name">
                                                <span>武*帝</span>
                                            </div>
                                            <div className="comments-user_rank">
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="comments-text">
                                            东西价廉物美，智能化控制，手机App和小爱同学都可以，适合懒汉。自从朋友推荐之后，现在有点中毒了，家里小米的东东越来越多
                                        </div>
                                    </div>
                                    <div className="goods-comments_item">
                                        <div className="comments-user">
                                            <div className="comments-user_img">
                                                <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01f5vOrbGyf/pAJV33EhQzv7l8.jpg" alt=""/>
                                            </div>
                                            <div className="comments-user_name">
                                                <span>武*帝</span>
                                            </div>
                                            <div className="comments-user_rank">
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="comments-text">
                                            东西价廉物美，智能化控制，手机App和小爱同学都可以，适合懒汉。自从朋友推荐之后，现在有点中毒了，家里小米的东东越来越多
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '2000px' }}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsDetail;