import React from 'react'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setCurrentUser(this.state.name);
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.handleSubmit}>
        <input
          className="login login-field"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Type your username..."
          type="text" />
        <input
          className="login login-button"
          type="submit"
          disabled={!this.state.name}
          value="Join the DoorDash Chat!" />
      </form>
    );
  }
}

export default Login;