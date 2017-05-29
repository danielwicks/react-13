"use strict";

//https://api.github.com/users/danielwicks

var Card = React.createClass({
    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        var component = this;
        $.get("https://api.github.com/users/" + this.props.login, function (data) {
            component.setState(data);
        });
    },
    render: function render() {
        var emptyForm = React.createElement(Form, null);

        if (this.state) {
            return React.createElement(
                "div",
                null,
                React.createElement("img", { src: this.state.avatar_url, width: "80" }),
                React.createElement(
                    "h3",
                    null,
                    this.state.name
                ),
                React.createElement("hr", null)
            );
        } else {
            {
                emptyForm;
            }
        }
    }
});

//                 <div>
//                    {this.state}
//                 </div>

var Form = React.createClass({
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);

        loginInput.value = '';
    },
    render: function render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            React.createElement("input", { placeholder: "github login", ref: "login" }),
            React.createElement(
                "button",
                null,
                "Add"
            )
        );
    }
});

var Main = React.createClass({
    getInitialState: function getInitialState() {
        return { logins: [] };
    },
    addCard: function addCard(loginToAdd) {
        this.setState({ logins: this.state.logins.concat(loginToAdd) });
    },
    render: function render() {
        var cards = this.state.logins.map(function (login) {
            return React.createElement(Card, { login: login });
        });
        return React.createElement(
            "div",
            null,
            React.createElement(Form, { addCard: this.addCard }),
            cards
        );
    }
});

React.render(React.createElement(Main, null), document.getElementById('root'));