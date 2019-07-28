import { connect } from 'react-redux';
import MenuGoods from '../components/Menu/MenuGoods/MenuGoods';

const mapStateToprops = (state) => {
    return {
        list: state.MenuList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecommendList: (list) => {
            dispatch({
                type: 'addRecommendList',
                value: list
            });
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(MenuGoods); 