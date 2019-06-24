import React from 'react';
import withLogin from './WithLogin';

@withLogin
class ShopCart extends React.Component {
    render () {
        const {a, b} = this.props;
        return (
            <div>
                <li>{a}</li>
                <li>{b}</li>
                <li>手机</li>
                <li>平板</li>
            </div>
        )
    }
}
ShopCart.displayName = 'ShopCart';
export default ShopCart;