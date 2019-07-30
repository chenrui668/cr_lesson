import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BScroll from 'better-scroll';
import axios from 'axios';
import './GoodsDetail.css';
import LoadingPage from '../../../../common/loadingPage/LoadingPage';
import GoodsItem from '../../../../common/goodsItem/GoodsItem';
import ChooseDetail from './ChooseDetail/ChooseDetail';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class GoodsDetail extends Component {
    state = {
        baseHeight: 0,
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
        scrollHeight: [],
        showContent: false,
        swiperImg: [],
        price: 0,
        name: '',
        summary: '',
        tagsFlag: false,
        tags: '',
        shopTags: [],
        tagsInfoList: [],
        service: [],
        services: {},
        commentNum: 0,
        satComment: 0,
        commentTags: [],
        commentRank: [],
        detailsImg: [],
        showChoosePage: false,
        goodsImg: '',
        isChoose: false,
        count: 1
    }
    BScroll() {
        this.scroll = new BScroll('.goods-detail', {
            click: true,
            probeType: 3,
            scrollY: true,
            bounce: false,
            eventPassthrough: 'horizontal'
        });
    }
    scrollEvent() {
        let scrollHeight = [0];
        for (let i = 1; i < 4; i++) {
            let height = this.refs[`scrollBox${i}`].offsetTop - this.refs.titleBox.offsetHeight;
            scrollHeight.push(height);
        }
        this.setState({
            scrollHeight
        })
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
            for (let i = 0; i < scrollH.length; i++) {
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
    Swiper() {
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
    initState() {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let url = this.props.match.url;
        let a = url.split('/');
        let a2 = a.slice(0, 4);
        let a3 = a2.join('/');
        let b = a[a.length - 1].split('-');
        let preUrl = `${a3}/goods/${b[0]}`;
        this.setState({
            baseHeight,
            preUrl,
        })
    }
    axiosRequest() {
        let a = this.props.match.params.id;
        let url = `https://www.easy-mock.com/mock/5d2c63b8a8d6b5597459c82f/youpin/goods-detail${a}`;
        axios.get(url).then((res) => {
            let data = res.data.data;
            let swiperImg = data.goods.carouselMapList;
            let price = parseFloat(data.goods.goodsInfo.priceMin / 100);
            let name = data.goods.goodsInfo.name;
            let summary = data.goods.goodsInfo.summary;
            let tagsFlag = !!data.goods.shopTags;
            if (tagsFlag) {
                let tagsList = [];
                for (let i = 0; i < data.goods.shopTags.length; i ++) {
                    tagsList.push(data.goods.shopTags[i].name)
                }
                let tags = `请选择${tagsList.join(' ')}`;
                let arr = data.goods.goodsInfo.pids;
                let productInfo = data.goods.productInfo;
                let tagsInfoList = [];
                let shopTags = data.goods.shopTags;
                for (let item of arr) {
                    tagsInfoList.push(productInfo[item])
                }
                this.setState({
                    tags,
                    tagsInfoList,
                    shopTags
                })
            } 
            let service = data.goods.goodsInfo.service;
            let services = data.goods.services;
            let commentNum = data.comment.index.tags[0].count;
            let satComment = data.comment.index.positive_rate;
            let commentTags = data.comment.index.tags.slice(1, 5);
            let commentRank = data.comment.content;
            let detailsImg = data.rags;
            let goodsImg = data.goods.goodsInfo.compressedImg800;
            this.setState({
                swiperImg,
                price,
                name,
                summary,
                tagsFlag,
                service,
                services,
                commentNum,
                satComment,
                commentTags,
                commentRank,
                detailsImg,
                goodsImg,
                showContent: true
            })
        }).then(() => {
            this.BScroll(); 
            setTimeout(() => {     
                this.Swiper();
                this.scrollEvent();
            },800)
        })
    }
    componentDidMount() {
        this.initState();
        this.axiosRequest();
    }
    componentWillUnmount() {
        this.scroll.destroy();
    }
    changeIndex(index) {
        if (index !== this.state.titleIndex) {
            this.scroll.scrollTo(0, - this.state.scrollHeight[index], 700)
        }
    }
    chooseDetail() {
        this.setState({
            showChoosePage: true
        })
    }
    hideChoosePage() {
        this.setState({
            showChoosePage: false
        })
    }
    chooseEvent(index, idx) {
        let shopTags = this.state.shopTags.slice(0);
        let infoList = this.state.tagsInfoList;
        let name = shopTags[index].tags[idx].name;
        let targetArr = [];
        for (let item of infoList) {
            if (item.attributeValues[index] === name) {
                targetArr = item.attributeValues.slice(0);
                this.setState({
                    goodsImg: item.compressedImg800,
                    price: parseFloat(item.price / 100),
                    name: item.name,
                    summary: item.summary,
                    tags: targetArr.join(' '),
                    isChoose: true
                })
                break;
            }
        }
        for (let i = 0; i < shopTags.length; i ++) {
            for (let j = 0; j < shopTags[i].tags.length; j ++) {  
                if (shopTags[i].tags[j].name === targetArr[i]) {
                    shopTags[i].activeIndex = j;
                }
            }
        }
        this.setState({
            shopTags
        })
    }
    addNum() {
        let num = this.state.count;
        this.setState({
            count: num + 1
        })
    }
    reduceNUm() {
        let num = this.state.count;
        this.setState({
            count: num - 1
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
                        this.state.changeIcon ? <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_nav_icon_more.png" />
                            : <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_nav_icon_more_transparent.png" alt="" />
                    }
                </div>
                {
                    this.state.showContent ?
                        <div className="goods-detail" style={{ height: `${this.state.baseHeight}px` }}>
                            <div style={{ width: '100%' }}>
                                <div ref="scrollBox0">
                                    <div className="swiper-container" ref='swiperBox' style={{ height: '18.75rem' }}>
                                        <div className="swiper-wrapper">
                                            {
                                                this.state.swiperImg.map((item, index) => {
                                                    return (
                                                        <div className="swiper-slide" key={index + item}>
                                                            <img src={item.url} alt="" />
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
                                            ￥<span>{this.state.price}</span>
                                        </div>
                                        <div className="goods-info_name">
                                            <span>{this.state.name}</span>
                                        </div>
                                        <div className="goods-info_summary">
                                            <span>{this.state.summary}</span>
                                        </div>
                                        <div className="youpin-img">
                                            <img src="https://img.youpin.mi-img.com/editor1/ce497b9d0341ac785d77e343dddab7e7.png?w=1080&h=111" alt="" />
                                        </div>
                                    </div>
                                    <div className="goods-choose">
                                        <div className="goods-choose_box" onClick={this.chooseDetail.bind(this)}>
                                            <span className="goods-choose_title">已选</span>
                                            <div className="goods-choose_text goods-choose_text1">
                                                {
                                                    this.state.tagsFlag ? 
                                                    <span>
                                                        {this.state.tags}{this.state.isChoose ? ` x ${this.state.count}` : ''}
                                                    </span> : 
                                                    <span>
                                                        {this.state.count}件
                                                    </span>
                                                }
                                            </div>
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
                                        </div>
                                        <div className="goods-choose_box">
                                            <span className="goods-choose_title">送至</span>
                                            <div className="goods-choose_text goods-choose_text2">北京市 海淀区</div>
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
                                        </div>
                                        <div className="goods-choose_box">
                                            <span className="goods-choose_title">服务</span>
                                                <div className="goods-choose_text goods-choose_text3">
                                                {
                                                    this.state.service.map((item, index) => {
                                                        return (
                                                            <div key={index + item} style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                marginRight: '0.6rem'
                                                            }}>
                                                                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/detail_icon_service_v2.png" alt="" />
                                                                <span>{this.state.services[`${item}`].text}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="goods-comments" ref="scrollBox1">
                                    <div className="goods-comments_head">
                                        <div className="goods-comments_num">
                                            <span>用户评价({this.state.commentNum})</span>
                                        </div>
                                        <div className="goods-comments_sat">
                                            <span>{this.state.satComment}%满意</span>
                                            <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="goods-comments_label">
                                        {
                                            this.state.commentTags.map((item, index) => {
                                                return (
                                                    <span key={index + item}>{item.name}({item.count})</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="goods-comments_content">
                                        <div className="goods-comments_list">
                                            {
                                                this.state.commentRank.map((item, index) => {
                                                    return (
                                                        <div className="goods-comments_item" key = {index + item}>
                                                            <div className="comments-user">
                                                                <div className="comments-user_img">
                                                                    {
                                                                        !!item.avatar ? <img src={item.avatar} alt="" /> 
                                                                        : <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_icon_user.png" alt=""/> 
                                                                    }
                                                                </div>
                                                                <div className="comments-user_name">
                                                                    <span>{item.nick_name}</span>
                                                                </div>
                                                                <div className="comments-user_rank">
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="" />
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="" />
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="" />
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="" />
                                                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="" /> 
                                                                </div>
                                                            </div>
                                                            <div className="comments-text">
                                                                {item.txt}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
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
                                                    <img src={item.src} alt="" key={index + item} />
                                                )
                                            })
                                        }
                                        <img src="https://img.youpin.mi-img.com/editor1/34d9309abc25227d26891dddcdf946d0.png@base@tag=imgScale&F=webp" alt="" />
                                    </div>
                                </div>
                                <div className="goods-recommend" ref="scrollBox3">
                                    <div className="goods-recommend_title">
                                        <span>为您推荐</span>
                                    </div>
                                    <div className="goods-recommend_content">
                                        {
                                            this.props.recommendList.map((item, index) => {
                                                return (
                                                    <div className="goods-recommend_item" key={index + item}>
                                                        <GoodsItem 
                                                            img = {item.img}
                                                            colorNum = {item.colorNum}
                                                            isLowPrice = {item.isLowPrice}
                                                            name = {item.name}
                                                            summary = {item.summary}
                                                            price = {item.price}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> : <LoadingPage/>
                }
                <ChooseDetail 
                    height={this.state.baseHeight}
                    showPage={this.state.showChoosePage}
                    hidePage={this.hideChoosePage.bind(this)}
                    goodsImg={this.state.goodsImg}
                    price={this.state.price}
                    shopTags={this.state.shopTags}
                    chooseEvent={this.chooseEvent.bind(this)}
                    tagsFlag={this.state.tagsFlag}
                    tags={this.state.tags}
                    isChoose={this.state.isChoose}
                    count={this.state.count}
                    addNum={this.addNum.bind(this)}
                    reduceNum={this.reduceNUm.bind(this)}
                />
            </div>
        );
    }
}

export default GoodsDetail;