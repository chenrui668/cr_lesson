import { connect } from 'react-redux';
import MenuGoods from '../components/Menu/MenuGoods/MenuGoods';

const mapStateToprops = (state) => {
    return {
        list: state.MenuList,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }

export default connect(mapStateToprops, null)(MenuGoods); 