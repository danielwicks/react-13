'use strict';

var Button = React.createClass({
    localHandleClick: function localHandleClick() {
        this.props.localHandleClick(this.props.increment);
    },
    render: function render() {
        return React.createElement(
            'button',
            { onClick: this.localHandleClick },
            '+',
            this.props.increment
        );
    }
});

var Result = React.createClass({

    render: function render() {
        return React.createElement(
            'div',
            null,
            this.props.localCounter
        );
    }
});

var Main = React.createClass({
    getInitialState: function getInitialState() {
        return { counter: 0 };
    },
    handleClick: function handleClick(increment) {
        this.setState({ counter: this.state.counter + increment });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Button, { localHandleClick: this.handleClick, increment: 1 }),
            React.createElement(Button, { localHandleClick: this.handleClick, increment: 5 }),
            React.createElement(Button, { localHandleClick: this.handleClick, increment: 10 }),
            React.createElement(Button, { localHandleClick: this.handleClick, increment: 100 }),
            React.createElement(Result, { localCounter: this.state.counter })
        );
    }
});

React.render(React.createElement(Main, null), document.getElementById('root'));