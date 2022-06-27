import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn, setLogOut } from '../actions';

function DummyLogin() {
  const reduxState = useSelector((state) => state);
  console.log('state', reduxState);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log('input data', obj);
    dispatch(setIsLoggedIn(obj));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email </label>
          <input type='email' name='username' required />
        </div>
        <div>
          <label>Password </label>
          <input type='password' name='password' required />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <br />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(setLogOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DummyLogin;
