import React, { Component } from 'react';
import './ChooseDetail.css'


class ChooseDetail extends Component {
    state = {}
    hideChoosePage() {
        this.props.hidePage();
    }
    chooseEvent(index, idx) {
        this.props.chooseEvent(index, idx);
    }
    reduceNum() {
        this.props.reduceNum();
    }
    addNum() {
        this.props.addNum();
    }
    render() {
        return (
            <div className="goods-choose_detail">
                <div className={this.props.showPage ? 'choose-detail_bg choose-detail_showBg' : 'choose-detail_bg'} style={{ height: `${this.props.height}px` }} onClick={this.hideChoosePage.bind(this)}>
                </div>
                <div className={this.props.showPage ? 'choose-detail_content choose-detail_showContent' : 'choose-detail_content'}>
                    <div className="choose-detail_header">
                        <img className="img" src={this.props.goodsImg} alt="" />
                        <div className="choose-header_info">
                            <div className="choose-info_price">
                                ￥<span>{this.props.price}</span>
                            </div>
                            {
                                this.props.tagsFlag ? 
                                <div className="choose-info_num">
                                    {this.props.isChoose ? '已选:' : ''}&nbsp;&nbsp;{this.props.tags}{this.props.isChoose ? ` x ${this.props.count}` : ''}
                                </div> : 
                                <div className="choose-info_num">
                                    已选:&nbsp;&nbsp;{this.props.count}件
                                </div>
                            }
                        </div>
                        <div className="choose-header_close" onClick={this.hideChoosePage.bind(this)}>
                            <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/detail_modal_icon_close.png" alt=""/>
                        </div>
                    </div>
                    <div className="choose-detail_container">
                        {
                            this.props.shopTags.map((item, index) => {
                                return (
                                    <div className="choose-container_tags" key={index + item}>
                                        <p>{item.name}</p>
                                        {
                                            item.tags.map((itm, idx) => {
                                                return (
                                                    <div className={item.activeIndex === idx ? 'choose-tags_item choose-tags_active' : `choose-tags_item`} key={idx + itm} onClick={this.chooseEvent.bind(this, index, idx)}>
                                                        <span>{itm.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        <div className="choose-container_num">
                            <p>数量</p>
                            <div className="choose-num_btn">
                                {
                                    this.props.count > 1 ?
                                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/sku_icon_minus_nor.png" onClick={this.reduceNum.bind(this)} alt=""/> :
                                    <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/sku_icon_minus_no.png"/>
                                }
                                <div className="choose-num">
                                    <span>{this.props.count}</span>
                                </div>
                                <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/sku_icon_plus_nor.png" onClick={this.addNum.bind(this)} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseDetail;