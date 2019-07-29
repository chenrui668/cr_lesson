import React, { Component } from 'react';
import './ChooseDetail.css'


class ChooseDetail extends Component {
    state = {}
    hideChoosePage() {
        this.props.hidePage();
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
                            <div className="choose-info_num">
                                已选: &nbsp;<span>1件</span>
                            </div>
                        </div>
                        <div className="choose-header_close" onClick={this.hideChoosePage.bind(this)}>
                            <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/detail_modal_icon_close.png" alt=""/>
                        </div>
                    </div>
                    <div className="choose-detail_container">
                        <div className="choose-container_num">
                            <p>数量</p>
                            <div className="choose-num_btn">
                                <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/sku_icon_minus_no.png" alt=""/>
                                <div className="choose-num">
                                    <span>1</span>
                                </div>
                                <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/sku_icon_plus_nor.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseDetail;