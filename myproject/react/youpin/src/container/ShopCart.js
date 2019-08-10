import { connect } from 'react-redux';
import ShopCart from '../components/ShopCart'; 

const mapStateToprops = (state) => {
    return {
        shopCart: state.shopCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeChooseStatus: (index) => {
            dispatch({
                type: 'changeChooseStatus',
                value: index
            });
        },
        changeTotalChooseStatus: (flag) => {
            dispatch({
                type: 'changeTotalChooseStatus',
                value: flag
            });
        },
        addShopCount: (index) => {
            dispatch({
                type: 'addShopCount',
                value: index
            });
        },
        reduceShopCount: (index) => {
            dispatch({
                type: 'reduceShopCount',
                value: index
            });
        },
        changeDeleteFlag: (index) => {
            dispatch({
                type: 'changeDeleteFlag',
                value: index
            });
        },
        changeTotalDeleteStatus: (flag) => {
            dispatch({
                type: 'changeTotalDeleteStatus',
                value: flag
            });
        },
        deleteShopCartItem: () => {
            dispatch({
                type: 'deleteShopCartItem'
            });
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(ShopCart);