import React from 'react'

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        className="message-form"
        onSubmit={this.handleSubmit}
        disabled={this.props.disabled}>
        <input
          className="message-field"
          onChange={this.handleChange}
          value={this.state.message}
          disabled={this.props.disabled}
          placeholder="Type a message..."
          type="text" />
        <input
          className="message-submit"
          type="submit"
          value="Send" />
      </form>
    );
  }
}

export default MessageForm;