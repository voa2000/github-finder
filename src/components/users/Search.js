import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const submitUser = e => {
    e.preventDefault();
    if (text === "") {
      setAlert(" Please enter a username or name to search for", "dark");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const changeUser = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={submitUser.bind(this)} className='form'>
        <input
          type='text'
          name='text'
          onChange={changeUser}
          value={text}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
