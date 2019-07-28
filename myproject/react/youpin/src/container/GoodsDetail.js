import { connect } from 'react-redux';
import GoodsDetail from '../components/Menu/MenuGoods/GoodsDetail/GoodsDetail';

const mapStateToprops = (state) => {
    return {
        recommendList: state.recommendList
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

export default connect(mapStateToprops, null)(GoodsDetail); 