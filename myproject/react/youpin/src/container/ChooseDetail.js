import { connect } from 'react-redux';
import ChooseDetail from '../components/Menu/MenuGoods/GoodsDetail/ChooseDetail/ChooseDetail';


const mapDispatchToProps = (dispatch) => {
    return {
        addShopCart: (item) => {
            dispatch({
                type: 'addShopCart',
                value: item
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(ChooseDetail) 