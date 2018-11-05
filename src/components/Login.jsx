import React from 'react'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.setCurrentUser(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        disabled={this.props.disabled}>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          disabled={this.props.disabled}
          placeholder="Type your username..."
          type="text" />
        <input type="submit" value="Join the DoorDash Chat!" />
      </form>
    );
  }
}

export default Login;