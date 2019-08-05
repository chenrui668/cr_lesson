import { connect } from 'react-redux';
import ShopCart from '../components/ShopCart'; 

const mapStateToprops = (state) => {
    return {
        shopCart: state.shopCart
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addRecommendList: (list) => {
//             dispatch({
//                 type: 'addRecommendList',
//                 value: list
//             });
//         }
//     }
// }

export default connect(mapStateToprops, null)(ShopCart);