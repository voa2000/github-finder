import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };
  searchUser = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitUser = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.submitUser}>
          <input
            className='btn btn-dark btn-black'
            type='text'
            name='text'
            onChange={event => this.searchUser(event)}
            value={this.state.text}
            placeholder='Search Users ....'
          />
        </form>
      </div>
    );
  }
}

export default Search;
