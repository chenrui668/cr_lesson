import { connect } from 'react-redux';
import Detail from '../components/Menu/Detail';
// import { addItem, changeValue } from '../redux/action';

// const mapStateToprops = (state) => {
//     return {
        
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenuList: (list) => {
            dispatch({
                type: 'changeMenuList',
                value: list
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Detail) 