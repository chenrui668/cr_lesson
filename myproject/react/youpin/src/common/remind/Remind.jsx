import React, { Component } from 'react';
import './Remind.css';

class Remind extends Component {
    render() { 
        return (  
            <div className="remind-content" style={{display: this.props.status ? 'block' : 'none'}}>
                {this.props.text}
            </div>
        );
    }
}
 
export default Remind;