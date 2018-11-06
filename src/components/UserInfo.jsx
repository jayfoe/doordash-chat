import React from 'react'

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      elapsed: 0
    }
  }

  componentDidMount() {
    const start = new Date();
    setInterval(() =>
      this.setState({
        elapsed: new Date() - start
      }), 1000
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentUser}</h2>
        <h5>
          Online for {Math.floor((this.state.elapsed / 1000) / 60)} minutes
        </h5>
      </div>
    );
  }
}

export default UserInfo;