import React from 'react';
// flushSync 执行某个任务时 以优先最高级的方式执行
import { flushSync } from 'react-dom';
import './index.css'
class Parent extends React.Component {
    state = {
        async: true,
        num: 1,
        length: 2000
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateNum()
        }, 100)
    }
    updateNum = () => {
        const { async, num } = this.state;
        const newNum = num === 5 ? 0 : num + 1
        if (async) {
            this.setState({
                num: newNum
            })
        } else {
            flushSync(() => {
                this.setState({
                    num: newNum
                })
            })
        }
    }

    handleAsyncToggle = () => {
        return flushSync(() => {
            const { async } = this.state
            this.setState({
                async: !async
            })
        })

    }
    render() {
        const { async, num, length } = this.state
        let grids = []
        for (let i = 0; i < length; i++) {
            grids.push(
                <div className="item" key={i}>{num}</div>

            )
        }
        return (
            <div className="main">
                async:
                <input type="checkbox" checked={async} onChange={this.handleAsyncToggle} />

                <div className="wrapper">
                    {
                        grids
                    }
                </div>
            </div>
        );
    }
}
class Index extends React.Component {
    render() {
        return (
            <React.unstable_ConcurrentMode>
                <Parent></Parent>
            </React.unstable_ConcurrentMode>
        )
    }
}
export default Index;
