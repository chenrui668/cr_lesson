import React from 'react';

class Child extends React.Component {
    state = {
        childCount: 0
    }
    handleChildCountChange = () => {
        let { childCount } = this.state;
        childCount ++;
        this.setState({
            childCount
        })
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            console.log('child setInterveal');
        }, 1000);
    }
    // props 更新
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    // 组件性能优化
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextProps.count !== this.props.count || nextState.childCount !== this.state.childCount) {
            return true;
        }
        return false;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('componentWillUnmount');
    }
    render() {
        const { count } = this.props;
        const { childCount } = this.state;
        console.log('render function');
        return (
            <div>
                <button onClick={this.handleChildCountChange}>
                    child state change
                </button>
                child component
                count: { count }
                childCount: { childCount }
            </div>
        )
    }
}

export default Child;