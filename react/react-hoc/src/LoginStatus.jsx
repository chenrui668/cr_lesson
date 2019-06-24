import React from 'react';
import withLogin from './WithLogin';

class LoginStatus extends React.Component {
    render () {
        return (
            <div>
                <button>已经登录</button>
            </div>
        )
    }
}
LoginStatus.displayName = 'LoginStatus';
export default LoginStatus