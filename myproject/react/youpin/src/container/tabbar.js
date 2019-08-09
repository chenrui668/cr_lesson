import { connect } from 'react-redux';
import Tabbar from '../common/tabbar/Tabbar';

const mapStateToprops = (state) => {
    return {
        totalCount: state.shopCart.totalCount
    }
}


export default connect(mapStateToprops, null)(Tabbar); 