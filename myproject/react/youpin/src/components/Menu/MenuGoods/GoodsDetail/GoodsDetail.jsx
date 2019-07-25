import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        preUrl: '',
        titleOpacity: 0,
        changeIcon: false,
        detailsImg: [   
            'https://shop.io.mi-img.com/app/shop/img?id=shop_3ab2f9cfb47e955d53a78e50a7636e34.jpeg&w=720&h=1192',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_39f31c9ecbcfd97a7aa610eeaad30292.jpeg&w=720&h=551',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_244704e76087962dbf68bc391d300441.jpeg&w=720&h=763',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_7e11644042c617669cb7717fc82a276f.jpeg&w=720&h=549',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_8e740f087f2ab43e14f3807a13883b8d.jpeg&w=720&h=767',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_730e4d8c6e2bd42af75295253a63e092.jpeg&w=720&h=552',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_d6d591be8bfb25f2c1bc7676c787f2ba.jpeg&w=720&h=756',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_045a0b75a478b0157d2ac4b82cc166a9.jpeg&w=720&h=555',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_b7f7cb6756c718569f601a0d77070be0.jpeg&w=720&h=763',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_adc6ac9dee8089f3ef422193cbbc46dc.jpeg&w=720&h=1587',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_fa261f9bf6d67b2f5d4bf946793fe87a.jpeg&w=720&h=423',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_0a39c0d0e3cea978cede48de5e0e9ee1.jpeg&w=720&h=554',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_7e125e5cc37bcb2e8ac0034244d97656.jpeg&w=716&h=679',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_88b44e395fb1b74a0ab07452e4ed56de.jpeg&w=720&h=551',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_329084d60823460fadc2722896b50cb6.jpeg&w=720&h=1219',
            'https://shop.io.mi-img.com/app/shop/img?id=shop_e452c83ff8bdcbc5f053ac10aafab823.jpeg&w=720&h=769' 
        ],
        scrollHeight: []
    }
    componentDidMount() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let url = this.props.match.url;
        let a = url.split('/');
        let a2 = a.slice(0, 4);
        let a3 = a2.join('/');
        let b = a[a.length - 1].split('-');
        let preUrl = `${a3}/goods/${b[0]}`;
        let scrollHeight = [0];
        for ( let i = 1; i < 4; i ++) {
            let height = this.refs[`scrollBox${i}`].offsetTop - this.refs.titleBox.offsetHeight;
            scrollHeight.push(height);
        }
        this.setState({
            baseHeight,
            preUrl,
            scrollHeight
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
            probeType: 3,
            scrollY: true,
            bounce: false,
            eventPassthrough: 'horizontal'
        });
        this.scroll.on('scroll', (e) => {
            let changeHeight = this.refs.swiperBox.offsetHeight - this.refs.titleBox.offsetHeight;
            if (- e.y < changeHeight) {
                var titleOpacity = Math.round(parseFloat(- e.y / changeHeight) * 100) / 100;
                var changeIcon = false;
            } else {
                titleOpacity = 1;
                changeIcon = true;
            }
            const scrollH = this.state.scrollHeight;
            let index = 0;
            for (let i = 0; i < scrollH.length; i ++) {
                if (- e.y >= scrollH[i] && (- e.y < scrollH[i + 1] || scrollH[i + 1] === undefined)) {
                    index = i
                }
            }
            this.setState({
                titleOpacity,
                changeIcon,
                titleIndex: index
            })
        })
    }
    changeIndex(index) {
        if (index !== this.state.titleIndex) {
            this.scroll.scrollTo(0, - this.state.scrollHeight[index], 700)
        }
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
                <div className="goods-detail" style={{ height: `${this.state.baseHeight}px` }}>
                    <div style={{ width: '100%' }}>
                        <div ref="scrollBox0">
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
                        </div>
                        <div className="goods-comments" ref="scrollBox1">
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
                                </div>
                            </div>
                        </div>
                        <div className="goods-details" ref="scrollBox2">
                            <div className="goods-details_title">
                                <span>概述</span>
                            </div>
                            <div className="goods-details_img">
                                {
                                    this.state.detailsImg.map((item, index) => {
                                        return (
                                            <img src={item} alt="" key={index + item}/>
                                        )
                                    })
                                }
                                <img src="https://img.youpin.mi-img.com/editor1/34d9309abc25227d26891dddcdf946d0.png@base@tag=imgScale&F=webp" alt=""/>
                            </div>
                        </div>
                        <div className="goods-recommend" ref="scrollBox3">
                            <div className="goods-recommend_title">
                                <span>为您推荐</span>
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