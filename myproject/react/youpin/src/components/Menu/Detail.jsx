import React, { Component } from 'react';
import axios from 'axios';
import './Detail.css'
class Detail extends Component {
    state = {  
        titleImg: '',
        detailList: []
    }
    getResponse() {
        let url = `https://www.easy-mock.com/mock/5d2c63b8a8d6b5597459c82f/youpin/detail-list${this.props.match.params.id}`
        axios.get(url).then((res) => {
            let imgurl = res.data.data.detail_list[0].pic_url;
            let list = res.data.data.detail_list.slice(1);
            this.setState({
                titleImg: imgurl,
                detailList: list
            })
        })
    }
    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }
    render() { 
        this.getResponse();
        return (  
            <div className="menu-right">
                {
                    this.props.match.params.id === '18' ? '' :
                    <div className="title-img">
                        <img src={this.state.titleImg} alt=""/>
                    </div>
                }
                <div className="detail-box">
                    {
                        this.state.detailList.map((item, index) => {
                            return (
                                <div className="detail-item" key={index + item}>
                                    <img src={item.pic_url} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default Detail;