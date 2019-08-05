import React, { Component } from 'react';
class ShopCart extends Component {
    state = {  }
    render() { 
        console.log(this.props.shopCart)
        return ( 
            <div>
                购物车
            </div>
        );
    }
}
 
export default ShopCart;