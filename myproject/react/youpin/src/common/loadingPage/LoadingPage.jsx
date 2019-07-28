import React, { Component } from 'react';
import './LoadingPage.css'

class LoadingPage extends Component {
    state = {  
        baseHeight: 0
    }
    componentDidMount () {
        let baseHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.setState({
            baseHeight
        })
    }
    render() { 
        return (  
            <div className="bg-content" style={{ height: `${this.state.baseHeight}px` }}>
                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/loading_v2.png" alt="" />
            </div>
        );
    }
}
 
export default LoadingPage;