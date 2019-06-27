import React, { Component } from 'react';
import { debounce, decDebounce, decArrowDebounce, desDisplayName } from './util';

// 加了一个静态属性 displayName
@desDisplayName('CustomExampleDebounce')
class ExampleDeBounce extends Component {
    state = {  }
    @decDebounce(1000)
    handleSubmit() {
        console.log('submit request');
    }
    @decArrowDebounce(1000)
    handleBuy = () => {
        console.log('buy now');
    }
    // handleSubmit = debounce(function() {
    //     console.log('request submit');
    // }, 1000)
    render() { 
        console.log(this.handleBuy);
        console.log(this.handleSubmit);
        return (  
            <div>
                <button onClick={this.handleSubmit}>
                    提交订单
                </button>
                <button onClick={this.handleBuy}>
                    立即购买
                </button>
            </div>
        );
    }
}
 
export default ExampleDeBounce;