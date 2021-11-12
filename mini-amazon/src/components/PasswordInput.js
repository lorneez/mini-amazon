import React, { Component } from 'react';
class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      value: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ value: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }
  render() {
    return (
      <div>
        <input className="input is-primary" type="text" placeholder="Password"
          type={this.state.hidden ? 'password' : 'text'}
          value={this.state.value}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.toggleShow}>Show / Hide</button>
      </div>
    );
  }
}
export default PasswordInput;