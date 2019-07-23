import React, { Component } from 'react';
import connect from './react-redux/connect';

class Count extends Component {
    state = {  }
    render() { 
        const { count } = this.props;
        return (  
            <div>
                count: { count }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    count: state
})
 
export default connect(mapStateToProps)(Count);