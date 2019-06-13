import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showUsers: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  changeUser = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUser = e => {
    e.preventDefault();
    if (this.state.text) {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
    }
    this.setState({ text: "" });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.submitUser} className='form'>
          <input
            type='text'
            name='text'
            onChange={this.changeUser}
            value={this.state.text}
            placeholder='Search Users ....'
          />
          <input
            className='btn btn-dark btn-black'
            type='submit'
            value='Search'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
