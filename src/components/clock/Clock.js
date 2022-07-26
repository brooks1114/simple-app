import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000)

    }

    // Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }


    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

export default Clock;