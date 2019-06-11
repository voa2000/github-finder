import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = { searchUsers: PropTypes.func.isRequired };
  changeUser = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitUser = event => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitUser} className='form'>
          <input
            className='btn btn-dark btn-black'
            type='text'
            name='text'
            onChange={event => this.changeUser(event)}
            value={this.state.text}
            placeholder='Search Users ....'
          />
        </form>
      </div>
    );
  }
}

export default Search;
