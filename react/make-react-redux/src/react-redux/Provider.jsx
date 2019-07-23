import React, { Component } from 'react';
import { Provider } from './context';
class EnhancedProvider extends Component {
    state = {}
    render() {
        const {store} = this.props;
        return (
            <Provider value={store}>
                { this.props.children }
            </Provider>
        );
    }
}

export default EnhancedProvider;